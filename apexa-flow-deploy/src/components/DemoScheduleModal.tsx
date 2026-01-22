"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Mail, User, Building, Phone, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface DemoScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoScheduleModal({ isOpen, onClose }: DemoScheduleModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Demo Request from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Preferred Date: ${formData.preferredDate}

Message:
${formData.message || 'No additional message'}
    `.trim());

    window.location.href = `mailto:contact@apexaflow.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client! 📧", {
      description: "Please send the email to complete your demo request.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      preferredDate: "",
      message: "",
    });

    // Close modal after brief delay
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] rounded-2xl border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] p-6 rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl mb-2 text-white">Schedule Your Free Demo</h2>
                    <p className="text-white/80 text-sm">
                      See how Apexa Flow can transform your business in just 30 minutes
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/70 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#4f46e5] focus:ring-[#4f46e5]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/70 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Work Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#4f46e5] focus:ring-[#4f46e5]"
                  />
                </div>

                {/* Company & Phone - Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm text-white/70 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Company *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#4f46e5] focus:ring-[#4f46e5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-white/70 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#4f46e5] focus:ring-[#4f46e5]"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label htmlFor="preferredDate" className="text-sm text-white/70 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date & Time *
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="datetime-local"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 16)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#4f46e5] focus:ring-[#4f46e5]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/70 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Tell us about your needs (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What challenges are you facing? What would you like to automate?"
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#4f46e5] focus:ring-[#4f46e5] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 py-6 text-lg"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule Demo
                    </span>
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-white/40 text-center pt-2">
                  By submitting this form, you agree to receive communications from Apexa Flow.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}