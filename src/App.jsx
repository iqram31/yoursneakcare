import { useState } from 'react'
import Hero from './components/Hero'
import { Footer, Header } from './components/Layout'
import OrderForm from './components/OrderForm'
import Results from './components/Results'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import { cartLines, cartTotal, formatPrice } from './lib/order'

const steps = [
  ['Pilih layanan', 'Tambahkan perawatan yang kamu butuhkan dari price list.'],
  ['Kirim ke WhatsApp', 'Isi nama dan cara penyerahan, pesan tersusun otomatis.'],
  ['Serahkan sepatu', 'Antar sendiri atau minta pickup, lalu kami konfirmasi harganya.'],
  ['Siap dipakai lagi', 'Sepatu dikerjakan sesuai estimasi layanan.'],
]

export default function App() {
  const [cart, setCart] = useState({})
  const lines = cartLines(cart)
  const total = cartTotal(lines)

  function changeQty(id, qty) {
    setCart(({ [id]: current, ...rest }) => (qty < 1 ? rest : { ...rest, [id]: { ...current, qty } }))
  }

  function toggleExpress(id) {
    setCart((prev) => ({ ...prev, [id]: { ...prev[id], express: !prev[id].express } }))
  }

  return (
    <>
      <Header />
      <main className={lines.length > 0 ? 'pb-20' : undefined}>
        <Hero />
        <Services cart={cart} onAdd={(id) => changeQty(id, 1)} onChangeQty={changeQty} />
        <Results />
        <Testimonials />
        <section aria-labelledby="cara-order" className="border-t border-line bg-card py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="cara-order" className="font-display text-6xl leading-none">
              Cara order
            </h2>
            <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([title, body], index) => (
                <li key={title}>
                  <span className="font-display text-5xl text-rust">{index + 1}</span>
                  <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-ink-soft">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <OrderForm lines={lines} onChangeQty={changeQty} onToggleExpress={toggleExpress} />
      </main>
      <Footer />

      {lines.length > 0 && (
        <a href="#order" className="fixed inset-x-0 bottom-0 z-20 bg-rust text-white">
          <span className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 font-semibold sm:px-6">
            <span>
              {total.count} item · {formatPrice(total)}
            </span>
            <span>Lanjut order</span>
          </span>
        </a>
      )}
    </>
  )
}
