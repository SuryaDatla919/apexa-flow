import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  body: string;
  implementation: string;
  idealFor: string;
  cta: string;
  delay?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  tagline,
  body,
  implementation,
  idealFor,
  cta,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00d9ff]/0 to-[#6366f1]/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25" />
      
      {/* Card */}
      <div className="relative h-full rounded-xl border border-[#00d9ff]/20 bg-[#0a0e27]/70 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-[#00d9ff]/50 group-hover:bg-[#0a0e27]/90">
        {/* Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: delay + 0.2 }}
          className="mb-6"
        >
          <Icon className="h-10 w-10 text-[#00d9ff] transition-colors duration-300 group-hover:text-[#00d9ff]" strokeWidth={2} />
        </motion.div>

        {/* Title */}
        <h3 className="mb-2">{title}</h3>

        {/* Tagline */}
        <p className="mb-4 text-[13px] text-[#a1a5b0]">{tagline}</p>

        {/* Body text */}
        <p className="mb-5 text-[15px] leading-relaxed text-[#c5c7cf]">{body}</p>

        {/* Implementation & Ideal For */}
        <div className="mb-6 space-y-1 text-[12px] text-[#8b92a9]">
          <p>Implementation: {implementation}</p>
          <p>Ideal for: {idealFor}</p>
        </div>

        {/* CTA Link */}
        <div className="overflow-hidden">
          <motion.a
            href="#"
            className="group/link inline-flex items-center gap-1 text-[13px] text-[#00d9ff] transition-all duration-200 hover:text-[#00d9ff]/80"
            onClick={(e) => e.preventDefault()}
          >
            <span className="relative">
              <span className="relative z-10">→ {cta}</span>
              <motion.span
                className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#00d9ff] transition-all duration-200 group-hover/link:w-full"
              />
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
