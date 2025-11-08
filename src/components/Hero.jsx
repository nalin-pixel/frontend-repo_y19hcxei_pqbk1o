import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-yellow-300/90 bg-yellow-300/10 ring-1 ring-yellow-300/20 px-2.5 py-1 rounded-full">
              <Star className="h-3.5 w-3.5" /> AI-Powered Trading
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Automate. Optimize. Scale.
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Build, backtest and deploy intelligent trading strategies with enterprise-grade bots. Black & gold precision for your portfolio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-medium shadow hover:shadow-yellow-500/30 transition">
                Get Started
              </a>
              <a href="#strategies" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/15 text-white/90 hover:bg-white/5 transition">
                Explore Strategies
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
    </section>
  );
};

export default Hero;
