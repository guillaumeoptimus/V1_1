import Link from "next/link";

const MAP = {
  "mise-en-place": {
    title: "Mise en place",
    intro: "Pack pour poser des bases solides et lancer votre prospection en < 2 semaines.",
    modules: ["Audit ICP", "Stack & séquences", "Scripts call/email", "Assets & tests"],
    deliverables: ["Dossier ICP + scripts", "Séquences prêtes", "Playbook d’exécution"],
    options: ["Landing courte de campagne", "Setup Lemlist/Domaines", "Enrichissement de leads"],
    problems: ["Manque de clarté sur l’ICP", "Messages qui ne convertissent pas", "Trop d’outils, pas assez d’action"],
    outcomes: ["Ciblage net & messages qui accrochent", "Séquences prêtes et testées", "Base saine pour scaler"]
  },
  "developpement": {
    title: "Développement",
    intro: "Exécution continue pour générer des RDV qualifiés et alimenter votre pipe.",
    modules: ["Prospection multi-canal", "Prise de RDV", "Itérations hebdo", "Reporting"],
    deliverables: ["Dashboard KPI", "Liste RDV planifiés", "Journal d’actions"],
    options: ["Relances automatisées + call blitz", "AB testing messages / canaux", "Qualification stricte des RDV"],
    problems: ["Pipe qui stagne", "Mauvaise qualification", "Manque de régularité"],
    outcomes: ["Flux de RDV qualifiés", "Pipeline lisible", "Amélioration continue documentée"]
  },
  "direction-commerciale-externalisee": {
    title: "Direction commerciale externalisée",
    intro: "Pilotage global : stratégie, process, équipe, closing, et gouvernance pipeline.",
    modules: ["Stratégie & orga", "Pilotage forecast", "Coaching & closing", "Incentives & variable"],
    deliverables: ["Roadmap trimestrielle", "Process & playbooks", "Comex pack"],
    options: ["Coaching des sales", "Ateliers pricing/offres", "Implémentation CRM light"],
    problems: ["Visibilité faible sur le pipe", "Process non documentés", "Cycle long & perte d’élan"],
    outcomes: ["Gouvernance pipeline robuste", "Équipe outillée & rituels efficaces", "Impact mesuré sur le chiffre"]
  }
};

function List({title, items}){
  return (
    <div className="card p-6">
      <div className="font-semibold">{title}</div>
      <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
        {items.map((m,i)=>(<li key={i}>{m}</li>))}
      </ul>
    </div>
  );
}

export default function OffreDetail({ params }){
  const data = MAP[params.slug] || null;
  if(!data){
    return (<div className="space-y-4"><h1 className="text-2xl font-semibold">Offre introuvable</h1>
      <Link href="/offres" className="btn">Retour aux offres</Link></div>);
  }
  return (
    <div className="space-y-6">
      <Link href="/offres" className="text-sm text-gray-500 hover:underline">← Retour aux offres</Link>
      <div className="card p-6">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-gray-600 mt-2">{data.intro}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <List title="Modules" items={data.modules} />
        <List title="Livrables" items={data.deliverables} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <List title="Options" items={data.options} />
        <List title="Problèmes résolus" items={data.problems} />
      </div>
      <div className="card p-6">
        <div className="font-semibold mb-1">Résultats attendus</div>
        <ul className="mt-1 text-sm text-gray-700 list-disc pl-5 space-y-1">
          {data.outcomes.map((m,i)=>(<li key={i}>{m}</li>))}
        </ul>
        <div className="flex gap-2 mt-4">
          <Link href="/contact" className="btn">Parler à un expert</Link>
          <Link href="/dashboard" className="btn btn-primary">Voir le dashboard</Link>
        </div>
      </div>
    </div>
  );
}
