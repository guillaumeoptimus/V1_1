import Link from "next/link";

function Marker({children}){
  return (<div className="marker">{children}</div>);
}
function Feat({children}){
  return (<div className="feat"><span className="dot" /> <div className="text-sm text-gray-700">{children}</div></div>);
}

function Offer({ title, intro, bullets, benefits, slug, featured }){
  return (
    <div className={"offer " + (featured ? "ring-2 ring-offset-2 ring-offset-white ring-[rgba(110,231,255,.6)]" : "")}>
      {featured ? <div className="absolute -right-6 top-6 rotate-45 text-[10px] bg-black text-white px-8 py-1 rounded-full shadow-sm">Recommandé</div> : null}
      <div className="flex items-center gap-3">
        <Marker>✨</Marker>
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{intro}</p>
      <div className="grid md:grid-cols-2 gap-3 mt-4">
        <div className="space-y-2">
          {bullets.map((b,i)=>(<Feat key={i}>{b}</Feat>))}
        </div>
        <div className="space-y-2">
          {benefits.map((b,i)=>(<Feat key={i}>{b}</Feat>))}
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <Link href={`/offres/${slug}`} className="btn btn-primary">Voir le détail</Link>
        <Link href="/dashboard" className="btn">Voir le dashboard</Link>
      </div>
    </div>
  );
}

export default function OffersGrid(){
  return (
    <section className="grid md:grid-cols-3 gap-5">
      <Offer
        title="Mise en place"
        intro="On pose des bases solides et on lance les premiers tests d’acquisition rapidement."
        bullets={["Diagnostic ICP et personas","Scripts call & email","Séquences initiales & assets","Setup stack légère"]}
        benefits={["Démarrage en < 2 semaines","Zéro friction pour vos équipes","Documentation claire","Prêts pour l’itération"]}
        slug="mise-en-place"
      />
      <Offer
        title="Développement"
        featured
        intro="Exécution continue pour remplir le pipe et générer des RDV qualifiés, semaine après semaine."
        bullets={["Prospection multi-canal opérationnelle","Relances et cadences maîtrisées","Itérations hebdo sur messages/canaux","Qualification stricte des RDV"]}
        benefits={["Pipeline qui avance","Visibilité hebdo utile","Apprentissage continu","Focalisé résultat, pas vanity"]}
        slug="developpement"
      />
      <Offer
        title="Direction commerciale externalisée"
        intro="Pilotage global de votre mécanique commerciale, du go-to-market au closing."
        bullets={["Stratégie & gouvernance pipeline","Coaching & rituels sales","Forecast & priorisation","Playbooks & process"]}
        benefits={["Alignement équipe/objectif","Décisions basées data","Cadence de pilotage forte","Accélération des cycles"]}
        slug="direction-commerciale-externalisee"
      />
    </section>
  );
}
