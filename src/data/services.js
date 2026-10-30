// Sumber: Price List You Sneakcare. Harga dalam ribuan rupiah.
export const EXPRESS_FEE = 20

export const categories = [
  {
    id: 'fast',
    name: 'Fast Cleaning',
    summary: 'Cuci bagian luar sepatu tanpa melepas tali.',
    duration: '1 hari',
    perks: ['Best Parfum & Best Cleaner', 'Silica Gel'],
    items: [{ id: 'fast', name: 'You Fast Cleaning', detail: 'Upper dan midsole', min: 25 }],
  },
  {
    id: 'deep',
    name: 'Deep Cleaning',
    summary: 'Cuci keseluruhan sepatu. Tier dipilih dari tingkat kekotorannya.',
    duration: '3-4 hari',
    perks: ['Best Parfum & Best Cleaner', 'Saddle Paper & Silica Gel', 'Free totebag, kecuali Bronze'],
    note: 'Express +20K: 1 hari pengerjaan & sticky parfum.',
    items: [
      { id: 'deep-gold', name: 'You Gold', detail: 'Sangat kotor', min: 50, express: true },
      { id: 'deep-silver', name: 'You Silver', detail: 'Kotor', min: 40, express: true },
      { id: 'deep-bronze', name: 'You Bronze', detail: 'Tidak terlalu kotor', min: 35, express: true },
    ],
  },
  {
    id: 'special',
    name: 'Special Treatment',
    summary: 'Untuk sepatu yang butuh penanganan khusus.',
    duration: '2-3 hari',
    perks: ['Best Parfum & Best Cleaner', 'Saddle Paper & Silica Gel', 'Free totebag'],
    items: [
      {
        id: 'special-case',
        name: 'You Special Case',
        detail: 'Motocross, inline skate, ice skating, boots, knee shoes, dll.',
        min: 70,
        max: 100,
      },
    ],
  },
  {
    id: 'repaint',
    name: 'Repaint',
    summary: 'Warna pudar dikembalikan, atau diganti warna baru.',
    duration: '5-12 hari',
    perks: ['Best Parfum & Best Paint', 'Saddle Paper & Silica Gel', 'Free totebag'],
    items: [
      { id: 'repaint-upper', name: 'You Canvas, Suede & Leather', detail: 'Pengecatan ulang warna', min: 130, max: 200 },
      { id: 'repaint-midsole', name: 'You Midsole', detail: 'Hitam atau putih', min: 100 },
      { id: 'repaint-recolor', name: 'You Recolor', detail: 'Ganti ke warna berbeda', min: 150 },
      { id: 'repaint-custom', name: 'You Custom', detail: 'Desain sesuai keinginan', min: 250, from: true },
    ],
  },
  {
    id: 'bag',
    name: 'Bag Treatment',
    summary: 'Tas dan koper ikut bersih.',
    duration: '3-5 hari',
    perks: ['Best Parfum & Best Cleaner', 'Saddle Paper & Silica Gel', 'Free totebag, kecuali Very Small'],
    items: [
      { id: 'bag-xs', name: 'Very Small', min: 30 },
      { id: 'bag-s', name: 'Small', min: 40 },
      { id: 'bag-m', name: 'Medium', min: 50 },
      { id: 'bag-l', name: 'Large', min: 65 },
      { id: 'bag-koper', name: 'Koper', min: 95 },
    ],
  },
  {
    id: 'her',
    name: 'Just for Her',
    summary: 'Khusus heels, flat, dan wedges.',
    duration: '2-3 hari',
    perks: ['Best Parfum & Best Cleaner', 'Saddle Paper & Silica Gel', 'Free totebag untuk Gold'],
    items: [
      { id: 'her-gold', name: 'Gold', min: 40 },
      { id: 'her-silver', name: 'Silver', min: 35 },
      { id: 'her-bronze', name: 'Bronze', min: 30 },
    ],
  },
  {
    id: 'other',
    name: 'Other Service',
    summary: 'Perawatan tambahan untuk sepatu dan topi.',
    duration: '2-4 hari',
    perks: ['Best Parfum & Best Cleaner', 'Saddle Paper & Silica Gel', 'Free totebag, kecuali Kids Shoes & Hat'],
    note: 'Midsole berbahan boost tidak bisa di-unyellowing. Solusinya repaint midsole.',
    items: [
      { id: 'unyellowing', name: 'You Unyellowing', detail: 'Hilangkan kuning pada midsole', min: 75, max: 100 },
      { id: 'reglue', name: 'You Reglue', min: 60, max: 90 },
      { id: 'hat', name: 'You Hat Cleaning', min: 30 },
      { id: 'kids', name: 'You Kids Shoes', min: 20 },
      { id: 'nano', name: 'Nano Protect', min: 70 },
      { id: 'sole-protector', name: 'Sole Protector', detail: 'Termasuk pemasangan', min: 180 },
    ],
  },
]

export const itemsById = Object.fromEntries(
  categories.flatMap((category) =>
    category.items.map((item) => [item.id, { ...item, category: category.name }]),
  ),
)
