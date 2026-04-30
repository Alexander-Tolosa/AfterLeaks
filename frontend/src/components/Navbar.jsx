import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LogIn, LogOut, Search, User } from 'lucide-react';

export const Navbar = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <nav className="fixed w-full z-50 glass-panel border-x-0 border-t-0 rounded-none top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="AfterLeaks" className="h-10 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-luxury-gold transition-colors">Home</Link>
            <Link to="/collection" className="text-gray-300 hover:text-luxury-gold transition-colors">Collection</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-luxury-gold transition-colors">
              <Search size={20} />
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400 flex items-center gap-1"><User size={16}/> {user.username}</span>
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all"
                >
                  <LogOut size={16} /> <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => login('FragHead_99')}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold text-luxury-dark font-medium hover:bg-luxury-gold-light transition-colors shadow-[0_0_15px_rgba(212,168,83,0.3)]"
              >
                <LogIn size={16} /> Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
