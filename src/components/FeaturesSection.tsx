import { Card, CardContent } from "./ui/card";
import { Upload, Shield, Zap, ArrowRight } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: "Automated Enrichment",
      description: "Upload any list—we handle the cleanup and enrichment."
    },
    {
      icon: Shield,
      title: "Verified Matching",
      description: "Direct LinkedIn + email validation, no wasted sends."
    },
    {
      icon: Zap,
      title: "AI Personalization",
      description: "Insight-driven messages written for each prospect."
    },
    {
      icon: ArrowRight,
      title: "Outreach-Ready Sequences",
      description: "Lists formatted to drop directly into your workflows and CRM."
    }
  ];

  return (
    <section id="features" className="bg-gray-50 px-4 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-enrichly-navy">
            Everything you need to accelerate outreach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From raw data to ready-to-send sequences in days, not weeks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-enrichly-teal/10 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-enrichly-teal" />
                </div>
                <h3 className="text-xl font-semibold text-enrichly-navy">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}