"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Zap, Bot } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DemoScheduleModal } from "./DemoScheduleModal";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [typingText, setTypingText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const chatMessages = [
    "Hello! 👋 Let's find the perfect match for you — what are you looking for today?",
    "AI responding in 2s...",
    "Meeting scheduled ✓",
  ];

  useEffect(() => {
    const currentMessage = chatMessages[messageIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentMessage.length) {
        setTypingText(currentMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % chatMessages.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [messageIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4f46e5] rounded-full filter blur-[120px] opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#7c3aed] rounded-full filter blur-[120px] opacity-20" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#14b8a6] rounded-full filter blur-[120px] opacity-10" />
        </motion.div>

        {/* Flow Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,200 Q400,100 800,200 T1600,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M0,400 Q400,500 800,400 T1600,400"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="50%" stopColor="#4f46e5" stopOpacity="1" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="container mx-auto px-4 lg:px-6 relative z-20"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6 text-white relative z-10">
                Stop losing customers automate your growth with swift response
              </h1>
              {/* Glow effect under the headline */}
              <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] blur-3xl opacity-30 -z-10" />
              <p className="text-xl text-white/70 max-w-2xl">
                Turn leads into bookings, reduce manual work, and launch AI-enabled websites in days — not months.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group px-8 py-6"
              >
                <span className="flex items-center gap-2">
                  Schedule a Free Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5"
                asChild
              >
                <a href="#services">See Live Examples</a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                <span className="text-white/70">Response in {"<"}60s</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                <span className="text-white/70">Live in 3-7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                <span className="text-white/70">24/7 AI support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Animated Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 shadow-2xl">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Lead Dashboard</div>
                      <div className="text-white">Real-time Automation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
                    <span className="text-sm text-white/60">Live</span>
                  </div>
                </div>

                {/* Chat Simulation */}
                <div className="bg-black/30 rounded-xl p-4 space-y-3 min-h-[200px]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ec4899] flex-shrink-0 bg-[rgba(11,134,22,0)]" />
                    <div className="flex-1">
                      <div className="bg-white/10 rounded-lg p-3 inline-block">
                        <p className="text-sm text-white">Hi, I'm interested in your services</p>
                      </div>
                      <span className="text-xs text-white/40 mt-1 block">2:34 PM</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex-shrink-0" />
                    <div className="flex-1 text-right">
                      <div className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-lg p-3 inline-block">
                        <p className="text-sm text-white font-mono">
                          {typingText}
                          <span className="inline-block w-1 h-4 bg-white ml-1 animate-pulse" />
                        </p>
                      </div>
                      <span className="text-xs text-white/40 mt-1 block">AI Agent • Now</span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="bg-gradient-to-br from-[#4f46e5]/20 to-transparent border border-[#4f46e5]/30 rounded-lg p-3">
                    <div className="text-2xl mb-1">47</div>
                    <div className="text-xs text-white/60">Leads Today</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#14b8a6]/20 to-transparent border border-[#14b8a6]/30 rounded-lg p-3">
                    <div className="text-2xl mb-1">12s</div>
                    <div className="text-xs text-white/60">Avg Response</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#f59e0b]/20 to-transparent border border-[#f59e0b]/30 rounded-lg p-3">
                    <div className="text-2xl mb-1">93%</div>
                    <div className="text-xs text-white/60">Conversion</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Demo Schedule Modal */}
      <DemoScheduleModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
}