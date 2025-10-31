"use client";
import React from "react";

/**
 * Méthode enrichie (5 étapes) :
 * - Timeline visuelle (desktop)
 * - Cartes profondes avec icône, durée, actions, livrables
 * - Détails repliables (“Voir un exemple de sortie”)
 * - Mini-métriques en bas
 */

const STEPS = [
  {
    n: 1,
    title: "Diagnostic & ICP",
    duration: "< 2 jours",
    icon: "🎯",
    desc: "On clarifie vos cibles, signatures de valeur et canaux prioritaires.",
    bullets: [
      "Segments & personas priorisés",
      "Jobs-to-be-done & pain points",
      "Liste de comptes hautement pertinents"
    ],
    deliverables: ["Dossier ICP synthétique", "Liste comptes + contacts", "Brief messages-clés"]
  },
  {
    n: 2,
    title: "Message & actifs",
    duration: "2–3 jours",
    icon: "✍️",
    desc: "Scripts et séquences multi-canal utilisables immédiatement.",
    bullets: [
      "Scripts d'appel et emails courts",
      "Cadences & relances structurées",
      "Templates d'objections/réponses"
    ],
    deliverables: ["Scripts V1", "Séquences prêtes", "Cheat-sheet objections"]
  },
  {
    n: 3,
    title: "Mise en place légère",
    duration: "1–2 jours",
    icon: "⚙️",
    desc: "On installe uniquement le nécessaire pour exécuter vite.",
    bullets: [
      "Stack simple (CRM light + prospection)",
      "Tracking minimaliste et utile",
      "Playbook d'usage clair"
    ],
    deliverables: ["Board CRM prêt", "Variables & domaines OK", "Playbook d'exécution"]
  },
  {
    n: 4,
    title: "Exécution & RDV",
    duration: "Continu",
    icon: "📆",
    desc: "On opère les campagnes, qualifie et aligne les RDV.",
    bullets: [
      "Cadences tenues & relances maîtrisées",
      "Qualification stricte avant RDV",
      "Compte-rendus et handover fluides"
    ],
    deliverables: ["Liste RDV qualifiés", "Notes & next steps", "Stats hebdomadaires"]
  },
  {
    n: 5,
    title: "Pilotage & itérations",
    duration: "Hebdo",
    icon: "📈",
    desc: "Chaque semaine : revue, apprentissages et micro-ajustements.",
    bullets: [
      "Stand-up + plan d'action",
      "A/B tests continus",
      "Métriques utiles (pas de vanity)"
    ],
    deliverables: ["Journal d'actions", "A/B learnings", "Roadmap d'ajustements"]
  }
];

function Badge({children}) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] bg-gray-100 text-gray-700 border">
      {children}
    </span>
  );
}

function StepCard({step}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative card p-6 transition-all hover:shadow-lg">
      <div className="absolute -left-2 top-6 w-5 h-5 rounded-full bg-white border shadow-sm flex items-center justify-center text-[11px] font-semibold">
        {step.n}
      </div>

      <div className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center border"
          style={{background: "linear-gradient(135deg,#ecfeff,#eef2ff)", borderColor:"rgba(15,23,42,.08)"}}
          aria-hidden="true"
        >
          <span className="text-lg">{step.icon}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">{step.title}</div>
            <Badge>{step.duration}</Badge>
          </div>
          <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mt-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Actions</div>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            {step.bullets.map((b,i)=><li key={i}>{b}</li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Livrables</div>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            {step.deliverables.map((d,i)=><li key={i}>{d}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <button onClick={()=>setOpen(v=>!v)} className="text-sm underline text-gray-600 hover:text-gray-800">
          {open ? "Masquer les détails" : "Voir un exemple de sortie"}
        </button>
        {open ? (
          <div className="mt-2 rounded-2xl border p-3 bg-white text-sm text-gray-700">
            {step.n === 1 && (
              <>
                <div className="font-medium">Exemple — Dossier ICP (extrait)</div>
                <p className="mt-1">Segments: SaaS B2B 1–50 salariés (CRM/ERP 500–3k clients). Personas: CEO, Head of Product, Partnerships.</p>
              </>
            )}
            {step.n === 2 && (
              <>
                <div className="font-medium">Exemple — Script email (extrait)</div>
                <p className="mt-1">Objet: “Intégrer une brique facturation sans refondre votre produit ?” — 4 lignes, CTA 20 min, variantes A/B.</p>
              </>
            )}
            {step.n === 3 && (
              <>
                <div className="font-medium">Exemple — Playbook</div>
                <p className="mt-1">Checklist: domaines, tracking, variables, mapping pipeline, critères de qualif, rituel hebdo.</p>
              </>
            )}
            {step.n === 4 && (
              <>
                <div className="font-medium">Exemple — Qualification RDV</div>
                <p className="mt-1">Critères: budget approvable, timing &lt; 90j, sponsor identifié, besoin reconnu, décisionneur mappé.</p>
              </>
            )}
            {step.n === 5 && (
              <>
                <div className="font-medium">Exemple — Learning A/B</div>
                <p className="mt-1">Objet court + bénéfice métier &gt; objet technique. Relance J+2 &gt; J+1 sur segment CFO.</p>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Mini({k, v}) {
  return (
    <div className="rounded-2xl border p-4 bg-white text-center">
      <div className="text-2xl font-semibold">{v}</div>
      <div className="text-xs text-gray-500">{k}</div>
    </div>
  );
}

export default function Process(){
  return (
    <section className="space-y-6">
      <div className="relative">
        <div className="hidden md:block absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />
        <div className="grid md:grid-cols-2 gap-4">
          {STEPS.map(s => <StepCard key={s.n} step={s} />)}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Mini k="Démarrage" v="< 2 sem." />
        <Mini k="Rituel" v="Hebdo" />
        <Mini k="Focus" v="RDV qualifiés" />
        <Mini k="Outillage" v="Léger" />
      </div>
    </section>
  );
}
