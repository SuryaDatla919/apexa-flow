"use client";

import { motion } from "motion/react";
import { Zap, Clock, Rocket } from "lucide-react";

// Placeholder images - replace with your actual images in production
const apexLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%234f46e5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237c3aed;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='url(%23grad)'%3EApexa Flow%3C/text%3E%3C/svg%3E";
const integrationsImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f0f1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EIntegrations Dashboard%3C/text%3E%3C/svg%3E";

export function ValueProposition() {
  const benefits = [
    {
      icon: Zap,
      title: "Respond Instantly — Close more leads",
      description: "AI responds to every inquiry in under 60 seconds, capturing intent while it's hot.",
      stat: "2–3× conversion",
      statLabel: "Leads responded to <60s",
      color: "#4f46e5",
    },
    {
      icon: Clock,
      title: "Automate Sales Ops — Save time",
      description: "Free your team from repetitive tasks. Let AI handle qualification, scheduling, and follow-ups.",
      stat: "10–20 hours",
      statLabel: "Saved per week",
      color: "#14b8a6",
    },
    {
      icon: Rocket,
      title: "Ship Fast, Scale Smooth — Websites + AI",
      description: "Launch modern, conversion-optimized websites with embedded AI in days, not months.",
      stat: "3–7 days",
      statLabel: "Go live timeline",
      color: "#f59e0b",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo with Title */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={apexLogo} 
                alt="Apexa Flow" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(79, 70, 229, 0.8)) drop-shadow(0 0 80px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 120px rgba(79, 70, 229, 0.4))'
                }}
              />
              {/* Enhanced glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] blur-3xl -z-10 scale-150 opacity-70" />
            </motion.div>
            <h2 className="text-4xl lg:text-5xl text-left">Why Apexa Flow is a no-brainer</h2>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stop losing revenue to slow responses and outdated systems. Start automating growth today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: `0 0 20px ${benefit.color}40`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-white/70 mb-6">{benefit.description}</p>

                  {/* Stat */}
                  <div
                    className="pt-6 border-t border-white/10"
                  >
                    <div
                      className="text-3xl mb-1 bg-gradient-to-r bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${benefit.color}, ${benefit.color}dd)`,
                      }}
                    >
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-white/60">{benefit.statLabel}</div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${benefit.color}20, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}