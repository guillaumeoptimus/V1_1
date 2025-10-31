function Step({n, title, desc}){
  return (
    <div className="card p-5">
      <div className="text-xs text-gray-400">Étape {n}</div>
      <div className="text-lg font-semibold">{title}</div>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}
export default function Process(){
  return (
    <section className="grid md:grid-cols-3 gap-4">
      <Step n="1" title="Diagnostic & ICP" desc="Ciblage, messages et canaux prioritaires."/>
      <Step n="2" title="Mise en place & assets" desc="Stack légère, scripts, séquences, playbooks."/>
      <Step n="3" title="Exécution & pilotage" desc="Prospection, RDV, itérations, reporting clair."/>
    </section>
  );
}
