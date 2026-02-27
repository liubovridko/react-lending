import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaGlobe, FaXmark } from 'react-icons/fa6';
import { useLanguage } from '../LanguageContext';
import { translations } from '../content';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].nav;

  const links = [
    { to: '/', label: t.home },
    { to: '/gallery', label: t.gallery },
    { to: '/service', label: t.service },
    { to: '/contacts', label: t.contacts }
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-wide text-cyan-300">
          NovaLend
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-200'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm text-slate-300">
            <FaGlobe /> {language.toUpperCase()}
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)} className="text-slate-200 md:hidden" aria-label="Toggle menu">
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav className="border-t border-slate-800 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className="text-slate-300" onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
