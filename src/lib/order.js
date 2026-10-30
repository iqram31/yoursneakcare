import { EXPRESS_FEE, itemsById } from '../data/services'

export const WHATSAPP_NUMBER = '6289622071705'

const rupiah = (thousands) => `Rp${(thousands * 1000).toLocaleString('id-ID')}`

export function formatPrice({ min, max, from }) {
  if (from) return `Mulai ${rupiah(min)}`
  return max ? `${rupiah(min)}–${rupiah(max)}` : rupiah(min)
}

export function cartLines(cart) {
  return Object.entries(cart).map(([id, { qty, express }]) => {
    const item = itemsById[id]
    const fee = express ? EXPRESS_FEE : 0
    return {
      ...item,
      qty,
      isExpress: Boolean(express),
      lineMin: (item.min + fee) * qty,
      lineMax: ((item.max ?? item.min) + fee) * qty,
    }
  })
}

export function cartTotal(lines) {
  const min = lines.reduce((sum, line) => sum + line.lineMin, 0)
  const max = lines.reduce((sum, line) => sum + line.lineMax, 0)
  return {
    min,
    max: max > min ? max : undefined,
    from: lines.some((line) => line.from),
    count: lines.reduce((sum, line) => sum + line.qty, 0),
  }
}

export function buildWhatsAppUrl({ lines, name, handover, address, notes }) {
  const rows = lines.map((line, index) => {
    const label = `${line.name} (${line.category})${line.isExpress ? ' + Express' : ''}`
    const price = formatPrice({ min: line.lineMin, max: line.lineMax > line.lineMin ? line.lineMax : undefined, from: line.from })
    return `${index + 1}. ${label} x${line.qty}: ${price}`
  })

  const message = [
    'Halo You Sneakcare, saya mau order:',
    '',
    ...rows,
    '',
    `Estimasi total: ${formatPrice(cartTotal(lines))}`,
    '',
    `Nama: ${name.trim()}`,
    `Penyerahan: ${handover === 'pickup' ? 'Minta pickup' : 'Antar sendiri'}`,
    ...(handover === 'pickup' ? [`Alamat: ${address.trim()}`] : []),
    ...(notes.trim() ? [`Catatan: ${notes.trim()}`] : []),
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
