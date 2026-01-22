"use client";

import { motion } from "motion/react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function DataVisualizations() {
  const conversionData = [
    { name: "Before", value: 2, color: "#ffffff40" },
    { name: "After Apexa Flow", value: 5, color: "#4f46e5" },
  ];

  const kpiData = [
    {
      icon: Users,
      label: "Leads/day",
      value: "47",
      change: "+215%",
      tooltip: "Average daily lead capture with AI automation",
      color: "#4f46e5",
    },
    {
      icon: Clock,
      label: "Time-to-first-response",
      value: "12s",
      change: "-95%",
      tooltip: "Average time from lead submission to first AI response",
      color: "#14b8a6",
    },
    {
      icon: TrendingUp,
      label: "Hours saved/week",
      value: "18h",
      change: "+100%",
      tooltip: "Manual hours saved through automation",
      color: "#f59e0b",
    },
    {
      icon: DollarSign,
      label: "Revenue recovery",
      value: "$12K",
      change: "+40%",
      tooltip: "Estimated monthly revenue from previously lost leads",
      color: "#ec4899",
    },
  ];

  const leadJourneySteps = [
    { title: "Capture", description: "Lead submits form", problem: "Slow response → Lost $X/month" },
    { title: "AI Qualification", description: "Instant response & qualification", problem: null },
    { title: "Human Handoff", description: "Routed to right team member", problem: "Poor routing → Wasted time" },
    { title: "Sale", description: "Converted customer", problem: null },
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
          <h2 className="text-4xl lg:text-5xl mb-4">The numbers speak for themselves</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real data from companies that stopped waiting and started automating
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Conversion Uplift Chart */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-2">Average Conversion Uplift</h3>
            <p className="text-white/60 mb-8">Typical clients see 2-3× improvement in lead-to-customer conversion</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" tickFormatter={(value) => `${value}%`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(20, 20, 30, 0.95)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="value" fill="#4f46e5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-white/40 mt-4 text-center">Example data based on typical client results. Individual results may vary.</p>
          </motion.div>

          {/* Lead Journey Flowchart */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-2">Lead Journey</h3>
            <p className="text-white/60 mb-8">From capture to conversion — automated and optimized</p>
            
            <div className="relative">
              {/* Desktop Flow */}
              <div className="hidden lg:flex items-center justify-between gap-4">
                {leadJourneySteps.map((step, index) => (
                  <div key={step.title} className="flex items-center flex-1">
                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-6 rounded-xl bg-gradient-to-br from-[#4f46e5]/20 to-transparent border border-[#4f46e5]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                        <div className="text-sm text-[#14b8a6] mb-2">Step {index + 1}</div>
                        <div className="text-lg mb-1">{step.title}</div>
                        <div className="text-sm text-white/60">{step.description}</div>
                        {step.problem && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <div className="text-xs text-red-400/80">❌ {step.problem}</div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    {index < leadJourneySteps.length - 1 && (
                      <motion.div
                        className="mx-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      >
                        <ArrowRight className="w-6 h-6 text-[#14b8a6]" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Flow */}
              <div className="lg:hidden space-y-4">
                {leadJourneySteps.map((step, index) => (
                  <div key={step.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-6 rounded-xl bg-gradient-to-br from-[#4f46e5]/20 to-transparent border border-[#4f46e5]/30">
                        <div className="text-sm text-[#14b8a6] mb-2">Step {index + 1}</div>
                        <div className="text-lg mb-1">{step.title}</div>
                        <div className="text-sm text-white/60">{step.description}</div>
                        {step.problem && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <div className="text-xs text-red-400/80">❌ {step.problem}</div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    {index < leadJourneySteps.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowRight className="w-6 h-6 text-[#14b8a6] rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KPI Tiles */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {kpiData.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <TooltipProvider key={kpi.label}>
                  <TooltipUI>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-help"
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <Icon className="w-6 h-6" style={{ color: kpi.color }} />
                          <div
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              background: `${kpi.color}20`,
                              color: kpi.color,
                            }}
                          >
                            {kpi.change}
                          </div>
                        </div>
                        <div className="text-3xl mb-1">{kpi.value}</div>
                        <div className="text-sm text-white/60">{kpi.label}</div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{kpi.tooltip}</p>
                    </TooltipContent>
                  </TooltipUI>
                </TooltipProvider>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}