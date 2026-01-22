"use client";

import { motion } from "motion/react";
import { Phone, Hammer, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "Strategy Call",
      subtitle: "15 minutes",
      description: "We'll discuss your goals, challenges, and identify the best AI solutions for your business.",
      color: "#4f46e5",
    },
    {
      icon: Hammer,
      title: "Build & Integrate",
      subtitle: "3–7 days",
      description: "Our team builds and integrates your custom AI systems with your existing tools and workflows.",
      color: "#14b8a6",
    },
    {
      icon: TrendingUp,
      title: "Launch & Optimize",
      subtitle: "Ongoing",
      description: "Go live with full support. We monitor performance and continuously optimize for better results.",
      color: "#f59e0b",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4">How It Works</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From strategy to scale in three simple steps
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4f46e5] via-[#14b8a6] to-[#f59e0b] opacity-20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center relative"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}40, ${step.color}10)`,
                            border: `2px solid ${step.color}60`,
                          }}
                        >
                          <Icon className="w-9 h-9" style={{ color: step.color }} />
                        </div>
                        {/* Pulse effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `2px solid ${step.color}`,
                          }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div
                        className="inline-block px-4 py-1 rounded-full mb-3 text-sm"
                        style={{
                          background: `${step.color}20`,
                          color: step.color,
                        }}
                      >
                        {step.subtitle}
                      </div>
                      <h3 className="text-2xl mb-3">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>

                  {/* Connecting arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <motion.div
                        className="w-0.5 h-12 rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                          opacity: 0.3,
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/70 mb-6">Ready to get started?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Schedule Your Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
