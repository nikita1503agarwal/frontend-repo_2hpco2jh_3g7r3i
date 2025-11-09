import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import CustomBuilder from './components/CustomBuilder';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-pink-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <CustomBuilder />
        <Showcase />
        {/* Additional sections like Testimonials, Blog, Contact can be added similarly */}
        <footer id="contact" className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-white/60 dark:border-neutral-800 p-6 text-center">
              <h3 className="text-xl font-bold text-rose-900 dark:text-rose-50">Taste luxury at Frosting Hub</h3>
              <p className="mt-2 text-rose-900/70 dark:text-rose-100/70">Crafted with Love. Baked to Perfection.</p>
              <div className="mt-4 text-sm text-rose-900/60 dark:text-rose-100/60">© {new Date().getFullYear()} Frosting Hub. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
