import { Linkedin, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-enrichly-navy px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Enrichly</h3>
            <p className="text-blue-100">Outreach-as-a-Service for Investors, Search Funds, and M&A professionals</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <a 
              href="mailto:info@enrichly.co" 
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              info@enrichly.co
            </a>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-blue-100 hover:text-enrichly-teal transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-blue-100 hover:text-enrichly-teal transition-colors duration-300"
                aria-label="Schedule a call"
              >
                <Calendar className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100/70">
            Copyright © Enrichly 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}