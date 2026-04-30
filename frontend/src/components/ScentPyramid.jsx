import { motion } from 'framer-motion';

export const ScentPyramid = ({ pyramid }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="glass-panel p-6">
      <h3 className="font-serif text-xl text-luxury-gold mb-6 text-center">Olfactory Pyramid</h3>
      
      <motion.div 
        variants={container} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        {/* Top Notes */}
        <motion.div variants={item} className="flex flex-col items-center w-full">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Top Notes</div>
          <div className="flex flex-wrap justify-center gap-2 max-w-[60%]">
            {pyramid.top.map((note, i) => (
              <span key={i} className="px-3 py-1 bg-luxury-dark border border-luxury-gold/30 rounded-full text-sm">{note}</span>
            ))}
          </div>
        </motion.div>

        {/* Heart Notes */}
        <motion.div variants={item} className="flex flex-col items-center w-full border-t border-white/5 pt-4">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Heart Notes</div>
          <div className="flex flex-wrap justify-center gap-2 max-w-[80%]">
            {pyramid.heart.map((note, i) => (
              <span key={i} className="px-3 py-1 bg-luxury-dark border border-luxury-gold/40 rounded-full text-sm">{note}</span>
            ))}
          </div>
        </motion.div>

        {/* Base Notes */}
        <motion.div variants={item} className="flex flex-col items-center w-full border-t border-white/5 pt-4">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Base Notes</div>
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {pyramid.base.map((note, i) => (
              <span key={i} className="px-4 py-1.5 bg-gradient-to-br from-luxury-dark to-[#1a1a24] border border-luxury-gold/60 rounded-full text-sm font-medium shadow-[0_4px_10px_rgba(212,168,83,0.1)]">{note}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
