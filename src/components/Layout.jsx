import logoWhite from '../assets/img/logo-white.webp'
import { WHATSAPP_NUMBER } from '../lib/order'

const links = [
  ['#layanan', 'Layanan'],
  ['#hasil', 'Hasil'],
  ['#testimoni', 'Testimoni'],
  ['#order', 'Order'],
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-ink/95 text-paper backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="You Sneakcare, ke atas">
          <img src={logoWhite} alt="You Sneakcare" width="640" height="281" className="h-10 w-auto" />
        </a>
        <nav aria-label="Navigasi utama" className="flex items-center gap-5 text-sm font-medium">
          {links.slice(0, 3).map(([href, label]) => (
            <a key={href} href={href} className="hidden hover:text-rust-light sm:block">
              {label}
            </a>
          ))}
          <a href="#order" className="bg-rust px-4 py-2 font-semibold text-white hover:bg-rust-light hover:text-ink">
            Order
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <img src={logoWhite} alt="You Sneakcare" width="640" height="281" className="h-16 w-auto" />
          <p className="mt-3 text-sm text-paper/70">Premium Shoes Laundry</p>
        </div>
        <ul className="space-y-1 text-sm">
          <li>
            <a className="hover:text-rust-light" href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              WhatsApp 0896-2207-1705
            </a>
          </li>
          <li>
            <a className="hover:text-rust-light" href="https://instagram.com/yousneakcare">
              Instagram @yousneakcare
            </a>
          </li>
          <li>
            <a className="hover:text-rust-light" href="mailto:yousneakcare@gmail.com">
              yousneakcare@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
