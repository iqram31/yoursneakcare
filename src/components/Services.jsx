import { useState } from 'react'
import { categories } from '../data/services'
import { formatPrice } from '../lib/order'

export default function Services({ cart, onAdd, onChangeQty }) {
  const [activeId, setActiveId] = useState('deep')
  const active = categories.find((category) => category.id === activeId)

  return (
    <section id="layanan" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-semibold text-rust">Price list</p>
      <h2 className="mt-1 font-display text-6xl leading-none">Pilih perawatannya</h2>
      <p className="mt-3 max-w-xl text-ink-soft">Tambahkan layanan ke order, lalu kirim lewat WhatsApp di bagian bawah.</p>

      <div role="tablist" aria-label="Kategori layanan" className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={category.id === activeId}
            onClick={() => setActiveId(category.id)}
            className={`shrink-0 border px-4 py-2 text-sm font-semibold ${
              category.id === activeId ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" aria-label={active.name} className="mt-6 grid gap-8 border-t-2 border-ink pt-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <h3 className="font-display text-4xl">{active.name}</h3>
          <p className="mt-2 text-ink-soft">{active.summary}</p>
          <p className="mt-4 text-sm font-semibold">Estimasi {active.duration}</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft">
            {active.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          {active.note && <p className="mt-4 border-l-2 border-rust pl-3 text-sm">{active.note}</p>}
        </div>

        <ul className="divide-y divide-line">
          {active.items.map((item) => {
            const qty = cart[item.id]?.qty ?? 0
            return (
              <li key={item.id} className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-lg font-semibold">{item.name}</p>
                  {item.detail && <p className="text-sm text-ink-soft">{item.detail}</p>}
                  <p className="mt-1 font-semibold text-rust">{formatPrice(item)}</p>
                </div>
                {qty === 0 ? (
                  <button
                    type="button"
                    onClick={() => onAdd(item.id)}
                    aria-label={`Tambah ${item.name}`}
                    className="shrink-0 border border-ink px-4 py-2 text-sm font-semibold hover:bg-ink hover:text-paper"
                  >
                    Tambah
                  </button>
                ) : (
                  <QtyStepper name={item.name} qty={qty} onChange={(next) => onChangeQty(item.id, next)} />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function QtyStepper({ name, qty, onChange }) {
  const buttonClass = 'grid size-10 place-items-center text-lg font-semibold hover:bg-ink hover:text-paper'
  return (
    <div className="flex shrink-0 items-center border border-ink">
      <button type="button" className={buttonClass} aria-label={`Kurangi ${name}`} onClick={() => onChange(qty - 1)}>
        −
      </button>
      <span className="w-8 text-center font-semibold" aria-live="polite">
        {qty}
      </span>
      <button type="button" className={buttonClass} aria-label={`Tambah ${name}`} onClick={() => onChange(qty + 1)}>
        +
      </button>
    </div>
  )
}
