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
            Un <span className="text-gray-700">pilotage commercial</span> sleek, simple<br className="hidden md:block" /> et réellement efficace.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Process clair, exécution rapide, reporting utile. Vous voyez les actions et les résultats — sans complexité.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/offres" className="btn btn-primary">Voir les offres</Link>
            <Link href="/dashboard" className="btn">Accéder au dashboard</Link>
          </div>
          <div className="mt-4 text-xs text-gray-500">ICP → Séquences → RDV → Pilotage pipeline.</div>
        </div>
        <div className="justify-self-center">
          <img src="/site-illustration.svg" alt="Optimus Lead" className="w-full max-w-md drop-shadow-xl"/>
        </div>
      </div>
    </section>
  );
}
