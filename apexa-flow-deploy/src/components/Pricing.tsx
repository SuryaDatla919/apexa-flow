"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { DemoScheduleModal } from "./DemoScheduleModal";

export function Pricing() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const tiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Speed-to-Lead system (1 channel)",
        "AI chat widget",
        "Basic lead qualification",
        "Email & SMS notifications",
        "CRM integration (1 platform)",
        "3-day onboarding",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      description: "For businesses ready to scale with advanced automation",
      features: [
        "Everything in Starter",
        "Speed-to-Lead (unlimited channels)",
        "AI Customer Service Agent",
        "Advanced lead qualification & routing",
        "CRM automation workflows",
        "Custom website integration",
        "5-day onboarding",
        "Priority support",
        "Monthly optimization calls",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for established businesses",
      features: [
        "Everything in Growth",
        "Automated lead scraping",
        "Custom AI workflow automations",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations & APIs",
        "7-day onboarding",
        "24/7 priority support",
        "Quarterly strategy reviews",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include our core AI automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative ${tier.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-sm flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    {tier.badge}
                  </div>
                </div>
              )}
              
              <div
                className={`h-full p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-br from-[#4f46e5]/20 to-[#7c3aed]/10 border-2 border-[#4f46e5]/50 shadow-xl shadow-purple-500/20"
                    : "bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-2">{tier.name}</h3>
                  <p className="text-sm text-white/60 mb-6">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                  size="lg"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Start with a Free Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Enterprise Note */}
        <motion.div
          className="text-center p-6 rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/70">
            <span className="text-white">Custom pricing for enterprise?</span>{" "}
            We'll build a solution tailored to your exact needs.{" "}
            <a href="#contact" className="text-[#4f46e5] hover:text-[#7c3aed] transition-colors">
              Contact us →
            </a>
          </p>
        </motion.div>
      </div>

      {/* Demo Schedule Modal */}
      <DemoScheduleModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
}