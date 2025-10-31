"use client";
import React from "react";

function Item({q, a}){
  const [open,setOpen] = React.useState(false);
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <span className="text-xs px-2 py-0.5 rounded-full border">{open ? "−" : "+"}</span>
      </button>
      {open ? <p className="text-sm text-gray-600 mt-2">{a}</p> : null}
    </div>
  );
}

export default function FAQ(){
  return (
    <section className="grid md:grid-cols-2 gap-3">
      <Item q="Quel délai pour démarrer ?" a="Généralement en 1 à 2 semaines avec le pack Mise en place."/>
      <Item q="Travaillez-vous au succès ?" a="Oui, un variable est possible sur les offres Dév./Direction commercial."/>
      <Item q="Quels outils utilisez-vous ?" a="Stack légère (HubSpot light, Lemlist, Notion) ou vos outils existants."/>
      <Item q="Puis-je suivre les résultats ?" a="Un dashboard clair et un reporting hebdomadaire sont inclus."/>
    </section>
  );
}
