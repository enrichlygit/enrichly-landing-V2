import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-white via-enrichly-teal/5 to-enrichly-navy/10 px-4 py-20 lg:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-enrichly-teal/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-enrichly-navy/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl lg:text-6xl font-semibold text-enrichly-navy leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Outreach-as-a-Service for search funds &amp; M&amp;A.
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We turn raw lists into verified contacts, insights, and
                ready-to-send outreach sequences—in under 7 days.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-enrichly-navy hover:bg-enrichly-navy/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
                  asChild
                >
                  <a
                    href="https://calendly.com/oliver-enrichly/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-enrichly-teal text-enrichly-navy hover:bg-enrichly-teal/10 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a
                    href="https://your-sample-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claim 15 Free Leads
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side content unchanged */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* ...existing right-side code stays the same */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
