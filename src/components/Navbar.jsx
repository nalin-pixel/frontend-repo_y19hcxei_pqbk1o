import React from 'react';
import { Rocket, Shield, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-yellow-500 via-yellow-300 to-amber-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
          <span className="font-semibold tracking-tight text-white">AurumTrade AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#bots" className="hover:text-white transition">Bots</a>
          <a href="#strategies" className="hover:text-white transition">Strategies</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#security" className="hover:text-white transition flex items-center gap-2"><Shield className="h-4 w-4"/>Security</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-sm text-white/90 hover:bg-white/5 transition">
            <Shield className="h-4 w-4" />
            Status
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-medium shadow hover:shadow-yellow-500/30 transition">
            <Rocket className="h-4 w-4" /> Launch App
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
