import { Card, CardContent } from "./ui/card";
import { Quote, ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProofSection() {
  const clients = [
    "Pineway Capital",
    "Search Party Capital",
    "Palmetto & Pine",
    "Balufon Capital",
  ];

  return (
    <section
      id="proof"
      className="bg-gray-50 px-4 py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-enrichly-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-enrichly-navy rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-enrichly-teal/10 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-enrichly-teal" />
            <span className="text-enrichly-teal font-medium text-sm">
              Proven Results
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-enrichly-navy">
            Built for innovators, trusted by searchers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading search funds and M&amp;A professionals choose Enrichly to
            accelerate their deal flow and close more transactions.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-enrichly-navy/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-enrichly-navy/20 transition-colors">
                  <span className="text-enrichly-navy font-semibold text-lg">
                    {client
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
                <div className="font-semibold text-gray-700 group-hover:text-enrichly-navy transition-colors">
                  {client}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-enrichly-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-enrichly-teal" />
            </div>
            <div className="text-3xl font-semibold text-enrichly-navy mb-2">
              2000+
            </div>
            <div className="text-gray-600">Companies Enriched</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-enrichly-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-enrichly-teal" />
            </div>
            <div className="text-3xl font-semibold text-enrichly-navy mb-2">
              &lt;3%
            </div>
            <div className="text-gray-600">Email Bounce Rate</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-enrichly-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-enrichly-teal" />
            </div>
            <div className="text-3xl font-semibold text-enrichly-navy mb-2">
              3x
            </div>
            <div className="text-gray-600">Faster Deal Discovery</div>
          </div>
        </div>

        {/* Before/After Visual */}
        <div className="relative mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-enrichly-navy mb-2">
              See the transformation
            </h3>
            <p className="text-gray-600">
              From incomplete data to a fully automated outreach engine
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Arrow between sections */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-full p-4 shadow-lg border-4 border-enrichly-teal/20">
                <ArrowRight className="w-6 h-6 text-enrichly-teal" />
              </div>
            </div>

            {/* Before Card */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Before: Raw CSV Input
                  </h3>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMHNwcmVhZHNoZWV0JTIwZGF0YSUyMHJvd3N8ZW58MXx8fHwxNzU2OTIzNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Messy spreadsheet data"
                  className="w-full h-48 object-cover rounded"
                />
              </CardContent>
            </Card>

            {/* After Card */}
            <Card className="bg-white border-2 border-enrichly-teal/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-enrichly-teal rounded-full"></div>
                  <h3 className="text-lg font-semibold text-enrichly-navy">
                    After: Enriched Output
                  </h3>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRhc2hib2FyZCUyMGludGVyZmFjZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTY5MjM0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clean outreach dashboard"
                  className="w-full h-48 object-cover rounded"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial */}
        <Card className="bg-gradient-to-br from-enrichly-navy to-enrichly-navy/90 border-0 shadow-2xl max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-enrichly-teal/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-enrichly-teal/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative">
              <Quote className="w-12 h-12 text-enrichly-teal mx-auto mb-6" />
              <blockquote className="text-xl lg:text-2xl text-white/90 italic mb-8 leading-relaxed">
                "I worked with Oliver for almost two years, and he was an
                essential part of my search. I recommend using Enrichly rather
                than interns to support the mechanics of outreach. Enrichly's
                work was fast and high quality, and they were quick to respond
                to feedback. I'd recommend them to anyone who's doing cold
                outreach."
              </blockquote>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-white text-lg">
                    Chris Tyler, Principal
                  </div>
                  <div className="text-enrichly-teal font-medium">
                    Search Party Capital
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/cstyler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200"
                >
                  <ImageWithFallback
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
