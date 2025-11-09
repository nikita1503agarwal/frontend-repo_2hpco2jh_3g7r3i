import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
      <div className="absolute inset-0">
        {/* 3D scene */}
        <Spline
          scene="https://prod.spline.design/6mS1aL8gE3kQ7u2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Frosted gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/0 dark:from-neutral-900/50 dark:via-neutral-900/20 dark:to-neutral-900/0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-rose-900 dark:text-rose-50"
            >
              Experience the Sweet Art of Baking at
              <span className="block bg-gradient-to-r from-rose-500 via-amber-400 to-pink-500 bg-clip-text text-transparent"> Frosting Hub 🍰</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-rose-900/80 dark:text-rose-100/80 text-lg"
            >
              Crafted with Love. Baked to Perfection. Dive into our luxurious collection of cakes, brownies, cookies and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-rose-400/90 hover:bg-rose-400 text-rose-900 px-6 py-3 font-semibold shadow-[0_15px_40px_rgba(244,114,182,0.45)] transition"
              >
                <span className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,#fff8_0deg,#fff0_90deg)] opacity-0 group-hover:opacity-100 transition-opacity" />
                Explore Menu
              </a>
              <a
                href="#custom"
                className="inline-flex items-center rounded-2xl border border-rose-200/60 dark:border-rose-100/10 bg-white/70 dark:bg-neutral-900/70 px-6 py-3 text-rose-900 dark:text-rose-50 font-medium backdrop-blur hover:shadow-lg transition"
              >
                Build a Custom Cake
              </a>
            </motion.div>

            {/* Micro confetti sparkles */}
            <div className="mt-10 flex items-center gap-2 text-amber-600 dark:text-amber-300">
              <div className="h-2 w-2 rounded-full bg-current animate-ping" />
              <p className="text-sm">Soft sparkles greet you on load ✨</p>
            </div>
          </div>

          <div className="relative min-h-[380px] lg:min-h-[520px]">
            <div className="absolute inset-0 rounded-[2rem] bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_30px_100px_rgba(255,182,193,0.45)]" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-200/30 via-amber-100/20 to-pink-200/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
