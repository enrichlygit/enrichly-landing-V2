import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-semibold text-enrichly-navy leading-tight">
          Get your first enriched list this week.
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join the search funds and M&A teams who trust Enrichly to accelerate their deal flow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-enrichly-navy hover:bg-enrichly-navy/90 text-white px-10 py-4 text-lg"
          >
            Book a Call
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-enrichly-teal text-enrichly-navy hover:bg-enrichly-teal/10 px-10 py-4 text-lg"
          >
            See Sample List
          </Button>
        </div>
      </div>
    </section>
  );
}