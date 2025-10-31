import Link from "next/link";

const MAP = {
  "mise-en-place": {
    title: "Mise en place",
    price: "Forfait ≈ 2 500 €",
    intro: "Pack pour poser des bases solides et lancer votre prospection en < 2 semaines.",
    modules: ["Audit ICP", "Stack & séquences", "Scripts call/email", "Assets & tests"],
    deliverables: ["Dossier ICP + scripts", "Séquences prêtes", "Playbook d’exécution"]
  },
  "developpement": {
    title: "Développement",
    price: "≈ 3 000 €/mois",
    intro: "Exécution continue pour générer des RDV qualifiés et alimenter votre pipe.",
    modules: ["Prospection multi-canal", "Prise de RDV", "Itérations hebdo", "Reporting"],
    deliverables: ["Dashboard KPI", "Liste RDV planifiés", "Journal d’actions"]
  },
  "direction-commerciale-externalisee": {
    title: "Direction commerciale externalisée",
    price: "Sur-mesure",
    intro: "Pilotage global : stratégie, process, équipe, closing, et gouvernance pipeline.",
    modules: ["Stratégie & orga", "Pilotage forecast", "Coaching & closing", "Incentives & variable"],
    deliverables: ["Roadmap trimestrielle", "Process & playbooks", "Comex pack"]
  }
};

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
        <div className="text-sm text-gray-500">{data.price}</div>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-gray-600 mt-2">{data.intro}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-6">
          <div className="font-semibold">Modules</div>
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
            {data.modules.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>
        <div className="card p-6">
          <div className="font-semibold">Livrables</div>
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
            {data.deliverables.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>
      </div>
      <div className="card p-6">
        <div className="font-semibold mb-2">Intéressé ?</div>
        <div className="flex gap-2">
          <Link href="/contact" className="btn">Demander un échange</Link>
          <Link href="/app-connexion" className="btn">Créer un compte & accéder au dashboard</Link>
        </div>
      </div>
    </div>
  );
}
