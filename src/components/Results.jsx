import before from '../assets/img/af1-before.webp'
import after from '../assets/img/af1-after.webp'
import outsole from '../assets/img/ba-outsole.webp'
import sole from '../assets/img/ba-sole.webp'
import insole from '../assets/img/ba-insole.webp'
import canvas from '../assets/img/ba-canvas.webp'

const gallery = [
  [outsole, 'Dua outsole sepatu, kiri masih kotor dan kanan sudah bersih'],
  [sole, 'Dua sol sepatu, kiri kotor dan kanan bersih'],
  [canvas, 'Sepasang sepatu kanvas, kiri bersih dan kanan masih kotor'],
  [insole, 'Sepasang sepatu mesh abu-abu, kiri bersih dan kanan masih kotor'],
]

export default function Results() {
  return (
    <section id="hasil" className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-semibold text-rust-light">Before &amp; after</p>
        <h2 className="mt-1 font-display text-6xl leading-none">Bedanya kelihatan</h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <figure className="relative">
            <img src={before} alt="Sepatu putih kusam dengan midsole menguning sebelum dicuci" width="670" height="540" loading="lazy" className="w-full" />
            <figcaption className="absolute top-3 left-3 bg-ink px-2 py-1 font-display text-xl">Before</figcaption>
          </figure>
          <figure className="relative">
            <img src={after} alt="Sepatu yang sama, bersih setelah dicuci" width="670" height="546" loading="lazy" className="w-full" />
            <figcaption className="absolute top-3 left-3 bg-rust px-2 py-1 font-display text-xl text-white">After</figcaption>
          </figure>
        </div>

        <ul className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {gallery.map(([src, alt]) => (
            <li key={src}>
              <img src={src} alt={alt} loading="lazy" className="aspect-square w-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
