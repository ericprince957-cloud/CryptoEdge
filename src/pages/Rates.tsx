import { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2348012345678';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I want to buy USDT. What's your current rate?");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

interface RateData {
  asset: string;
  icon: string;
  buyRate: string;
  sellRate: string;
  minTrade: string;
  maxTrade: string;
  lastUpdate: string;
}

const initialRates: RateData[] = [
  {
    asset: 'USDT (Tether)',
    icon: '💲',
    buyRate: '₦1,580.00',
    sellRate: '₦1,575.00',
    minTrade: '₦10,000',
    maxTrade: '₦5,000,000',
    lastUpdate: 'Just now',
  },
  {
    asset: 'BTC (Bitcoin)',
    icon: '₿',
    buyRate: '₦98,500,000',
    sellRate: '₦98,200,000',
    minTrade: '₦50,000',
    maxTrade: '₦50,000,000',
    lastUpdate: 'Just now',
  },
  {
    asset: 'ETH (Ethereum)',
    icon: '⟠',
    buyRate: '₦5,420,000',
    sellRate: '₦5,400,000',
    minTrade: '₦50,000',
    maxTrade: '₦20,000,000',
    lastUpdate: 'Just now',
  },
  {
    asset: 'BNB (Binance Coin)',
    icon: '🔶',
    buyRate: '₦980,000',
    sellRate: '₦975,000',
    minTrade: '₦30,000',
    maxTrade: '₦10,000,000',
    lastUpdate: 'Just now',
  },
];

export default function Rates() {
  const [rates, setRates] = useState<RateData[]>(initialRates);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  useEffect(() => {
    // Simulate rate updates every 5 minutes
    const interval = setInterval(() => {
      setRates(prev => prev.map(rate => ({
        ...rate,
        lastUpdate: 'Just now',
      })));
      setLastRefresh(new Date());
    }, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    // Simulate manual refresh
    setRates(prev => prev.map(rate => ({
      ...rate,
      lastUpdate: 'Just now',
    })));
    setLastRefresh(new Date());
  };

  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Current Trading Rates</h1>
          <p className="text-gray-400 text-sm">
            Last updated: {lastRefresh.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-200 font-medium mb-1">Rates update every 5 minutes</p>
            <p className="text-xs text-amber-300/80">
              Always confirm the final rate via WhatsApp before making any payment. 
              Rates shown are indicative and may change based on market conditions.
            </p>
          </div>
        </div>

        {/* Rates Table */}
        <div className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden mb-8">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-navy-700">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Asset</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Buy Rate (We Buy)</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sell Rate (We Sell)</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Min Trade</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Max Trade</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate, index) => (
                  <tr key={index} className="border-b border-navy-700/50 hover:bg-navy-700/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{rate.icon}</span>
                        <span className="font-semibold">{rate.asset}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-emerald-accent font-semibold">{rate.buyRate}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{rate.sellRate}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{rate.minTrade}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{rate.maxTrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-navy-700/50">
            {rates.map((rate, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{rate.icon}</span>
                  <span className="font-bold">{rate.asset}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs block">Buy Rate</span>
                    <span className="text-emerald-accent font-semibold">{rate.buyRate}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">Sell Rate</span>
                    <span className="text-white font-semibold">{rate.sellRate}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">Min Trade</span>
                    <span className="text-gray-300">{rate.minTrade}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">Max Trade</span>
                    <span className="text-gray-300">{rate.maxTrade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-accent transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Rates
          </button>
        </div>

        {/* Important Notes */}
        <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 mb-8">
          <h3 className="font-bold mb-4">Important Notes</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-accent mt-0.5">•</span>
              <span>"Buy Rate" = the rate at which we buy crypto from you (you sell to us)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-accent mt-0.5">•</span>
              <span>"Sell Rate" = the rate at which we sell crypto to you (you buy from us)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-accent mt-0.5">•</span>
              <span>Rates are subject to change without notice based on market conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-accent mt-0.5">•</span>
              <span>For trades above ₦5,000,000, please contact us to arrange split transactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-accent mt-0.5">•</span>
              <span>All trades must be conducted through Binance P2P or Bybit P2P for escrow protection</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Want to lock in a rate? Message us now:</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-accent hover:bg-emerald-dark text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Confirm Rate on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
