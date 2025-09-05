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
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-enrichly-navy/10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
                Outreach-as-a-Service for search funds & M&A.
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We turn raw lists into verified contacts,
                insights, and ready-to-send outreach
                sequences—in under 7 days.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-enrichly-navy hover:bg-enrichly-navy/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Book a Call
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-enrichly-teal text-enrichly-navy hover:bg-enrichly-teal/10 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Claim 15 Free Leads
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Before/After Transformation */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left: Messy Spreadsheet */}
              <div className="space-y-3">
                <div className="relative bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMHNwcmVhZHNoZWV0JTIwZGF0YSUyMHJvd3N8ZW58MXx8fHwxNzU2OTIzNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Messy spreadsheet data"
                      className="w-full h-40 object-cover rounded opacity-60"
                    />
                    {/* Overlay with sample messy data */}
                    <div className="absolute inset-0 bg-white/90 p-3 rounded text-xs">
                      <div className="space-y-1.5">
                        <div className="grid grid-cols-2 gap-1 text-gray-500">
                          <div className="truncate">
                            Company A Inc.
                          </div>
                          <div className="text-red-500">
                            ❌ No Email
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-gray-500">
                          <div className="truncate">
                            B Corp LLC
                          </div>
                          <div className="text-red-500">
                            ❌ Invalid
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-gray-500">
                          <div className="truncate">
                            Random Co.
                          </div>
                          <div className="text-red-500">
                            ❌ Bounce
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-gray-500">
                          <div className="truncate">
                            XYZ Business
                          </div>
                          <div className="text-red-500">
                            ❌ Missing
                          </div>
                        </div>
                        <div className="text-center text-red-600 mt-2 font-medium">
                          70% Unusable Data
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-red-600 font-medium text-center">
                  Raw Spreadsheet
                </p>
              </div>

              {/* Right: Clean Dashboard */}
              <div className="space-y-3">
                <div className="relative bg-enrichly-teal/5 rounded-lg p-4 border-2 border-enrichly-teal/20">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRhc2hib2FyZCUyMGludGVyZmFjZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTY5MjM0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Clean outreach dashboard"
                      className="w-full h-40 object-cover rounded opacity-20"
                    />
                    {/* Overlay with enriched data */}
                    <div className="absolute inset-0 bg-white/95 p-3 rounded text-xs">
                      <div className="space-y-1.5">
                        <div className="grid grid-cols-2 gap-1 items-center">
                          <div className="truncate text-enrichly-navy">
                            TechCorp Inc.
                          </div>
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                        <div className="text-gray-600 text-xs">
                          john@techcorp.com
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 text-xs">
                          <ExternalLink className="w-2 h-2" />
                          <span>LinkedIn Profile</span>
                        </div>
                        <div className="text-xs text-gray-700 leading-tight">
                          "Hi John, noticed TechCorp's recent
                          Series A..."
                        </div>
                        <Button
                          size="sm"
                          className="w-full mt-2 bg-enrichly-teal hover:bg-enrichly-teal/90 text-xs h-7"
                        >
                          Export to Reply.io
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-enrichly-navy font-medium text-center">
                  Outreach Dashboard
                </p>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>98% Email Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>LinkedIn Profiles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Custom Personalization</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>CRM Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}