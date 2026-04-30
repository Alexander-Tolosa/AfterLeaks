import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockPerfumes } from '../utils/mockData';
import { PerfumeCard } from '../components/PerfumeCard';
import { WeatherWidget } from '../components/WeatherWidget';

export const Home = () => {
  const featured = mockPerfumes.slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615397323214-5f4b46c6ab47?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-dark/80 to-luxury-dark"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Curate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#fff1d0] animate-pulse">Signature</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Explore an exclusive collection of designer and niche fragrances. Track maturation, review performance, and discover the perfect scent for any weather.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/collection" className="inline-block px-8 py-4 bg-luxury-gold text-luxury-dark font-medium rounded-full hover:bg-luxury-gold-light hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,168,83,0.4)]">
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6">
          <div>
            <h2 className="text-3xl font-serif text-white mb-2">Featured Scents</h2>
            <p className="text-gray-400">Handpicked masterpieces from the collection.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <WeatherWidget />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featured.map((perfume, i) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PerfumeCard perfume={perfume} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="glass-panel p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-50"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl font-serif text-luxury-gold mb-2">{mockPerfumes.length}</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Fragrances</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-serif text-luxury-gold mb-2">1,600+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Community Votes</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-serif text-luxury-gold mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Authentic</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
