import { motion } from 'framer-motion';

const gallery = [
  'https://images.unsplash.com/photo-1614707267537-3d85f89bbf66?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535141192574-5f8d6147d76d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535148513190-6ff1180f06d4?q=80&w=1200&auto=format&fit=crop',
];

export default function Showcase() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-900 dark:text-rose-50">Gallery</h2>
          <p className="text-rose-900/70 dark:text-rose-100/70 mt-2">A 3D photo grid with tilt and frosting-like zoom.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, rotate: i % 2 ? -1.2 : 1.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-[0_20px_60px_rgba(255,182,193,0.35)]"
            >
              <img src={src} alt="Frosting Hub gallery" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-50/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
