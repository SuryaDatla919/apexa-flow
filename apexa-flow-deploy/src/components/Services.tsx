"use client";

import { motion } from "motion/react";
import { 
  Zap, 
  MessageSquare, 
  Target, 
  Users, 
  Globe, 
  Workflow,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Placeholder images - replace with your actual images in production
const revenueImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%230f0f1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3ERevenue Analytics%3C/text%3E%3C/svg%3E";
const growthIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234f46e5'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📈%3C/text%3E%3C/svg%3E";

export function Services() {
  const services = [
    {
      icon: Zap,
      title: "Speed-to-Lead System",
      benefit: "Respond instantly, capture intent",
      description: "Never miss a lead again. Our AI responds to inquiries in under 60 seconds, qualifying prospects and scheduling appointments automatically.",
      process: [
        "Lead inquiry triggers instant AI response",
        "AI qualifies prospect and captures key information",
        "Appointment automatically scheduled in your calendar",
        "Sales team gets real-time notification with lead details",
      ],
      implementation: "2-4 days",
      idealFor: "Service businesses, contractors, B2B sales",
      gradient: "from-[#4f46e5] to-[#7c3aed]",
    },
    {
      icon: MessageSquare,
      title: "AI Customer Service Agent",
      benefit: "24/7 intelligent support that books, answers FAQs, and hands off when needed",
      description: "Deploy a custom AI agent trained on your business that handles customer inquiries, answers questions, and seamlessly escalates to human team members. Available round-the-clock to improve satisfaction and reduce support overhead.",
      process: [
        "Train AI on your business knowledge and FAQs",
        "Deploy chat widget on your website",
        "AI handles common questions instantly",
        "Seamless handoff to human support when needed",
      ],
      implementation: "3-5 days",
      idealFor: "E-commerce, SaaS, customer support teams",
      gradient: "from-[#7c3aed] to-[#14b8a6]",
    },
    {
      icon: Target,
      title: "Automated Lead Scraping",
      benefit: "Daily new prospects fed straight to your CRM",
      description: "Our AI finds and qualifies potential customers based on your ideal customer profile, delivering fresh leads daily. Your sales team wakes up to qualified prospects ready to close.",
      process: [
        "Define target customer profile and search criteria",
        "AI scrapes and validates prospects daily",
        "Leads enriched with contact data and company info",
        "Automatically added to CRM with lead score",
      ],
      implementation: "4-7 days",
      idealFor: "Outbound sales, lead generation agencies",
      gradient: "from-[#f59e0b] to-[#ec4899]",
    },
    {
      icon: Globe,
      title: "Custom Website Creation",
      benefit: "Modern, conversion-first sites with embedded AI",
      description: "Beautiful, fast-loading websites designed to convert visitors into customers, with AI chat and automation built-in from day one. Not a template. Not off-the-shelf. Fully custom to your business.",
      process: [
        "Discovery session to understand your brand and goals",
        "Custom design and development with AI integration",
        "Mobile-responsive, fast, SEO-optimized",
        "Launch with embedded AI chat and lead capture",
      ],
      implementation: "5-10 days",
      idealFor: "Growing businesses, rebrands, new ventures",
      gradient: "from-[#4f46e5] to-[#00d9ff]",
    },
    {
      icon: Workflow,
      title: "AI Workflow Automations",
      benefit: "Automate invoices, follow-ups, reporting",
      description: "Connect your tools and automate repetitive workflows. From invoicing to reporting, from customer handoffs to internal notifications. We turn busywork into brain work.",
      process: [
        "Map your current workflows and pain points",
        "Design automation sequences across your tools",
        "Build and test automated workflows",
        "Monitor and optimize for maximum efficiency",
      ],
      implementation: "3-7 days",
      idealFor: "Operations teams, service businesses",
      gradient: "from-[#00d9ff] to-[#7c3aed]",
    },
    {
      icon: ArrowRight,
      title: "Automated Support Ticket System",
      benefit: "Support that routes, assigns, and resolves automatically",
      description: "Transform chaotic support channels into an organized, prioritized queue. Tickets route automatically to the right team member, customers get instant acknowledgment, leadership sees real-time analytics. One dashboard. Total control.",
      process: [
        "Capture requests from all channels in one place",
        "Automatically categorize and route to the right team",
        "Send instant acknowledgments to requesters",
        "Track resolution times and performance metrics",
      ],
      implementation: "3-5 days",
      idealFor: "Education, SaaS, customer-facing businesses",
      gradient: "from-[#14b8a6] to-[#f59e0b]",
    },
    {
      icon: CheckCircle2,
      title: "Student/Parent Feedback & AI Insights",
      benefit: "Feedback collected, analyzed, actioned automatically",
      description: "Gather feedback from students, parents, or customers seamlessly. Our AI instantly summarizes trends, highlights urgent concerns, and surfaces actionable insights for your leadership team. Understand your community better.",
      process: [
        "Deploy automated feedback collection forms",
        "AI analyzes responses for themes and sentiment",
        "Generate executive summaries and trend reports",
        "Flag urgent concerns for immediate action",
      ],
      implementation: "3-5 days",
      idealFor: "Education, nonprofits, community organizations",
      gradient: "from-[#7c3aed] to-[#ec4899]",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl lg:text-5xl">Services that scale revenue</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={growthIcon} 
                alt="Revenue Growth" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(79, 70, 229, 0.8)) drop-shadow(0 0 80px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 120px rgba(79, 70, 229, 0.4))'
                }}
              />
              {/* Enhanced glow effect behind icon */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] blur-3xl -z-10 scale-150 opacity-70" />
            </motion.div>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Turn leads into booked jobs, and manual hours into growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{service.title}</h3>
                      <p className="text-sm text-white/70">{service.benefit}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-6">{service.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="text-xs text-white/50 mb-1">Implementation</div>
                      <div className="text-sm text-[#14b8a6]">{service.implementation}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-1">Ideal for</div>
                      <div className="text-sm text-white/80">{service.idealFor}</div>
                    </div>
                  </div>

                  {/* Expandable Process */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="process" className="border-white/10">
                      <AccordionTrigger className="text-white/90 hover:text-white text-sm">
                        See process
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                              <span
                                className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-xs text-white`}
                              >
                                {idx + 1}
                              </span>
                              <span className="pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}