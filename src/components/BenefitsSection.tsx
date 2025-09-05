import { Card, CardContent } from "./ui/card";
import { Clock, Users, TrendingUp } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours Weekly",
      description: "Cut down manual research and validation.",
      metric: "20+ hrs",
      metricLabel: "saved per week"
    },
    {
      icon: Users,
      title: "Reach Decision-Makers",
      description: "Verified founder & exec contacts every time.",
      metric: "100%",
      metricLabel: "verified contacts"
    },
    {
      icon: TrendingUp,
      title: "Accelerate Deal Flow",
      description: "Go from research to conversations in days, not weeks.",
      metric: "7 days",
      metricLabel: "max turnaround"
    }
  ];

  return (
    <section id="benefits" className="bg-white px-4 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-enrichly-navy">
            Focus on deals, not data cleanup
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients save hundreds of hours while closing more deals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:border-enrichly-teal/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-enrichly-navy/5 rounded-xl flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-enrichly-navy" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-enrichly-teal">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {benefit.metricLabel}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-enrichly-navy">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}