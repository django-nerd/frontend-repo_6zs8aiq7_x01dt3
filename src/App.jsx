import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Arcade from './components/Arcade';
import { Projects, CV, Publications, About, Achievements, Contact } from './components/Sections';

export default function App() {
  const [route, setRoute] = useState('home');
  const navigate = (key) => setRoute(key);

  const sections = useMemo(()=> ({
    projects: <Projects />,
    cv: <CV />,
    publications: <Publications />,
    about: <About />,
    achievements: <Achievements />,
    contact: <Contact />,
    games: <Arcade />,
  }), []);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="fixed inset-0 pointer-events-none opacity-[0.08]" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg width%3D%2216%22 height%3D%2216%22 viewBox%3D%220 0 16 16%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%220.8%22%3E%3Cpath d%3D%22M0 15h16v1H0zM0 0h1v16H0z%22/%3E%3C/g%3E%3C/svg%3E")', backgroundRepeat:'repeat'}} />

      <Navbar current={route} onNavigate={navigate} />

      {route === 'home' && (
        <>
          <Hero onExplore={() => navigate('projects')} />
          <Projects />
          <Arcade />
          <Publications />
          <About />
          <Contact />
        </>
      )}

      {route !== 'home' && sections[route]}

      <footer className="border-t border-white/10 py-8 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          Built with a 90s arcade soul • © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
