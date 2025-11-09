import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const bases = ['Vanilla', 'Chocolate', 'Red Velvet'];
const layers = ['2-layer', '3-layer'];
const frostings = ['Buttercream', 'Ganache'];
const decorations = ['Sprinkles', 'Fruits', 'Toppers'];

export default function CustomBuilder() {
  const [base, setBase] = useState('Vanilla');
  const [layer, setLayer] = useState('2-layer');
  const [frosting, setFrosting] = useState('Buttercream');
  const [decor, setDecor] = useState('Sprinkles');

  const price = useMemo(() => {
    let p = 20;
    if (base !== 'Vanilla') p += 5;
    if (layer === '3-layer') p += 10;
    if (frosting === 'Ganache') p += 7;
    if (decor !== 'Sprinkles') p += 5;
    return p;
  }, [base, layer, frosting, decor]);

  return (
    <section id="custom" className="relative py-20 bg-gradient-to-t from-transparent to-amber-50/60 dark:to-neutral-900/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-900 dark:text-rose-50">Build Your Custom Cake</h2>
          <p className="text-rose-900/70 dark:text-rose-100/70 mt-2">Pick your flavors and watch the cake update with buttery-smooth motion.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Interactive 3D-ish preview */}
          <div className="relative">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 3, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Base cake silhouette */}
                <div className="relative w-64 h-64">
                  {/* shadow */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full bg-black/10 blur-xl" />
                  {/* tiers */}
                  <motion.div
                    key={layer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-56 h-28 rounded-t-[28px] bg-gradient-to-b from-rose-200 to-rose-300 border border-white/60 shadow-[inset_0_-20px_40px_rgba(255,255,255,0.6)]" />
                    {layer === '3-layer' && (
                      <div className="mx-auto -mt-6 w-44 h-24 rounded-t-[24px] bg-gradient-to-b from-rose-100 to-rose-200 border border-white/60 shadow-[inset_0_-16px_32px_rgba(255,255,255,0.6)]" />
                    )}
                    <div className="mx-auto -mt-6 w-32 h-20 rounded-t-[20px] bg-gradient-to-b from-amber-100 to-amber-200 border border-white/60 shadow-[inset_0_-12px_24px_rgba(255,255,255,0.6)]" />
                  </motion.div>

                  {/* frosting gloss */}
                  <motion.div
                    key={frosting}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className={`absolute inset-x-0 bottom-8 mx-auto h-6 w-40 rounded-full ${
                      frosting === 'Ganache' ? 'bg-amber-700/60' : 'bg-rose-50/60'
                    } blur-md`}
                  />

                  {/* decorations */}
                  <motion.div key={decor} initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {decor === 'Fruits' && (
                      <>
                        <div className="w-4 h-4 rounded-full bg-rose-500 shadow" />
                        <div className="w-4 h-4 rounded-full bg-amber-400 shadow" />
                        <div className="w-4 h-4 rounded-full bg-rose-300 shadow" />
                      </>
                    )}
                    {decor === 'Toppers' && (
                      <div className="px-3 py-1 rounded-full bg-rose-400/90 text-rose-950 text-xs font-bold shadow">FH</div>
                    )}
                    {decor === 'Sprinkles' && (
                      <div className="h-3 w-24 rounded-full bg-gradient-to-r from-pink-300 via-amber-300 to-rose-300 shadow" />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="mt-4 text-center text-amber-700 dark:text-amber-300 font-semibold">Estimated: ${price}</div>
          </div>

          {/* Form */}
          <form className="rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-white/60 dark:border-neutral-800 p-6 shadow-[0_20px_60px_rgba(255,182,193,0.35)]">
            <div className="grid sm:grid-cols-2 gap-5">
              <Select label="Base" value={base} onChange={setBase} options={bases} />
              <Select label="Layers" value={layer} onChange={setLayer} options={layers} />
              <Select label="Frosting" value={frosting} onChange={setFrosting} options={frostings} />
              <Select label="Decoration" value={decor} onChange={setDecor} options={decorations} />
            </div>
            <button type="button" className="mt-6 w-full rounded-2xl bg-gradient-to-r from-rose-300 via-amber-200 to-pink-300 text-rose-900 font-bold py-3 shadow-[0_15px_40px_rgba(244,114,182,0.35)] hover:brightness-105">
              Order Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-rose-900 dark:text-rose-50">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl bg-white/80 dark:bg-neutral-900/80 border border-white/60 dark:border-neutral-800 px-4 py-3 text-rose-900 dark:text-rose-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          {options.map((o) => (
            <option key={o} value={o} className="text-rose-900">{o}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-rose-400">▾</div>
      </div>
    </label>
  );
}
