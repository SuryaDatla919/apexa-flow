"use client";

import { motion } from "motion/react";

export function IntegrationShowcase() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9333ea]/10 via-[#4f46e5]/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main heading with gradient */}
          <h2 className="text-4xl lg:text-6xl xl:text-7xl mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Integrates with your systems
            </span>
            {/* Glow effect under text */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-[#4f46e5] via-[#9333ea] to-[#4f46e5] blur-3xl opacity-40" />
          </h2>
          
          {/* Subheading with subtle glow */}
          <motion.p 
            className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Integrate as deeply as you want with your{" "}
            <span className="text-transparent bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] bg-clip-text font-medium">
              class schedule
            </span>
            ,{" "}
            <span className="text-transparent bg-gradient-to-r from-[#f59e0b] to-[#ef4444] bg-clip-text font-medium">
              CRM
            </span>
            ,{" "}
            <span className="text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text font-medium">
              back office
            </span>
            , and more.
          </motion.p>
        </motion.div>

        {/* Integration Visual */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Animated gradient glow rings */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#9333ea] via-[#4f46e5] to-[#9333ea] rounded-full blur-[100px] opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#4f46e5] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Main image container */}
          <div className="relative z-10">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <img 
                src="/integrations-dashboard.png" 
                alt="APEXA AI Integration Hub - Connect with Slack, Gmail, HubSpot, Google Sheets, Salesforce, and more" 
                className="w-full h-auto object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 20px 60px rgba(147, 51, 234, 0.6)) drop-shadow(0 10px 30px rgba(79, 70, 229, 0.4))'
                }}
              />
            </motion.div>

            {/* Floating particles effect */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA or description */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-white/60">
            Connect seamlessly with the tools you already use. No complex setup required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
