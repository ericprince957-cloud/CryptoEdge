import { Shield, AlertTriangle, CheckCircle, XCircle, Lock, ExternalLink } from 'lucide-react';

export default function Safety() {
  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Shield className="w-12 h-12 text-emerald-accent mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Safety & Compliance</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Your security is our priority. Read this page carefully before engaging in any trade.
          </p>
        </div>

        {/* Mandatory Disclosure */}
        <div className="bg-navy-800 border-2 border-emerald-accent/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Lock className="w-6 h-6 text-emerald-accent flex-shrink-0" />
            <h2 className="text-lg font-bold">Who We Are</h2>
          </div>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">CryptoEdge NG is a P2P merchant</strong> facilitating peer-to-peer cryptocurrency 
              trades on regulated platforms (Binance P2P and Bybit P2P).
            </p>
            <p>
              <strong className="text-white">We do NOT hold user funds.</strong> At no point during a transaction do we 
              have custody of your cryptocurrency or fiat currency. All trades occur directly on regulated P2P platforms 
              with built-in escrow protection.
            </p>
            <p>
              <strong className="text-white">We are NOT a financial institution,</strong> exchange, broker, or investment advisor. 
              We do not provide financial advice, manage portfolios, or offer investment services.
            </p>
            <p>
              <strong className="text-white">We do NOT process payments directly.</strong> All NGN transfers are made between 
              your bank account and the counterparty's bank account through the P2P platform's payment system.
            </p>
          </div>
        </div>

        {/* KYC Warning */}
        <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-200 text-sm mb-2">KYC Requirement</h3>
              <p className="text-xs text-blue-300/80 leading-relaxed">
                Users <strong>must</strong> complete KYC (Know Your Customer) verification on Binance or Bybit before 
                trading with us. This is a mandatory requirement of the P2P platforms. Without verified identity, 
                you cannot participate in P2P trades. Please ensure your account is fully verified before contacting us.
              </p>
            </div>
          </div>
        </div>

        {/* How Escrow Works */}
        <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-accent" />
            How Escrow Protection Works
          </h2>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center text-xs text-emerald-accent font-bold flex-shrink-0">1</span>
              <p>When a trade is initiated on Binance/Bybit P2P, the seller's crypto is automatically locked in escrow by the platform.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center text-xs text-emerald-accent font-bold flex-shrink-0">2</span>
              <p>The buyer makes payment directly to the seller's bank account (not to us as a company).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center text-xs text-emerald-accent font-bold flex-shrink-0">3</span>
              <p>Once payment is confirmed, the platform releases the crypto from escrow to the buyer's wallet.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-accent/10 border border-emerald-accent/30 rounded-full flex items-center justify-center text-xs text-emerald-accent font-bold flex-shrink-0">4</span>
              <p>If there's a dispute, the platform's support team mediates — neither party can run away with funds.</p>
            </div>
          </div>
        </div>

        {/* Red Flags Guide */}
        <div className="bg-red-900/10 border border-red-800/30 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-start gap-2 text-red-200">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
            Red Flags — Protect Yourself
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Be aware of common scams. If anyone (including someone claiming to be us) does any of the following, 
            <strong className="text-red-300"> stop the trade immediately</strong>:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">Never share your OTP, password, or 2FA codes</p>
                <p className="text-xs text-gray-400">No legitimate trader or platform will ever ask for these. If someone does, it's a scam.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">Never pay outside the agreed P2P platform channels</p>
                <p className="text-xs text-gray-400">All payments must go through the bank details provided within the Binance/Bybit P2P order. Never send to external accounts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">Never click suspicious links or download files</p>
                <p className="text-xs text-gray-400">We will never send you links to "verify your wallet" or "confirm your identity" outside the official platform.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">Never release crypto before confirming payment</p>
                <p className="text-xs text-gray-400">Always check your bank account directly (not SMS alerts) to confirm the money has arrived.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">Never trade with someone who pressures you to hurry</p>
                <p className="text-xs text-gray-400">Take your time. Legitimate traders will never rush you or create false urgency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safe Trading Checklist */}
        <div className="bg-emerald-900/10 border border-emerald-700/30 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-start gap-2 text-emerald-200">
            <CheckCircle className="w-5 h-5 text-emerald-accent flex-shrink-0" />
            Safe Trading Checklist
          </h2>
          <div className="space-y-3">
            {[
              'Verify you are chatting with our official WhatsApp number',
              'Ensure your Binance/Bybit account is KYC-verified',
              'Only trade through the official P2P platform (never outside)',
              'Confirm payment in your bank app (not just SMS notification)',
              'Keep screenshots of all communications and transactions',
              'Complete the trade within the platform\'s time window',
              'Use the platform\'s dispute resolution if issues arise',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Disclosure */}
        <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Risk Disclosure</h2>
          <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
            <p>
              <strong className="text-white">Cryptocurrency Volatility:</strong> Crypto prices can fluctuate dramatically in short periods. 
              The value of your holdings may decrease significantly.
            </p>
            <p>
              <strong className="text-white">Regulatory Risk:</strong> Cryptocurrency regulations in Nigeria and globally are evolving. 
              Changes in regulation may affect your ability to trade or hold crypto assets.
            </p>
            <p>
              <strong className="text-white">Platform Risk:</strong> While we use regulated platforms (Binance/Bybit), no platform is 
              immune to technical issues, policy changes, or security incidents.
            </p>
            <p>
              <strong className="text-white">Counterparty Risk:</strong> P2P trading involves dealing with other individuals. 
              While escrow protects both parties, always exercise caution and follow safety guidelines.
            </p>
            <p>
              <strong className="text-white">No Guarantee of Profit:</strong> Past performance does not indicate future results. 
              Never invest more than you can afford to lose.
            </p>
          </div>
        </div>

        {/* Official Channels */}
        <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-emerald-accent" />
            Official Channels Only
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            We communicate exclusively through the following channels. Be cautious of imposters:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3 p-3 bg-navy-700/30 rounded-lg">
              <span className="text-emerald-accent font-medium">WhatsApp:</span>
              <span className="text-gray-300">+234 801 234 5678 (our only official number)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-navy-700/30 rounded-lg">
              <span className="text-emerald-accent font-medium">Binance P2P:</span>
              <span className="text-gray-300">Merchant ID: CryptoEdgeNG (verify on Binance app)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-navy-700/30 rounded-lg">
              <span className="text-emerald-accent font-medium">Bybit P2P:</span>
              <span className="text-gray-300">Merchant ID: CryptoEdgeNG (verify on Bybit app)</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ⚠️ We will never ask you to communicate on Telegram, Signal, or any other platform for trade purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
