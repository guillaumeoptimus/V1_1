function T({quote, author, role}){
  return (
    <div className="card p-6 relative overflow-hidden">
      <svg className="absolute -top-6 -left-6 w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="none">
        <path d="M7 7h4v10H5V9a2 2 0 0 1 2-2zm10 0h4v10h-6V9a2 2 0 0 1 2-2z" fill="#111827"/>
      </svg>
      <p className="italic text-gray-800">“{quote}”</p>
      <div className="mt-3 text-sm text-gray-700 font-medium">{author}</div>
      <div className="text-xs text-gray-500">{role}</div>
    </div>
  );
}
export default function Testimonials(){
  return (
    <section className="space-y-4">
      <div className="grid md:grid-cols-3 gap-4">
        <T quote="Mise en place rapide et pipeline clair en quelques semaines." author="Sophie — Sinao" role="Direction produit"/>
        <T quote="Des RDV réguliers sur des cibles complexes." author="Marc — Vendredi Society" role="Co-fondateur"/>
        <T quote="Process simple que l’équipe adopte facilement." author="Simon — Noé Gestion" role="Associé"/>
      </div>
    </section>
  );
}
