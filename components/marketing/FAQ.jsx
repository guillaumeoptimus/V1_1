function Q({q,a}){
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="font-medium">{q}</div>
      <p className="text-sm text-gray-600 mt-1">{a}</p>
    </div>
  );
}
export default function FAQ(){
  return (
    <section className="space-y-4">
      <div className="text-2xl font-semibold">FAQ</div>
      <div className="grid md:grid-cols-2 gap-3">
        <Q q="Quel délai pour démarrer ?" a="Généralement en 1 à 2 semaines avec le pack Mise en place."/>
        <Q q="Travaillez-vous au succès ?" a="Oui, un variable est possible sur les offres Dév./Direction commercial."/>
        <Q q="Quels outils utilisez-vous ?" a="Stack légère (HubSpot light, Lemlist, Notion) ou vos outils existants."/>
        <Q q="Puis-je suivre les résultats ?" a="Un dashboard clair et un reporting hebdomadaire sont inclus."/>
      </div>
    </section>
  );
}
