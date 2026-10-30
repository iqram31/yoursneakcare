import { useState } from 'react'
import { buildWhatsAppUrl, cartTotal, formatPrice } from '../lib/order'
import { QtyStepper } from './Services'

const inputClass = 'mt-1 w-full border border-line bg-card px-3 py-2.5 focus:border-ink'

export default function OrderForm({ lines, onChangeQty, onToggleExpress }) {
  const [form, setForm] = useState({ name: '', handover: 'antar', address: '', notes: '' })
  const [error, setError] = useState('')
  const total = cartTotal(lines)
  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  function handleSubmit(event) {
    event.preventDefault()
    if (lines.length === 0) return setError('Pilih minimal satu layanan dulu.')
    if (!form.name.trim()) return setError('Nama perlu diisi.')
    if (form.handover === 'pickup' && !form.address.trim()) return setError('Alamat pickup perlu diisi.')
    setError('')
    window.open(buildWhatsAppUrl({ lines, ...form }), '_blank', 'noopener')
  }

  return (
    <section id="order" className="bg-[#e7e2d8] py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-rust">Order</p>
          <h2 className="mt-1 font-display text-6xl leading-none">Kirim lewat WhatsApp</h2>
          <p className="mt-3 text-ink-soft">
            Pesan otomatis tersusun. Kami konfirmasi harga final setelah melihat kondisi sepatu.
          </p>

          {lines.length === 0 ? (
            <p className="mt-8 border border-dashed border-ink/40 p-6 text-center">
              Belum ada layanan.{' '}
              <a href="#layanan" className="font-semibold text-rust underline">
                Pilih dari price list
              </a>
            </p>
          ) : (
            <ul className="mt-8 divide-y divide-line border-t-2 border-ink">
              {lines.map((line) => (
                <li key={line.id} className="py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold">{line.name}</p>
                      <p className="text-sm text-ink-soft">{line.category}</p>
                      <p className="text-sm font-semibold text-rust">
                        {formatPrice({ min: line.lineMin, max: line.lineMax > line.lineMin ? line.lineMax : undefined, from: line.from })}
                      </p>
                    </div>
                    <QtyStepper name={line.name} qty={line.qty} onChange={(next) => onChangeQty(line.id, next)} />
                  </div>
                  {line.express && (
                    <label className="mt-2 flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={line.isExpress} onChange={() => onToggleExpress(line.id)} className="size-4 accent-rust" />
                      Express +Rp20.000 per pasang (1 hari)
                    </label>
                  )}
                </li>
              ))}
              <li className="flex items-baseline justify-between py-4">
                <span className="font-semibold">Estimasi total</span>
                <span className="font-display text-3xl">{formatPrice(total)}</span>
              </li>
            </ul>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-paper p-5 sm:p-8">
          <label className="block font-semibold">
            Nama
            <input value={form.name} onChange={update('name')} autoComplete="name" className={`${inputClass} font-normal`} />
          </label>

          <fieldset>
            <legend className="font-semibold">Penyerahan sepatu</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                ['antar', 'Antar sendiri'],
                ['pickup', 'Minta pickup'],
              ].map(([value, label]) => (
                <label key={value} className="flex cursor-pointer items-center gap-2 border border-line bg-card px-3 py-2.5 has-checked:border-ink">
                  <input type="radio" name="handover" value={value} checked={form.handover === value} onChange={update('handover')} className="accent-rust" />
                  {label}
                </label>
              ))}
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              {form.handover === 'pickup' ? 'Area dan biaya pickup dikonfirmasi lewat WhatsApp.' : 'Alamat store diinfokan lewat WhatsApp.'}
            </p>
          </fieldset>

          {form.handover === 'pickup' && (
            <label className="block font-semibold">
              Alamat pickup
              <textarea value={form.address} onChange={update('address')} rows="3" autoComplete="street-address" className={`${inputClass} font-normal`} />
            </label>
          )}

          <label className="block font-semibold">
            Catatan <span className="font-normal text-ink-soft">(opsional)</span>
            <textarea
              value={form.notes}
              onChange={update('notes')}
              rows="3"
              placeholder="Merek sepatu, warna repaint, atau kondisi khusus"
              className={`${inputClass} font-normal`}
            />
          </label>

          {error && (
            <p role="alert" className="font-semibold text-rust">
              {error}
            </p>
          )}

          <button type="submit" className="w-full bg-rust px-6 py-3.5 font-semibold text-white hover:bg-ink">
            Kirim order ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
