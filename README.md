# CryptoEdge NG — P2P Crypto Merchant Showcase Site

## ⚠️ IMPORTANT: Legal Risks & Client Vetting Checklist

### Legal Risks for the Developer/Designer

1. **No Custodial Liability**: This site does NOT hold, process, or manage user funds. It is purely a marketing/informational site. No payment gateway integration exists.

2. **No Exchange Mimicry**: The site does not replicate or mimic any exchange interface. It directs users to official Binance/Bybit P2P platforms for all trading activity.

3. **Regulatory Compliance (Nigeria)**:
   - The SEC Nigeria has issued guidelines on digital assets. Ensure the merchant client is aware of current CBN/SEC regulations.
   - P2P trading exists in a gray area in some jurisdictions. The merchant should consult a Nigerian legal professional specializing in fintech/crypto.

4. **Consumer Protection**:
   - The site includes disclaimers on every page.
   - No user data is collected (no accounts, no forms, no cookies for tracking).
   - All trades happen on third-party regulated platforms.

5. **Impersonation Risk**:
   - The WhatsApp number displayed should be verified as belonging to the actual merchant.
   - Developer should not be liable for impersonation — include a clause in the service agreement.

---

### Client Vetting Checklist (Before Accepting This Project)

- [ ] **Verify Merchant Identity**: Confirm the client is a real, registered P2P merchant on Binance/Bybit with verifiable trade history.
- [ ] **Check Platform Standing**: Ensure the merchant has no bans, warnings, or disputes on their P2P platform accounts.
- [ ] **KYC Verification**: Confirm the merchant has completed KYC on the platforms they operate on.
- [ ] **Trade Volume**: Request evidence of trade volume (screenshots of completed trades, merchant badge status).
- [ ] **Legal Consultation**: Advise the client to consult a Nigerian lawyer about P2P crypto trading legality.
- [ ] **No Custodial Features**: If the client requests ANY feature that holds funds, processes payments, or creates accounts — **DECLINE IMMEDIATELY**.
- [ ] **Disclaimer Agreement**: Ensure the client understands and agrees to all disclaimers displayed on the site.
- [ ] **WhatsApp Number Verification**: Verify the WhatsApp number belongs to the merchant (video call or in-person meeting).
- [ ] **Content Approval**: Get written approval of all site content before deployment.
- [ ] **Ongoing Liability**: Include a clause limiting developer liability for the merchant's trading activities.

---

### Features That Were REFUSED (and Why)

| Requested Feature | Reason for Refusal |
|---|---|
| User accounts/login | Creates custody risk and data protection obligations |
| Payment integration (Paystack/Flutterwave) | Illegal for crypto in Nigeria; creates processing liability |
| Wallet functionality | Custodial risk; requires money transmitter license |
| Exchange-like trading interface | Mimics regulated exchange; legal liability |
| Storing user KYC documents | Data protection violation; unnecessary for P2P merchant |
| Auto-executing trades | Requires exchange API keys; custody and security risk |

---

### Technical Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 6
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

### Pages

1. **Homepage (/)** — Hero, live rate ticker, trust badges, how it works, FAQ
2. **Rates (/rates)** — Current trading rates table with disclaimer
3. **Safety (/safety)** — Compliance disclosures, red flags guide, risk disclosure

### Design Principles

- Dark blue (#0F172A) + emerald green (#10B981) = trust & finance
- Mobile-first (90%+ Nigerian crypto users are on mobile)
- Fast loading (<2s on 3G)
- No flashy/gambling aesthetics
- Clear disclaimers on every page

---

### Deployment

This site can be deployed to:
- Vercel (recommended — free tier, auto HTTPS)
- Netlify
- Any static hosting (GitHub Pages, Cloudflare Pages)

No backend required. No database. No user data stored.

---

### License

This project is provided as-is for the client's use. Developer retains no ongoing liability for the merchant's trading activities after delivery.

---

*Last updated: 2026*
