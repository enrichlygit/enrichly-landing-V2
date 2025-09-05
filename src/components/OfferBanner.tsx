import { Button } from "./ui/button";
import { Gift } from "lucide-react";

export function OfferBanner() {
  return (
    <section className="bg-enrichly-teal px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Claim 15 Free Leads Today
              </h3>
              <p className="text-enrichly-teal-50 text-lg">
                No commitment required. See the quality for yourself.
              </p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-enrichly-teal hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Get Free Leads
          </Button>
        </div>
      </div>
    </section>
  );
}