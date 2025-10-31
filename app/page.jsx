import Hero from "@/components/marketing/Hero";
import Proof from "@/components/marketing/Proof";
import OffersGrid from "@/components/marketing/OffersGrid";
import Logos from "@/components/marketing/Logos";
import Process from "@/components/marketing/Process";
import Testimonials from "@/components/marketing/Testimonials";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";

export default function SiteLanding(){
  return (
    <div className="space-y-10">
      <Hero />
      <Logos />
      <Proof />
      <OffersGrid />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
