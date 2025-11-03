import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm font-medium text-slate-200/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">AI/ML Engineer</span>
        </a>

        <div className="hidden md:flex items-center">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 p-2 rounded-md hover:bg-white/10 text-slate-200/90 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 p-2 rounded-md hover:bg-white/10 text-slate-200/90 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      )}
    </header>
  );
}
