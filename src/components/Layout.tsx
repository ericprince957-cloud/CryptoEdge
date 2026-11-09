import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '2348012345678';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi, I want to buy USDT. What\'s your current rate?');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/rates', label: 'Rates' },
    { to: '/safety', label: 'Safety' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-navy-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-7 h-7 text-emerald-accent" />
            <span className="text-lg font-bold">CryptoEdge<span className="text-emerald-accent">NG</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-emerald-accent'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-accent hover:bg-emerald-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Trade Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-800 border-t border-navy-700 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.to
                    ? 'text-emerald-accent'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-emerald-accent hover:bg-emerald-dark text-white text-sm font-semibold px-4 py-2 rounded-lg text-center transition-colors"
            >
              Trade Now
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-800 border-t border-navy-700 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-emerald-accent" />
                <span className="font-bold">CryptoEdge<span className="text-emerald-accent">NG</span></span>
              </div>
              <p className="text-sm text-gray-400">
                Trusted P2P crypto merchant facilitating trades on regulated platforms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-emerald-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Important Notice</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                KYC verification on Binance/Bybit is required before trading. 
                We do not hold user funds. All trades occur on regulated P2P platforms.
              </p>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-navy-700 pt-6">
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4">
              <p className="text-xs text-red-300 leading-relaxed">
                <strong>⚠️ DISCLAIMER:</strong> CryptoEdge NG is not a financial institution, exchange, or custodian. 
                We are an independent P2P merchant facilitating trades on regulated platforms (Binance/Bybit). 
                We do NOT hold user funds at any point. All trades are subject to the respective P2P platform's terms and conditions. 
                Cryptocurrency trading carries significant risk. Past performance does not guarantee future results. 
                Only trade with funds you can afford to lose.
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} CryptoEdge NG. All rights reserved. Not a financial institution. Trades subject to P2P platform terms.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-accent hover:bg-emerald-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
