import { CheckCircle, Zap, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '2348012345678';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I want to buy USDT. What's your current rate?");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Mock rate data for ticker
const mockRates = [
  { asset: 'USDT', buy: '₦1,580.00', sell: '₦1,575.00', change: '+0.2%' },
  { asset: 'BTC', buy: '₦98,500,000', sell: '₦98,200,000', change: '+1.5%' },
  { asset: 'ETH', buy: '₦5,420,000', sell: '₦5,400,000', change: '-0.3%' },
  { asset: 'BNB', buy: '₦980,000', sell: '₦975,000', change: '+0.8%' },
];

function RateTicker() {
  const [rates, setRates] = useState(mockRates);

  useEffect(() => {
    // Simulate rate updates every 10 seconds
    const interval = setInterval(() => {
      setRates(prev => prev.map(rate => {
        const changePercent = (Math.random() - 0.5) * 0.4;
        const changeStr = changePercent >= 0 ? `+${changePercent.toFixed(1)}%` : `${changePercent.toFixed(1)}%`;
        return { ...rate, change: changeStr };
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-800 border-y border-navy-700 overflow-hidden">
      <div className="ticker-animate flex whitespace-nowrap py-2">
        {[...rates, ...rates].map((rate, i) => (
          <div key={i} className="inline-flex items-center gap-2 mx-6 text-sm">
            <span className="font-semibold text-white">{rate.asset}</span>
            <span className="text-gray-400">Buy: {rate.buy}</span>
            <span className="text-gray-400">Sell: {rate.sell}</span>
            <span className={rate.change.startsWith('+') ? 'text-emerald-accent' : 'text-red-400'}>
              {rate.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: 'Is this safe?',
    a: 'Yes. All trades are conducted on regulated P2P platforms (Binance/Bybit) with built-in escrow protection. We never have access to your funds. You maintain full control throughout the trade.'
  },
  {
    q: 'How long does release take?',
    a: 'Once we confirm your payment, crypto is released within 5-15 minutes. Most trades are completed in under 10 minutes during business hours.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers (GTBank, Access, Zenith, First Bank), and other major Nigerian banks. Payment must be made from an account in your name.'
  },
  {
    q: 'What are the minimum and maximum trade amounts?',
    a: 'Minimum trade is ₦10,000 equivalent. Maximum single trade is ₦5,000,000. For larger amounts, contact us to arrange split trades.'
  },
  {
    q: 'Do I need to verify my identity?',
    a: 'Yes. You must complete KYC verification on Binance or Bybit before trading with us. This is a platform requirement, not ours.'
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Rate Ticker */}
      <RateTicker />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-emerald-accent/10 border border-emerald-accent/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-emerald-accent rounded-full animate-pulse" />
            <span className="text-xs font-medium text-emerald-accent">Live Trading Available</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Fast & Secure <span className="text-emerald-accent">USDT/BTC</span> Trading in Nigeria
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Trade crypto safely through regulated P2P platforms. Instant release, escrow protection, 
            and competitive rates. No accounts needed — just WhatsApp us to start.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-accent hover:bg-emerald-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-accent/20 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Trading on WhatsApp
            </a>
            <Link
              to="/rates"
              className="w-full sm:w-auto border border-navy-600 hover:border-emerald-accent/50 text-white font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              View Current Rates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 text-center hover:border-emerald-accent/30 transition-colors">
              <CheckCircle className="w-10 h-10 text-emerald-accent mx-auto mb-3" />
              <h3 className="font-bold text-base mb-1">Verified Merchant</h3>
              <p className="text-sm text-gray-400">500+ successful trades with 99% positive reviews</p>
            </div>
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 text-center hover:border-emerald-accent/30 transition-colors">
              <Zap className="w-10 h-10 text-emerald-accent mx-auto mb-3" />
              <h3 className="font-bold text-base mb-1">Instant Release</h3>
              <p className="text-sm text-gray-400">Crypto released within 5-15 minutes of payment confirmation</p>
            </div>
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 text-center hover:border-emerald-accent/30 transition-colors">
              <Shield className="w-10 h-10 text-emerald-accent mx-auto mb-3" />
              <h3 className="font-bold text-base mb-1">Escrow Protected</h3>
              <p className="text-sm text-gray-400">All trades secured by Binance/Bybit escrow system</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">How It Works</h2>
          <p className="text-gray-400 text-center mb-10">Three simple steps to trade crypto safely</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 h-full">
                <div className="w-12 h-12 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-accent font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold mb-2">Contact via WhatsApp</h3>
                <p className="text-sm text-gray-400">Message us with the amount and asset you want to trade. We'll quote you our best rate.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 h-full">
                <div className="w-12 h-12 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-accent font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold mb-2">Make Payment</h3>
                <p className="text-sm text-gray-400">Transfer NGN to the provided bank account. Payment is protected by platform escrow.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 h-full">
                <div className="w-12 h-12 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-accent font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold mb-2">Receive Crypto</h3>
                <p className="text-sm text-gray-400">Once payment is confirmed, crypto is released to your wallet within minutes.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-accent hover:bg-emerald-dark text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Trade Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-center mb-10">Everything you need to know before trading</p>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                  <span className={`text-emerald-accent transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-navy-800/50 to-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Trade?</h2>
          <p className="text-gray-400 mb-8">
            Join hundreds of Nigerian traders who trust us for fast, secure crypto transactions.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-accent hover:bg-emerald-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-accent/20 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
          <p className="text-xs text-gray-500 mt-4">
            Pre-filled message: "Hi, I want to buy USDT. What's your current rate?"
          </p>
        </div>
      </section>
    </div>
  );
}
