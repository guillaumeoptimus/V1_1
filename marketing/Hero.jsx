import Link from "next/link";

export default function Hero(){
  return (
    <section className="mesh relative overflow-hidden rounded-3xl">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="card glass p-10">
          <div className="badge mb-3">Externalisation commerciale</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Un <span className="text-gray-700">pilotage commercial</span> simple, clair<br className="hidden md:block" /> et réellement efficace.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Process net, exécution rapide, reporting utile. Vous voyez les actions et les résultats — sans complexité.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/offres" className="btn btn-primary">Voir les offres</Link>
            <Link href="/dashboard" className="btn">Accéder au dashboard</Link>
          </div>
          <div className="mt-4 text-xs text-gray-500">ICP → Séquences → RDV → Pilotage pipeline.</div>
        </div>

        {/* Inline SVG dashboard mock to avoid missing asset issues */}
        <div className="justify-self-center w-full max-w-xl drop-shadow-xl rounded-2xl border overflow-hidden bg-white">
          <svg width="100%" viewBox="0 0 1100 620" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#f7fafc"/>
              </linearGradient>
              <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b7ff5a"/>
                <stop offset="100%" stopColor="#ffd84d"/>
              </linearGradient>
              <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.25"/>
              </linearGradient>
              <filter id="card" x="-20" y="-20" width="200%" height="200%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0b0c10" floodOpacity="0.08"/>
              </filter>
            </defs>

            <rect width="1100" height="620" rx="28" fill="url(#bg1)"/>
            <rect x="18" y="18" width="1064" height="584" rx="22" fill="#fff" stroke="rgba(15,23,42,0.08)"/>

            {/* Top nav */}
            <rect x="40" y="40" width="160" height="16" rx="8" fill="#0f172a" opacity="0.9"/>
            <rect x="210" y="40" width="110" height="16" rx="8" fill="#94a3b8" opacity="0.5"/>
            <rect x="330" y="40" width="90"  height="16" rx="8" fill="#94a3b8" opacity="0.4"/>
            <rect x="430" y="40" width="120" height="16" rx="8" fill="#94a3b8" opacity="0.4"/>

            {/* KPI Cards */}
            <g filter="url(#card)">
              <rect x="40" y="76" width="300" height="110" rx="16" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <rect x="60" y="94" width="100" height="10" rx="5" fill="#334155" opacity="0.9"/>
            <text x="60" y="126" fill="#0f172a" fontSize="28" fontWeight="600">38 RDV</text>
            <rect x="60" y="140" width="90" height="18" rx="9" fill="url(#acc)" opacity="0.35"/>
            <text x="68" y="153" fill="#0f172a" fontSize="11" opacity="0.75">+12% cette semaine</text>

            <g filter="url(#card)">
              <rect x="360" y="76" width="300" height="110" rx="16" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <rect x="380" y="94" width="120" height="10" rx="5" fill="#334155" opacity="0.9"/>
            <text x="380" y="126" fill="#0f172a" fontSize="28" fontWeight="600">Taux réponse 9.4%</text>
            <rect x="380" y="140" width="120" height="18" rx="9" fill="url(#acc)" opacity="0.35"/>
            <text x="388" y="153" fill="#0f172a" fontSize="11" opacity="0.75">AB Test B &gt; A</text>

            <g filter="url(#card)">
              <rect x="680" y="76" width="300" height="110" rx="16" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <rect x="700" y="94" width="120" height="10" rx="5" fill="#334155" opacity="0.9"/>
            <text x="700" y="126" fill="#0f172a" fontSize="28" fontWeight="600">Pipeline €124k</text>
            <rect x="700" y="140" width="140" height="18" rx="9" fill="url(#acc)" opacity="0.35"/>
            <text x="708" y="153" fill="#0f172a" fontSize="11" opacity="0.75">7 deals en cours</text>

            {/* Main: Left (Table) */}
            <g filter="url(#card)">
              <rect x="40" y="206" width="640" height="240" rx="18" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <rect x="60" y="226" width="200" height="12" rx="6" fill="#0f172a" opacity="0.85"/>
            <rect x="60" y="246" width="560" height="1" fill="#e5e7eb"/>

            {/* Rows */}
            <rect x="60" y="260" width="24" height="24" rx="12" fill="url(#acc)"/>
            <rect x="92" y="262" width="140" height="10" rx="5" fill="#334155" opacity="0.85"/>
            <rect x="240" y="262" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.6"/>
            <rect x="330" y="260" width="64" height="18" rx="9" fill="url(#acc)" opacity="0.35"/>
            <text x="346" y="274" fill="#0f172a" fontSize="10" opacity="0.75">Chaude</text>
            <rect x="408" y="262" width="120" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
            <rect x="540" y="262" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>

            <rect x="60" y="296" width="24" height="24" rx="12" fill="#0f172a" opacity="0.08"/>
            <rect x="92" y="298" width="160" height="10" rx="5" fill="#334155" opacity="0.85"/>
            <rect x="260" y="298" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.6"/>
            <rect x="350" y="296" width="64" height="18" rx="9" fill="#e5e7eb"/>
            <text x="366" y="310" fill="#0f172a" fontSize="10" opacity="0.55">Tiède</text>
            <rect x="418" y="298" width="120" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
            <rect x="550" y="298" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>

            <rect x="60" y="332" width="24" height="24" rx="12" fill="#0f172a" opacity="0.08"/>
            <rect x="92" y="334" width="170" height="10" rx="5" fill="#334155" opacity="0.85"/>
            <rect x="270" y="334" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.6"/>
            <rect x="360" y="332" width="64" height="18" rx="9" fill="#e5e7eb"/>
            <text x="378" y="346" fill="#0f172a" fontSize="10" opacity="0.55">Froid</text>
            <rect x="428" y="334" width="120" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
            <rect x="560" y="334" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>

            <rect x="60" y="368" width="24" height="24" rx="12" fill="#0f172a" opacity="0.08"/>
            <rect x="92" y="370" width="150" height="10" rx="5" fill="#334155" opacity="0.85"/>
            <rect x="250" y="370" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.6"/>
            <rect x="340" y="368" width="64" height="18" rx="9" fill="url(#acc)" opacity="0.35"/>
            <text x="356" y="382" fill="#0f172a" fontSize="10" opacity="0.75">Chaude</text>
            <rect x="408" y="370" width="120" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
            <rect x="540" y="370" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>

            {/* Main: Right (Charts) */}
            <g filter="url(#card)">
              <rect x="700" y="206" width="300" height="240" rx="18" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <circle cx="850" cy="290" r="60" fill="none" stroke="#e5e7eb" strokeWidth="16"/>
            <circle cx="850" cy="290" r="60" fill="none" stroke="url(#acc)" strokeWidth="16" strokeDasharray="220 377" strokeLinecap="round" transform="rotate(-90 850 290)"/>
            <text x="850" y="295" textAnchor="middle" fill="#0f172a" fontSize="20" fontWeight="600">62%</text>
            <text x="850" y="318" textAnchor="middle" fill="#475569" fontSize="11">Tâches faites</text>

            <rect x="740" y="340" width="28" height="86" rx="6" fill="url(#bar)"/>
            <rect x="776" y="360" width="28" height="66" rx="6" fill="url(#bar)"/>
            <rect x="812" y="320" width="28" height="106" rx="6" fill="url(#bar)"/>
            <rect x="848" y="374" width="28" height="52" rx="6" fill="url(#bar)"/>
            <rect x="884" y="352" width="28" height="74" rx="6" fill="url(#bar)"/>
            <rect x="920" y="332" width="28" height="94" rx="6" fill="url(#bar)"/>

            {/* Bottom Cards */}
            <g filter="url(#card)">
              <rect x="40" y="466" width="480" height="116" rx="18" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <rect x="60" y="486" width="180" height="12" rx="6" fill="#0f172a" opacity="0.85"/>
            <polyline points="60,552 90,540 120,548 150,520 180,530 210,512 240,524 270,500 300,508 330,492 360,498 390,486"
                      fill="none" stroke="url(#acc)" strokeWidth="3" strokeLinecap="round"/>
            <rect x="410" y="486" width="90" height="22" rx="11" fill="url(#acc)" opacity="0.3"/>
            <text x="420" y="501" fill="#0f172a" fontSize="11" opacity="0.85">+18% vs N-1</text>

            <g filter="url(#card)">
              <rect x="540" y="466" width="460" height="116" rx="18" fill="#fff" stroke="rgba(15,23,42,0.08)"/>
            </g>
            <rect x="560" y="486" width="160" height="12" rx="6" fill="#0f172a" opacity="0.85"/>
            <rect x="560" y="508" width="88" height="22" rx="11" fill="#e5e7eb"/>
            <text x="574" y="523" fill="#0f172a" fontSize="11" opacity="0.7">ICP V1</text>
            <rect x="654" y="508" width="110" height="22" rx="11" fill="#e5e7eb"/>
            <text x="670" y="523" fill="#0f172a" fontSize="11" opacity="0.7">Séquences A/B</text>
            <rect x="772" y="508" width="78" height="22" rx="11" fill="#e5e7eb"/>
            <text x="786" y="523" fill="#0f172a" fontSize="11" opacity="0.7">Relances</text>
            <rect x="854" y="508" width="120" height="22" rx="11" fill="url(#acc)" opacity="0.3"/>
            <text x="870" y="523" fill="#0f172a" fontSize="11" opacity="0.85">RDV qualifiés</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
