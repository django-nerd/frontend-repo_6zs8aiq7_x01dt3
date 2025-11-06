import React from 'react';
import { Rocket, Gamepad2, User, Trophy, FolderGit2, BookText, BriefcaseBusiness, Mail } from 'lucide-react';

const items = [
  { key: 'home', label: 'Home', icon: Rocket },
  { key: 'projects', label: 'Projects', icon: FolderGit2 },
  { key: 'cv', label: 'CV', icon: BriefcaseBusiness },
  { key: 'repositories', label: 'Repository', icon: FolderGit2 },
  { key: 'publications', label: 'Publications', icon: BookText },
  { key: 'about', label: 'About Me', icon: User },
  { key: 'achievements', label: 'Achievements', icon: Trophy },
  { key: 'contact', label: 'Contact', icon: Mail },
  { key: 'games', label: 'Arcade', icon: Gamepad2 },
];

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 animate-pulse" />
            <div className="text-left leading-tight">
              <p className="text-xs uppercase tracking-widest text-fuchsia-300">Retro.AI</p>
              <p className="text-sm text-white/90">CS • AI • Nerd HQ</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {items.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  current === key
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-current={current === key ? 'page' : undefined}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <select
              value={current}
              onChange={(e) => onNavigate(e.target.value)}
              className="bg-black/50 text-white text-sm rounded-md border border-white/10 px-3 py-2"
            >
              {items.map(({ key, label }) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
