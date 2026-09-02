import { Mail, Code2, Heart } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';
import LinkedinIcon from '../ui/LinkedinIcon';
import { profile } from '../../data/profile';

export default function Footer() {
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                {profile.firstName}<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {profile.title}
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-faint)' }}>
              Building production-ready applications with Java & React.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: 'var(--color-text-muted)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm transition-colors hover:text-indigo-400"
                    style={{ color: 'var(--color-text-faint)' }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: 'var(--color-text-muted)' }}>
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/10 hover:text-white"
                style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-blue-500/10 hover:text-blue-400"
                style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-indigo-500/10 hover:text-indigo-400"
                style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-faint)' }}>
              {profile.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
            © 2026 {profile.name}. Built with React & Spring Boot.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: 'var(--color-text-faint)' }}>
            Made with <Heart size={11} className="text-rose-400 fill-rose-400" /> using React, Spring Boot & MySQL
          </p>
        </div>
      </div>
    </footer>
  );
}
