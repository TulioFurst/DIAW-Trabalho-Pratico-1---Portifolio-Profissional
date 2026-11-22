import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Sobre Mim', path: '/' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Experiências', path: '/experiencias' },
    { name: 'Contato', path: '/contato' },
  ];

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-pride-mint/15 text-pride-mint border border-pride-mint/40 shadow-[0_0_15px_rgba(38,206,170,0.2)]'
        : 'text-gray-300 hover:text-white hover:bg-stage-surface'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-stage-bg/85 backdrop-blur-md border-b border-stage-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Tui.dev */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-lg bg-stage-surface border border-stage-border group-hover:border-pride-mint transition-colors">
              <Terminal className="w-5 h-5 text-pride-mint" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Tui<span className="text-pride-mint">.dev</span>
            </span>
          </NavLink>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-stage-surface"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-stage-surface border-b border-stage-border px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-pride-mint/15 text-pride-mint'
                    : 'text-gray-300 hover:bg-stage-bg hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}