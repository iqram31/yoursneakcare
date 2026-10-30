import hero from '../assets/img/hero.webp'

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink text-paper">
      <img src={hero} alt="Sepatu kanvas putih yang sudah bersih dipegang dengan kedua tangan" className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/75 to-ink/30" />
      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-14 sm:px-6 sm:pb-20">
        <p className="font-semibold tracking-[0.2em] text-rust-light uppercase">Your Shoes Priority</p>
        <h1 className="mt-3 max-w-3xl font-display text-7xl leading-[0.92] sm:text-8xl lg:text-9xl">
          Sepatu kamu, kembali siap dipakai.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-paper/85">
          Cuci sepatu, repaint, unyellowing, sampai perawatan tas. Pilih layanannya, kirim ordernya lewat WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#layanan" className="bg-rust px-6 py-3.5 font-semibold text-white hover:bg-rust-light hover:text-ink">
            Lihat harga &amp; order
          </a>
          <a href="#hasil" className="border border-paper/50 px-6 py-3.5 font-semibold hover:bg-paper hover:text-ink">
            Lihat hasil kerja
          </a>
        </div>
      </div>
    </section>
  )
}
