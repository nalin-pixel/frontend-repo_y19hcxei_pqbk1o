import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    badge: 'Paper Trading',
    features: ['1 Bot', 'Basic indicators', 'Community strategies', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$49/mo',
    badge: 'Live Trading',
    features: ['Up to 10 Bots', 'Advanced signals', 'Priority backtests', 'Exchange connectors'],
    highlighted: true,
  },
  {
    name: 'Fund',
    price: '$199/mo',
    badge: 'Institutional',
    features: ['Unlimited Bots', 'Custom connectors', 'Dedicated infra', 'SLA & SSO'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Transparent pricing for every scale</h2>
          <p className="mt-2 text-white/70">Start free. Scale as your edge compounds.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 bg-white/[0.02] border-white/10 ${
                tier.highlighted ? 'ring-2 ring-yellow-400/60' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-medium text-white">{tier.name}</h3>
                  <span className="inline-block mt-1 text-xs text-yellow-300/90 bg-yellow-300/10 ring-1 ring-yellow-300/20 px-2 py-0.5 rounded">
                    {tier.badge}
                  </span>
                </div>
                <div className="text-3xl font-semibold text-yellow-300">{tier.price}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/85">
                    <span className="h-5 w-5 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-md font-medium transition ${
                tier.highlighted
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow'
                  : 'border border-white/15 text-white/90 hover:bg-white/5'
              }`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
