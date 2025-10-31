import Link from "next/link";

export default function Hero(){
  return (
    <section className="hero relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-10" viewBox="0 0 100 100" fill="none">
          <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#111827"/><stop offset="100%" stopColor="#374151"/>
          </linearGradient></defs>
          <circle cx="50" cy="50" r="50" fill="url(#g)"/>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div className="hero-card card p-8">
          <div className="badge mb-3">Externalisation commerciale</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Accélérez vos ventes avec une <span className="text-gray-700">Direction Commerciale Externalisée</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Structuration go-to-market, prospection multi-canale, prise de RDV et pilotage du pipe.
            Focus résultat, <span className="font-medium">zéro complexité</span>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/offres" className="btn btn-primary">Voir les offres</Link>
            <Link href="/app-connexion" className="btn">Créer un compte & accéder au dashboard</Link>
          </div>
          <div className="mt-4 text-xs text-gray-500">Déploiement simple • Reporting clair • Variable au succès possible</div>
        </div>
        <div className="justify-self-center">
          <img src="/site-illustration.svg" alt="Optimus Lead" className="w-full max-w-md drop-shadow-lg"/>
        </div>
      </div>
    </section>
  );
}
