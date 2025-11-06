import React, { useState } from 'react';
import { Gamepad2, Grid3X3, Brain, Puzzle, Crown } from 'lucide-react';

function Sudoku() {
  const [board, setBoard] = useState(Array(9).fill('').map(()=>Array(9).fill('')));
  const handleChange = (r,c,val) => {
    if (!/^$|^[1-9]$/.test(val)) return;
    setBoard(b => b.map((row,ri)=> row.map((cell,ci)=> ri===r && ci===c ? val : cell)));
  };
  return (
    <div className="mt-4 grid grid-cols-9 gap-1 w-full max-w-[22rem]">
      {board.map((row,r)=>(
        row.map((cell,c)=>(
          <input
            key={`${r}-${c}`}
            value={cell}
            onChange={(e)=>handleChange(r,c,e.target.value)}
            className="w-6 h-6 md:w-8 md:h-8 text-center bg-black/60 border border-white/20 text-white rounded-sm focus:outline-none focus:border-fuchsia-400"
          />
        ))
      ))}
    </div>
  );
}

function TicTacToe() {
  const [s, setS] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const win = ([a,b,c]) => s[a] && s[a]===s[b] && s[a]===s[c];
  const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].find(win);
  const click = (i)=>{ if (s[i]||winner) return; const ns=[...s]; ns[i]=x?'X':'O'; setS(ns); setX(!x); };
  const reset = ()=>{ setS(Array(9).fill(null)); setX(true); };
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="grid grid-cols-3 gap-2">
        {s.map((v,i)=> (
          <button key={i} onClick={()=>click(i)} className="w-16 h-16 md:w-20 md:h-20 text-2xl font-bold bg-black/60 border border-white/20 text-white rounded-md hover:bg-white/5">
            {v}
          </button>
        ))}
      </div>
      <div className="text-white/80 text-sm">
        {winner ? `Winner: ${s[winner[0]]}` : s.every(Boolean) ? 'Draw' : `Turn: ${x?'X':'O'}`}
      </div>
      <button onClick={reset} className="px-3 py-1 rounded bg-fuchsia-700 text-white text-xs">Reset</button>
    </div>
  );
}

function MemoryPairs() {
  const base = ['🛰️','🤖','🧠','💾','💡','🧪'];
  const [cards, setCards] = useState([...base, ...base].sort(()=>Math.random()-0.5).map((v,i)=>({id:i, v, open:false, done:false})));
  const [open, setOpen] = useState([]);
  const flip = (id) => {
    setCards(cs => cs.map(c => c.id===id && !c.done && !c.open ? {...c, open:true} : c));
    setOpen(o => {
      const next = [...o, id];
      if (next.length === 2) {
        const [a,b] = next;
        const A = cards.find(c=>c.id===a);
        const B = cards.find(c=>c.id===b);
        if (A && B && A.v === B.v) {
          setTimeout(()=> setCards(cs=> cs.map(c=> c.id===a||c.id===b ? {...c, done:true} : c)), 300);
        } else {
          setTimeout(()=> setCards(cs=> cs.map(c=> c.id===a||c.id===b ? {...c, open:false} : c)), 600);
        }
        return [];
      }
      return next;
    });
  };
  return (
    <div className="grid grid-cols-4 gap-2 max-w-xs">
      {cards.map(c => (
        <button key={c.id} onClick={()=>flip(c.id)} className={`h-16 w-16 rounded-md border border-white/20 text-2xl ${c.done? 'bg-emerald-700/60' : c.open? 'bg-purple-700/60' : 'bg-black/60'} text-white`}>{(c.open||c.done)? c.v : '❓'}</button>
      ))}
    </div>
  );
}

export default function Arcade() {
  const [tab, setTab] = useState('sudoku');
  return (
    <section id="arcade" className="relative py-16 bg-gradient-to-b from-black via-[#0b0012] to-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Gamepad2 className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Retro Arcade</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Kick back with Sudoku, Tic-Tac-Toe, and Memory Pairs — all rendered in-browser. More mini-games coming soon.</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={()=>setTab('sudoku')} className={`px-3 py-1 rounded-md text-sm ${tab==='sudoku'?'bg-fuchsia-700 text-white':'bg-white/5 text-white/80'}`}>
            <Grid3X3 className="inline h-4 w-4 mr-1"/> Sudoku
          </button>
          <button onClick={()=>setTab('tictactoe')} className={`px-3 py-1 rounded-md text-sm ${tab==='tictactoe'?'bg-fuchsia-700 text-white':'bg-white/5 text-white/80'}`}>
            <Crown className="inline h-4 w-4 mr-1"/> Tic-Tac-Toe
          </button>
          <button onClick={()=>setTab('memory')} className={`px-3 py-1 rounded-md text-sm ${tab==='memory'?'bg-fuchsia-700 text-white':'bg-white/5 text-white/80'}`}>
            <Brain className="inline h-4 w-4 mr-1"/> Memory Pairs
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          {tab==='sudoku' && <Sudoku />}
          {tab==='tictactoe' && <TicTacToe />}
          {tab==='memory' && <MemoryPairs />}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
    </section>
  );
}
