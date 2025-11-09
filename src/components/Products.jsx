import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['Cakes', 'Brownies', 'Cookies', 'Cupcakes', 'Specials'];

const items = [
  { id: 1, name: 'Velvet Dream Cake', price: 49, image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWx2ZXQlMjBEcmVhbSUyMENha2V8ZW58MHwwfHx8MTc2MjcxNDg2M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cat: 'Cakes' },
  { id: 2, name: 'Double Choco Brownie', price: 18, image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWx2ZXQlMjBEcmVhbSUyMENha2V8ZW58MHwwfHx8MTc2MjcxNDg2M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cat: 'Brownies' },
  { id: 3, name: 'Buttery Choc-Chip', price: 12, image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWx2ZXQlMjBEcmVhbSUyMENha2V8ZW58MHwwfHx8MTc2MjcxNDg2M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cat: 'Cookies' },
  { id: 4, name: 'Pastel Cupcakes Box', price: 24, image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1200&auto=format&fit=crop', cat: 'Cupcakes' },
  { id: 5, name: 'Golden Celebration', price: 89, image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWx2ZXQlMjBEcmVhbSUyMENha2V8ZW58MHwwfHx8MTc2MjcxNDg2M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cat: 'Specials' },
];

export default function Products() {
  const [active, setActive] = useState('Cakes');

  const filtered = items.filter((i) => i.cat === active);

  return (
    <section id="menu" className="relative py-20 bg-gradient-to-b from-transparent to-rose-50/60 dark:to-neutral-900/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-900 dark:text-rose-50">Menu & Products</h2>
            <p className="text-rose-900/70 dark:text-rose-100/70 mt-2">Luxurious treats with a 3D tilt and glossy frosting shine on hover.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition backdrop-blur border ${
                  active === c
                    ? 'bg-rose-400/90 text-rose-950 border-rose-200 shadow-[0_10px_30px_rgba(244,114,182,0.35)]'
                    : 'bg-white/60 dark:bg-neutral-900/60 text-rose-900 dark:text-rose-50 border-white/50 dark:border-neutral-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ rotateX: 6, rotateY: -6, y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-white/60 dark:border-neutral-800 shadow-[0_20px_60px_rgba(255,182,193,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#fff8,transparent_60%)] mix-blend-screen" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-50">{p.name}</h3>
                  <span className="text-amber-700 dark:text-amber-300 font-bold">${p.price}</span>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-200 via-rose-200 to-pink-200 text-rose-900 font-semibold py-2 hover:brightness-105 shadow-inner">Order Now</button>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-rose-300/50 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
