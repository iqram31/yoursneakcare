import converse from '../assets/img/testi-converse.webp'
import newBalance from '../assets/img/testi-nb.webp'
import runner from '../assets/img/testi-runner.webp'

// Kutipan asli dari Instagram Story customer. Handle pribadi sengaja tidak ditampilkan.
const featured = [
  {
    image: runner,
    alt: 'Sepatu lari putih bersih',
    quote: 'Tengkyuuuu! Kinclong, siap dipakai lagi. Enaknya pickup pulak.',
  },
  {
    image: newBalance,
    alt: 'Sepatu putih corak leopard setelah dicuci',
    quote: 'Yeay, cintaqu sudah chakep lagii. Terimakacii udabikin kaya baru lagii!',
  },
  {
    image: converse,
    alt: 'Sepatu kanvas hitam bersih',
    quote: 'Thank you so much, always make me satisfied with the result!!',
  },
]

const shortQuotes = ['Haturnuhun pisan aa', 'Deep cleaning rutin, thankyou so much', 'Mau sepatu bersih kaya baru? Langsung ke @yousneakcare']

export default function Testimonials() {
  return (
    <section id="testimoni" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-semibold text-rust">Testimoni</p>
      <h2 className="mt-1 font-display text-6xl leading-none">Kata customer</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {featured.map(({ image, alt, quote }) => (
          <figure key={quote} className="bg-card">
            <img src={image} alt={alt} loading="lazy" className="aspect-4/3 w-full object-cover" />
            <blockquote className="p-5 text-lg leading-snug font-medium">“{quote}”</blockquote>
          </figure>
        ))}
      </div>

      <ul className="mt-6 grid gap-x-8 gap-y-2 border-t border-line pt-6 text-ink-soft md:grid-cols-3">
        {shortQuotes.map((quote) => (
          <li key={quote}>“{quote}”</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-soft">Diambil dari Instagram Story customer @yousneakcare.</p>
    </section>
  )
}
