"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How secure is my data?",
      answer:
        "We take data security seriously. All data is encrypted in transit and at rest. We're GDPR-compliant and follow industry best practices for data protection. We never sell or share your customer data with third parties. You can review our full privacy policy and security documentation.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with most major CRMs (HubSpot, Salesforce, Pipedrive, etc.), communication platforms (Twilio, SendGrid), calendaring tools (Calendly, Google Calendar), and more. If you use a tool not on our standard list, we can often build custom integrations as part of the onboarding process.",
    },
    {
      question: "How long does it take to launch?",
      answer:
        "Most implementations take 3-7 days from kickoff to launch, depending on the complexity of your needs. Simple Speed-to-Lead systems can go live in as little as 2-3 days, while comprehensive custom websites with full AI automation may take 7-10 days. We'll give you an exact timeline during your strategy call.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "All plans include email support with response times under 24 hours. Growth and Enterprise plans include priority support with faster response times, dedicated onboarding, and regular optimization calls. Enterprise clients get a dedicated account manager and 24/7 support options.",
    },
    {
      question: "Can I customize the AI responses?",
      answer:
        "Absolutely! During onboarding, we'll train your AI agent on your business, tone of voice, FAQs, and specific workflows. You'll have full control over how the AI communicates with your customers, and we provide tools to refine responses over time based on real interactions.",
    },
    {
      question: "What if I need to cancel?",
      answer:
        "We offer flexible month-to-month contracts with no long-term commitments on our Starter and Growth plans. Enterprise plans typically have annual agreements but include dedicated support and custom terms. You own all your data and can export it at any time.",
    },
    {
      question: "Do you replace my existing website?",
      answer:
        "Not necessarily. We can either build you a new website from scratch, add AI features to your existing site, or create landing pages that work alongside your current web presence. During your strategy call, we'll recommend the best approach for your specific situation.",
    },
    {
      question: "How do you handle privacy compliance?",
      answer:
        "We're built with privacy in mind from day one. Our systems are GDPR, CCPA, and SOC 2 compliant. We provide tools for consent management, data deletion requests, and full audit trails. We'll work with you to ensure compliance with any industry-specific regulations you need to follow.",
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
          <h2 className="text-4xl lg:text-5xl mb-4">Questions? We've got answers.</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to know about getting started with Apexa Flow
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <AccordionTrigger className="text-left text-white hover:text-white/90">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/70">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-[#4f46e5] hover:text-[#7c3aed] transition-colors"
            >
              Get in touch with our team →
            </a>
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}