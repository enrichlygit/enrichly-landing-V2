import { Target, Search, MessageSquare, BarChart3 } from "lucide-react";

export function ProcessSection() {
  const processSteps = [
    {
      title: "Target Identification",
      icon: Target,
      description: "Strategic prospect research and qualification",
      steps: [
        "Market mapping & analysis",
        "Ideal Customer Profile (ICP) refinement",
        "Decision-maker identification",
        "Contact verification & enrichment"
      ]
    },
    {
      title: "Research & Personalization",
      icon: Search,
      description: "Deep-dive intelligence gathering",
      steps: [
        "Company background research",
        "Recent news & trigger events",
        "Personal background analysis",
        "Custom messaging strategy"
      ]
    },
    {
      title: "Multi-Channel Outreach",
      icon: MessageSquare,
      description: "Coordinated engagement campaigns",
      steps: [
        "Email sequence deployment",
        "LinkedIn connection requests",
        "Follow-up automation",
        "Response tracking & management"
      ]
    },
    {
      title: "Analytics & Optimization",
      icon: BarChart3,
      description: "Continuous performance improvement",
      steps: [
        "Real-time performance monitoring",
        "A/B testing & optimization",
        "Response rate analysis",
        "Campaign refinement"
      ]
    }
  ];

  return (
    <section id="process" className="bg-enrichly-navy px-4 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-enrichly-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-enrichly-teal/3 rounded-full blur-3xl -translate-x-32"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-enrichly-teal/10 px-4 py-2 rounded-full">
            <Target className="w-4 h-4 text-enrichly-teal" />
            <span className="text-enrichly-teal font-medium text-sm">Proven Methodology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white">
            Our 4-Step Success Process
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A systematic approach refined through 2000+ successful campaigns, designed specifically for search funds and M&A operators.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, stepIndex) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={stepIndex}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-enrichly-teal/30 transition-all duration-300 group relative"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-enrichly-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-enrichly-teal font-semibold text-sm">{stepIndex + 1}</span>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-enrichly-teal/10 group-hover:bg-enrichly-teal/20 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-enrichly-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-blue-200/70 text-sm">{step.description}</p>
                </div>
                
                <div className="space-y-3">
                  {step.steps.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-start space-x-3 p-2 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-enrichly-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-r from-white/5 to-enrichly-teal/5 rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-3">End-to-End Execution</h3>
            <p className="text-blue-200/80">From initial research to qualified conversations, we handle every step of your outreach</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <Target className="w-4 h-4 text-enrichly-teal" />
              <span className="text-white font-medium text-sm">Target</span>
            </div>
            <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-enrichly-teal to-blue-400"></div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <Search className="w-4 h-4 text-enrichly-teal" />
              <span className="text-white font-medium text-sm">Research</span>
            </div>
            <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-enrichly-teal to-blue-400"></div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <MessageSquare className="w-4 h-4 text-enrichly-teal" />
              <span className="text-white font-medium text-sm">Outreach</span>
            </div>
            <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-enrichly-teal to-blue-400"></div>
            <div className="flex items-center space-x-2 bg-enrichly-teal/20 px-4 py-2 rounded-full">
              <BarChart3 className="w-4 h-4 text-enrichly-teal" />
              <span className="text-enrichly-teal font-medium text-sm">Optimize</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            A battle-tested methodology that consistently delivers 15-25% response rates and drives meaningful conversations with your ideal prospects.
          </p>
        </div>
      </div>
    </section>
  );
}