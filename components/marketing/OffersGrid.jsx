import Link from "next/link";

function Offer({ title, price, bullets, slug, featured }){
  return (
    <div className={"relative card p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5 " + (featured ? "ring-2 ring-gray-800" : "")}>
      {featured ? <div className="ribbon">Recommandé</div> : null}
      <div className="text-sm text-gray-500">{price}</div>
      <div className="text-xl font-semibold">{title}</div>
      <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
        {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
      </ul>
      <div className="mt-4 flex gap-2">
        <Link href={`/offres/${slug}`} className="btn btn-primary">Voir le détail</Link>
        <Link href="/contact" className="btn btn-ghost">Parler à un expert</Link>
      </div>
    </div>
  );
}

export default function OffersGrid(){
  return (
    <section className="grid md:grid-cols-3 gap-4">
      <Offer title="Mise en place" price="Forfait ≈ 2 500 €" slug="mise-en-place" bullets={["Audit & ICP","Stack & scripts","Séquences & assets","Lancement tests"]}/>
      <Offer title="Développement" price="≈ 3 000 €/mois" slug="developpement" bullets={["Prospection continue","Prise de RDV","Optimisation hebdo","Reporting clair"]} featured/>
      <Offer title="Direction commerciale externalisée" price="Sur-mesure" slug="direction-commerciale-externalisee" bullets={["Pilotage pipe","Coaching & closing","Stratégie commerciale","Variable au succès"]}/>
    </section>
  );
}
