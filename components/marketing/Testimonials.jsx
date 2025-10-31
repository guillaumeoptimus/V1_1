function T({quote, author, role}){
  return (
    <div className="card p-6">
      <p className="italic text-gray-700">“{quote}”</p>
      <div className="mt-3 text-sm text-gray-600 font-medium">{author}</div>
      <div className="text-xs text-gray-400">{role}</div>
    </div>
  );
}
export default function Testimonials(){
  return (
    <section className="space-y-4">
      <div className="text-2xl font-semibold">Témoignages</div>
      <div className="grid md:grid-cols-3 gap-4">
        <T quote="Mise en place rapide et pipeline clair en quelques semaines." author="Sophie — Sinao" role="Direction produit"/>
        <T quote="Des RDV réguliers sur des cibles complexes." author="Marc — Vendredi Society" role="Co-fondateur"/>
        <T quote="Process simple que l’équipe adopte facilement." author="Simon — Noé Gestion" role="Associé"/>
      </div>
    </section>
  );
}
