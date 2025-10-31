import Link from "next/link";
export default function CTA(){
  return (
    <section className="card p-6 text-center">
      <h2 className="text-2xl font-semibold">Prêt à structurer votre machine commerciale ?</h2>
      <p className="text-sm text-gray-600 mt-2">Accédez au dashboard et suivez vos actions.</p>
      <div className="mt-4 flex gap-3 justify-center">
        <Link href="/dashboard" className="btn btn-primary">Accéder au dashboard</Link>
        <Link href="/offres" className="btn">Voir les offres</Link>
      </div>
    </section>
  );
}
