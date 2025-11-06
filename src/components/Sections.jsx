import React from 'react';
import { FolderGit2, BookText, BriefcaseBusiness, User, Mail, Trophy, Github, Linkedin, FileText, Sparkles } from 'lucide-react';

export function SectionWrapper({ id, title, icon: Icon, children, subtitle }) {
  return (
    <section id={id} className="py-16 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-fuchsia-300" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export function Projects() {
  const items = [
    { title: 'NeonNet', desc: 'Reinforcement learning agents trained to play retro arcade levels with pixel-based policies.', tags:['RL','Gymnasium','PyTorch'] },
    { title: 'CodeSynth', desc: 'LLM-powered code assistant that compiles suggestions into runnable sandboxes.', tags:['LLM','Tool Use','TypeScript'] },
    { title: 'Vision-CRT', desc: 'Diffusion-style image filter that simulates 90s CRT scanlines and chromatic aberration.', tags:['CV','Diffusion','WebGL'] },
  ];
  return (
    <SectionWrapper id="projects" title="Projects" icon={FolderGit2} subtitle="Highlighted builds mixing research with playful UX.">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((p)=> (
          <div key={p.title} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 hover:from-white/10 transition">
            <div className="flex items-start justify-between">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>
            <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t=> <span key={t} className="text-xs bg-fuchsia-700/30 text-fuchsia-200 px-2 py-0.5 rounded">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CV() {
  return (
    <SectionWrapper id="cv" title="CV" icon={BriefcaseBusiness} subtitle="Snapshot of experience — request full PDF below.">
      <div className="rounded-xl border border-white/10 p-5 bg-white/5 text-white/80 text-sm">
        • Research Engineer, Applied AI — 3 yrs
        <br/>• Full‑Stack Developer — 4 yrs
        <br/>• Publications in ML systems and HCI
        <div className="mt-3 flex gap-2">
          <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-cyan-600 to-fuchsia-700 text-white text-sm">
            <FileText className="h-4 w-4"/> Download PDF
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function Publications() {
  const pubs = [
    { title: 'Neural Pipelines for Tool-Using Agents', venue: 'ArXiv 2024' },
    { title: 'CRT Aesthetics for Explainable Vision', venue: 'CHI 2023' },
  ];
  return (
    <SectionWrapper id="publications" title="Publications" icon={BookText}>
      <ul className="space-y-3">
        {pubs.map(p => (
          <li key={p.title} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <BookText className="h-4 w-4 text-cyan-300 mt-0.5"/>
            <div>
              <p className="text-white">{p.title}</p>
              <p className="text-white/60 text-sm">{p.venue}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

export function About() {
  return (
    <SectionWrapper id="about" title="About Me" icon={User}>
      <p className="text-white/80 max-w-3xl">Hi, I craft playful, research-driven experiences that blend computer science with retro game vibes. I love turning cutting-edge ML into tangible, interactive UI.</p>
    </SectionWrapper>
  );
}

export function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements" icon={Trophy}>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="p-4 rounded-lg bg-white/5 border border-white/10 text-white/80">🏆 Best Demo — RetroTech Conf 2024</li>
        <li className="p-4 rounded-lg bg-white/5 border border-white/10 text-white/80">🥇 1st Place — AI Game Jam</li>
        <li className="p-4 rounded-lg bg-white/5 border border-white/10 text-white/80">🔬 Patent filed — Interaction-aware agents</li>
        <li className="p-4 rounded-lg bg-white/5 border border-white/10 text-white/80">📚 10+ citations for UI x ML work</li>
      </ul>
    </SectionWrapper>
  );
}

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact" icon={Mail} subtitle="Let’s build something fun.">
      <form onSubmit={(e)=>e.preventDefault()} className="grid md:grid-cols-2 gap-3 max-w-3xl">
        <input required placeholder="Name" className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white" />
        <input required type="email" placeholder="Email" className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white" />
        <textarea required placeholder="Message" rows={4} className="md:col-span-2 bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white" />
        <button className="md:col-span-2 px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white">Send</button>
      </form>
      <div className="mt-4 flex items-center gap-3 text-white/70">
        <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 hover:text-white"><Github className="h-4 w-4"/> GitHub</a>
        <a href="https://linkedin.com" target="_blank" className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="h-4 w-4"/> LinkedIn</a>
      </div>
    </SectionWrapper>
  );
}
