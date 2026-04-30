import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { PerfumeDetail } from './pages/PerfumeDetail';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/perfume/:id" element={<PerfumeDetail />} />
        </Routes>
      </div>
      
      <footer className="glass-panel rounded-none border-x-0 border-b-0 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img src="/logo.png" alt="AfterLeaks" className="h-12 w-auto mx-auto mb-2" />
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Alexander Tolosa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
