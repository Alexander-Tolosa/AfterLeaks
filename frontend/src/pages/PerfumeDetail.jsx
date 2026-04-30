import { useParams, Link } from 'react-router-dom';
import { mockPerfumes } from '../utils/mockData';
import { formatPHP, getWeatherIcon } from '../utils/formatters';
import { ScentPyramid } from '../components/ScentPyramid';
import { VotingPanel } from '../components/VotingPanel';
import { ReviewSection } from '../components/ReviewSection';
import { ArrowLeft } from 'lucide-react';

export const PerfumeDetail = () => {
  const { id } = useParams();
  const perfume = mockPerfumes.find(p => p.id === parseInt(id));

  if (!perfume) return <div className="pt-32 text-center text-white">Perfume not found.</div>;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <Link to="/collection" className="inline-flex items-center text-luxury-gold hover:text-white transition-colors mb-8">
        <ArrowLeft size={16} className="mr-2" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Col: Image */}
        <div className="relative">
          <div className="glass-panel p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img 
              src={perfume.image} 
              alt={perfume.name} 
              className="w-full h-auto aspect-[4/5] object-cover rounded-2xl"
            />
          </div>
          {/* Weather badges overlaid */}
          <div className="absolute top-6 right-6 flex flex-col gap-2">
            {perfume.weather.map((w, idx) => (
              <div key={idx} className="glass-panel px-3 py-2 flex items-center gap-2" title={`Good for ${w} weather`}>
                {getWeatherIcon(w)} <span className="text-xs text-white capitalize">{w}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Info */}
        <div className="flex flex-col justify-center">
          <div className="text-luxury-gold tracking-widest uppercase font-semibold text-sm mb-2">{perfume.brand}</div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">{perfume.name}</h1>
          <div className="text-gray-400 mb-6 text-lg">{perfume.concentration}</div>
          
          <div className="text-3xl text-white font-medium mb-8 flex items-baseline gap-3">
            {formatPHP(perfume.price)}
            <span className="text-sm text-gray-500 font-normal">Est. Local Market Price</span>
          </div>

          <p className="text-gray-300 leading-relaxed mb-10 text-lg">
            {perfume.description}
          </p>

          <div className="flex gap-4 mb-10">
            <button className="flex-1 bg-luxury-gold text-luxury-dark font-medium py-3 rounded-full hover:bg-luxury-gold-light transition-colors shadow-[0_0_20px_rgba(212,168,83,0.3)]">
              Track Maturation
            </button>
            <button className="px-6 py-3 border border-luxury-gold text-luxury-gold rounded-full hover:bg-luxury-gold/10 transition-colors">
              Add to Wishlist
            </button>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ScentPyramid pyramid={perfume.pyramid} />
        </div>
        <div>
          <VotingPanel votes={perfume.votes} />
        </div>
      </div>

      <ReviewSection initialReviews={perfume.reviews} />

    </div>
  );
};
