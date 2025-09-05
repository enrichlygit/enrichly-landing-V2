import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Search, TrendingUp, Users } from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      icon: Search,
      title: "Search Funds",
      description: "Find founder-led <$100M targets with verified contacts.",
      features: [
        "Target list building & screening",
        "Founder contact validation",
        "Industry-specific personalization",
        "Verified email delivery"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investors",
      description: "Track bolt-ons and portfolio fits with clean enrichment.",
      features: [
        "Add-on target identification",
        "Portfolio company mapping",
        "Executive contact validation",
        "Data enrichment for deal sourcing"
      ]
    },
    {
      icon: Users,
      title: "M&A Advisors",
      description: "Streamline conference and deal outreach.",
      features: [
        "Attendee & exhibitor enrichment",
        "Contact validation & cleanup",
        "Warm introductions via LinkedIn/email",
        "Post-conference list follow-up"
      ]
    }
  ];

  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-enrichly-navy">
            Built for M&A professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for every stage of the deal lifecycle
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:border-enrichly-teal/30 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-enrichly-navy/5 group-hover:bg-enrichly-teal/10 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <useCase.icon className="w-7 h-7 text-enrichly-navy group-hover:text-enrichly-teal transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-enrichly-navy">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-enrichly-teal"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-enrichly-navy text-enrichly-navy hover:bg-enrichly-navy hover:text-white group-hover:border-enrichly-teal group-hover:text-enrichly-teal group-hover:hover:bg-enrichly-teal group-hover:hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}