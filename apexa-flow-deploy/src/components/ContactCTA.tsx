"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { DemoScheduleModal } from "./DemoScheduleModal";

export function ContactCTA() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how AI automation can help you grow faster and work smarter.
          </p>

          {/* CTA Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 px-8 py-6"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Your Free Demo
              </span>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.a
              href="tel:+12409071427"
              className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Call Us</div>
                <div className="text-white">(240) 907-1427</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@apexaflow.com"
              className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Email Us</div>
                <div className="text-white">contact@apexaflow.com</div>
              </div>
            </motion.a>

            <motion.div
              className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Location</div>
                <div className="text-white">Remote & On-site</div>
              </div>
            </motion.div>
          </div>
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