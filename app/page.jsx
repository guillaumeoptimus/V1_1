import Hero from "@/components/marketing/Hero";
import Proof from "@/components/marketing/Proof";
import OffersGrid from "@/components/marketing/OffersGrid";
import Logos from "@/components/marketing/Logos";
import Process from "@/components/marketing/Process";
import Testimonials from "@/components/marketing/Testimonials";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SiteLanding(){
  return (
    <div className="space-y-14">
      <Hero />
      <Logos />
      <div className="space-y-6">
        <SectionHeader title="Des résultats concrets" sub="Quelques repères issus de missions récentes" />
        <Proof />
      </div>
      <div className="space-y-6">
        <SectionHeader title="Offres" sub="Choisissez la formule qui correspond à votre maturité commerciale" />
        <OffersGrid />
      </div>
      <div className="space-y-6">
        <SectionHeader title="Une méthode simple et efficace" sub="De l’ICP au closing, tout est cadré et mesuré" />
        <Process />
      </div>
      <div className="space-y-6">
        <SectionHeader title="Témoignages" sub="Ce que disent les équipes avec lesquelles nous travaillons" />
        <Testimonials />
      </div>
      <div className="space-y-6">
        <SectionHeader title="Questions fréquentes" sub="Transparence sur le rythme, le ROI et l’outillage" />
        <FAQ />
      </div>
      <CTA />
    </div>
  );
}
