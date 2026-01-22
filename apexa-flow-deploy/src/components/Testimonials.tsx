import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

// Placeholder image - replace with your actual trust badge in production
const trustIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%234f46e5'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3E✓%3C/text%3E%3C/svg%3E";

export function Testimonials() {
  const testimonials = [
    {
      name: "Emily R.",
      location: "Phoenix, AZ",
      text: "Apexa Flow has completely transformed our communication system. The time we save on administrative tasks has allowed us to focus more on our students and their needs.",
      rating: 5,
    },
    {
      name: "Michael T.",
      location: "Tempe, AZ",
      text: "The process was quick and efficient. In just two weeks, we had our automation set up and it's been a game-changer for our staff and students alike. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sara K.",
      location: "Chandler, AZ",
      text: "Working with Apexa Flow was a breath of fresh air. Their expertise in automation has immensely boosted our productivity and happiness within the team.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-[#4f46e5]/10 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-[#00d9ff]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={trustIcon} 
                alt="Trust Badge" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(79, 70, 229, 0.8)) drop-shadow(0 0 80px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 120px rgba(79, 70, 229, 0.4))'
                }}
              />
              {/* Enhanced glow effect behind icon */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] blur-3xl -z-10 scale-150 opacity-70" />
            </motion.div>
            <h2 className="text-4xl lg:text-5xl">
              Trusted by businesses like yours
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real results from real customers who transformed their operations with AI automation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#4f46e5]/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-12 h-12 text-[#00d9ff]" />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#00d9ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {["E", "M", "S"].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#00d9ff] flex items-center justify-center border-2 border-[#0a0a0f] text-xs font-semibold"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-white/70 text-sm">
              Join 50+ businesses already automating with Apex
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}