import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { DataVisualizations } from "./components/DataVisualizations";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { IntegrationShowcase } from "./components/IntegrationShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <IntegrationShowcase />
        <Services />
        <HowItWorks />
        <DataVisualizations />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}