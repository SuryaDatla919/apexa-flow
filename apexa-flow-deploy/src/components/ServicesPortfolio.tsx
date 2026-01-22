import { motion } from 'motion/react';
import { ServiceCard } from './ServiceCard';
import { 
  Zap, 
  MessageSquare, 
  Filter, 
  Target, 
  Globe, 
  Cog, 
  Ticket, 
  MessageCircle,
  Trophy,
  Bell
} from 'lucide-react';

export function ServicesPortfolio() {
  const services = [
    {
      icon: Zap,
      title: "Speed-to-Lead System",
      tagline: "Respond instantly, capture intent",
      body: "Never miss a lead again. Our AI responds to inquiries in under 60 seconds, qualifying prospects and scheduling appointments automatically.",
      implementation: "2-4 days",
      idealFor: "Service businesses, contractors, B2B sales",
      cta: "See process"
    },
    {
      icon: MessageSquare,
      title: "AI Customer Service Agent",
      tagline: "24/7 intelligent support that books, answers FAQs, and hands off when needed",
      body: "Deploy a custom AI agent trained on your business that handles customer inquiries, answers questions, and seamlessly escalates to human team members. Available round-the-clock to improve satisfaction and reduce support overhead.",
      implementation: "3-5 days",
      idealFor: "E-commerce, SaaS, customer support teams",
      cta: "See process"
    },
    {
      icon: Filter,
      title: "CRM Automations & Lead Qualification",
      tagline: "Qualified leads routed to your closers automatically",
      body: "Intelligent lead scoring and routing ensures your sales team focuses only on high-value prospects ready to buy. Zero manual work. Maximum conversion.",
      implementation: "3-7 days",
      idealFor: "B2B companies, sales teams, agencies",
      cta: "See process"
    },
    {
      icon: Target,
      title: "Automated Lead Scraping",
      tagline: "Daily new prospects fed straight to your CRM",
      body: "Our AI finds and qualifies potential customers based on your ideal customer profile, delivering fresh leads daily. Your sales team wakes up to qualified prospects ready to close.",
      implementation: "4-7 days",
      idealFor: "Outbound sales, lead generation agencies",
      cta: "See process"
    },
    {
      icon: Globe,
      title: "Custom Website Creation",
      tagline: "Modern, conversion-first sites with embedded AI",
      body: "Beautiful, fast-loading websites designed to convert visitors into customers, with AI chat and automation built-in from day one. Not a template. Not off-the-shelf. Fully custom to your business.",
      implementation: "5-10 days",
      idealFor: "Growing businesses, rebrands, new ventures",
      cta: "See process"
    },
    {
      icon: Cog,
      title: "AI Workflow Automations",
      tagline: "Automate invoices, follow-ups, reporting",
      body: "Connect your tools and automate repetitive workflows. From invoicing to reporting, from customer handoffs to internal notifications. We turn busywork into brain work.",
      implementation: "3-7 days",
      idealFor: "Operations teams, service businesses",
      cta: "See process"
    },
    {
      icon: Ticket,
      title: "Automated Support Ticket System",
      tagline: "Support that routes, assigns, and resolves automatically",
      body: "Transform chaotic support channels into an organized, prioritized queue. Tickets route automatically to the right team member, customers get instant acknowledgment, leadership sees real-time analytics. One dashboard. Total control.",
      implementation: "3-5 days",
      idealFor: "Education, SaaS, customer-facing businesses",
      cta: "See process"
    },
    {
      icon: MessageCircle,
      title: "Student/Parent Feedback & AI Insights",
      tagline: "Feedback collected, analyzed, actioned automatically",
      body: "Gather feedback from students, parents, or customers seamlessly. Our AI instantly summarizes trends, highlights urgent concerns, and surfaces actionable insights for your leadership team. Understand your community better.",
      implementation: "3-5 days",
      idealFor: "Education, nonprofits, community organizations",
      cta: "See process"
    },
    {
      icon: Trophy,
      title: "Course Completion & Certificate Automation",
      tagline: "Auto-issue credentials when students complete milestones",
      body: "Courses end, certificates issue instantly. No manual processing. Students get professional credentials they can share immediately. Tracks completion, issues certificates, updates parent records—all automatic.",
      implementation: "3-7 days",
      idealFor: "Education platforms, training providers, academies",
      cta: "See process"
    },
    {
      icon: Bell,
      title: "Real-Time Parent/Customer Notifications",
      tagline: "Critical updates reach people in seconds",
      body: "Attendance alerts. Grade updates. Event reminders. Emergency notifications. Segmented by audience, delivered instantly via their preferred channel (email, SMS, app push). Tracks delivery, engagement, and read receipts.",
      implementation: "2-3 days",
      idealFor: "Schools, nonprofits, events, customer-facing businesses",
      cta: "See process"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1235] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-12 lg:pb-24 lg:pt-32">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#6366f1]/20 blur-[120px]" />
          <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-[#00d9ff]/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent">
              Enterprise-Grade Automation for Growing Businesses
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-[18px] text-[#c5c7cf]">
              VIP automation suites built for impact. Custom, fast, results-first.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#6366f1] px-8 py-4 text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9ff]/30"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d9ff]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Ready to automate your business?</h2>
            <p className="mb-8 text-[18px] text-[#c5c7cf]">
              Limited VIP spots available. Book a consultation to explore custom automation solutions.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-lg border border-[#00d9ff]/30 bg-[#0a0e27]/50 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#00d9ff]/60 hover:bg-[#0a0e27]/70 hover:shadow-lg hover:shadow-[#00d9ff]/20"
              onClick={(e) => e.preventDefault()}
            >
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent">
                Schedule a Consultation
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00d9ff]/10 px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-2 bg-gradient-to-r from-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent">
                Apexa Flow
              </p>
              <p className="text-[14px] text-[#8b92a9]">
                Enterprise-grade automation for growing businesses
              </p>
            </div>
            <div className="flex gap-6 text-[14px] text-[#8b92a9]">
              <a href="#" className="transition-colors hover:text-[#00d9ff]" onClick={(e) => e.preventDefault()}>
                Questions?
              </a>
              <a href="#" className="transition-colors hover:text-[#00d9ff]" onClick={(e) => e.preventDefault()}>
                FAQ
              </a>
              <a href="#" className="transition-colors hover:text-[#00d9ff]" onClick={(e) => e.preventDefault()}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}