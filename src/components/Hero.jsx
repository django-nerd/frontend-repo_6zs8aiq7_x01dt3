import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-fuchsia-300 drop-shadow">NERD MODE • CS • AI</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300">
              Retro-Futurist Portfolio
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg">
              A 90s arcade aesthetic fused with modern AI. Explore projects, publications, and an in-browser arcade.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={onExplore} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:from-fuchsia-500 hover:to-purple-500 transition shadow-lg shadow-fuchsia-900/30">
                <Rocket className="h-4 w-4" /> Enter Site
              </button>
              <a href="#arcade" onClick={(e)=>{e.preventDefault(); onExplore('games');}} className="text-cyan-300/90 hover:text-cyan-200 underline underline-offset-4">Jump to Arcade</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, #a21caf 0, transparent 25%), radial-gradient(circle at 80% 30%, #22d3ee 0, transparent 25%), radial-gradient(circle at 50% 80%, #7c3aed 0, transparent 25%)'}} />
    </section>
  );
}
