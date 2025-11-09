import { useEffect, useState } from 'react';
import { ShoppingBag, Moon, Sun, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('fh_theme');
    if (stored) setDark(stored === 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('fh_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('fh_theme', 'light');
    }
  }, [dark]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Custom', href: '#custom' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-neutral-900/40 bg-white/60 dark:bg-neutral-900/60 border border-white/50 dark:border-neutral-800 shadow-[0_10px_40px_rgba(255,182,193,0.35)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between p-3 sm:p-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-rose-600 dark:text-rose-300">
                Frosting <span className="text-amber-500 dark:text-amber-300">Hub</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-rose-900/80 dark:text-rose-100/80 hover:text-rose-700 dark:hover:text-rose-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center rounded-xl border border-white/60 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 text-rose-900 dark:text-rose-50 shadow-sm hover:shadow-md transition-shadow"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="#custom"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-rose-300 via-amber-200 to-pink-300 text-rose-900 px-4 py-2 font-semibold shadow-[0_10px_30px_rgba(255,182,193,0.5)] hover:brightness-105 transition"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform bg-[radial-gradient(circle_at_30%_30%,#fff7,#fff0_60%)] pointer-events-none" />
                <ShoppingBag size={18} className="drop-shadow" />
                <span>Order Now</span>
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/60 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 p-2 text-rose-900 dark:text-rose-50"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/60 dark:border-neutral-800"
              >
                <div className="grid grid-cols-2 gap-3 p-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-white/60 dark:border-neutral-800 px-3 py-2 text-sm font-medium text-rose-900 dark:text-rose-50 hover:bg-white/90 dark:hover:bg-neutral-900/90 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
