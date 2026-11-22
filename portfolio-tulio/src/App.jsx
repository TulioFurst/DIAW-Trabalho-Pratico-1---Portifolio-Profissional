import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import Experiencias from './pages/Experiencias';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-stage-bg text-gray-100">
        <Navbar />
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Routes>
            <Route path="/" element={<SobreMim />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}