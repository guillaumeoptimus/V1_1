export default function SectionHeader({title, sub}){
  return (
    <div className="text-center max-w-2xl mx-auto mb-2">
      <h2 className="section-title">{title}</h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );
}
