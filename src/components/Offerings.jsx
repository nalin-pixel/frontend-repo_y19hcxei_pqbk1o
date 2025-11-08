import React from 'react';
import { Bot, LineChart, Boxes, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Bot Services',
    desc: 'Ready-made AI bots for grid, trend-following and market-making with smart risk controls.',
  },
  {
    icon: LineChart,
    title: 'Strategy Studio',
    desc: 'Design strategies visually, add signals, and backtest across assets with tick-level accuracy.',
  },
  {
    icon: Boxes,
    title: 'Marketplace',
    desc: 'Discover community-built algos, share signals and license strategies securely.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    desc: 'Hardened auth, key vaults and granular permissions for teams and funds.',
  },
];

const Offerings = () => {
  return (
    <section id="bots" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-yellow-500 to-amber-400 text-black flex items-center justify-center shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
