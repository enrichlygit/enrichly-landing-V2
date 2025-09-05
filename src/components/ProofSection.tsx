import { Card, CardContent } from "./ui/card";
import { Quote, Linkedin, ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProofSection() {
  const clients = [
    "Pineway Capital",
    "Search Party Capital", 
    "Palmetto & Pine",
    "Balufon Capital"
  ];

  return (
    <section id="proof" className="bg-gray-50 px-4 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-enrichly-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-enrichly-navy rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-enrichly-teal/10 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-enrichly-teal" />
            <span className="text-enrichly-teal font-medium text-sm">Proven Results</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-enrichly-navy">
            Built for innovators, trusted by searchers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading search funds and M&A professionals choose Enrichly to accelerate their deal flow and close more transactions.
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clients.map((client, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-enrichly-navy/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-enrichly-navy/20 transition-colors">
                  <span className="text-enrichly-navy font-semibold text-lg">
                    {client.split(' ').map(word => word[0]).join('')}
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
            <div className="text-3xl font-semibold text-enrichly-navy mb-2">2000+</div>
            <div className="text-gray-600">Companies Enriched</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-enrichly-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-enrichly-teal" />
            </div>
            <div className="text-3xl font-semibold text-enrichly-navy mb-2">&lt;3%</div>
            <div className="text-gray-600">Email Bounce Rate</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-enrichly-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-enrichly-teal" />
            </div>
            <div className="text-3xl font-semibold text-enrichly-navy mb-2">3x</div>
            <div className="text-gray-600">Faster Deal Discovery</div>
          </div>
        </div>

        {/* Before/After Visual */}
        <div className="relative mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-enrichly-navy mb-2">See the transformation</h3>
            <p className="text-gray-600">From incomplete data to a fully automated outreach engine</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Arrow between sections */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-full p-4 shadow-lg border-4 border-enrichly-teal/20">
                <ArrowRight className="w-6 h-6 text-enrichly-teal" />
              </div>
            </div>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-800">Before: Raw CSV Input</h3>
                </div>
              <div className="bg-white rounded border overflow-hidden">
                {/* Mock Google Sheets Interface */}
                <div className="bg-gray-50 px-2 py-1 border-b text-xs text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Target Companies - Outreach List</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-2 py-1 text-left border-r border-gray-300 w-6 text-gray-400">#</th>
                        <th className="px-2 py-1 text-left border-r border-gray-300">Company Name</th>
                        <th className="px-2 py-1 text-left border-r border-gray-300">Contact Name</th>
                        <th className="px-2 py-1 text-left border-r border-gray-300">Revenue ($M)</th>
                        <th className="px-2 py-1 text-left border-r border-gray-300">Email</th>
                        <th className="px-2 py-1 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-1 border-r border-gray-300 text-gray-400">1</td>
                        <td className="px-2 py-1 border-r border-gray-300">TechFlow Solutions</td>
                        <td className="px-2 py-1 border-r border-gray-300">John Smith</td>
                        <td className="px-2 py-1 border-r border-gray-300">47</td>
                        <td className="px-2 py-1 border-r border-gray-300 bg-red-100"></td>
                        <td className="px-2 py-1 bg-red-100 text-red-700">Missing</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-1 border-r border-gray-300 text-gray-400">2</td>
                        <td className="px-2 py-1 border-r border-gray-300">DataCore Industries</td>
                        <td className="px-2 py-1 border-r border-gray-300">Sarah Chen</td>
                        <td className="px-2 py-1 border-r border-gray-300">83</td>
                        <td className="px-2 py-1 border-r border-gray-300 bg-red-100"></td>
                        <td className="px-2 py-1 bg-red-100 text-red-700">Missing</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-1 border-r border-gray-300 text-gray-400">3</td>
                        <td className="px-2 py-1 border-r border-gray-300">CloudSync Corp</td>
                        <td className="px-2 py-1 border-r border-gray-300">Mike Johnson</td>
                        <td className="px-2 py-1 border-r border-gray-300">62</td>
                        <td className="px-2 py-1 border-r border-gray-300 bg-red-100"></td>
                        <td className="px-2 py-1 bg-red-100 text-red-700">Missing</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-1 border-r border-gray-300 text-gray-400">4</td>
                        <td className="px-2 py-1 border-r border-gray-300">InnovateTech Ltd</td>
                        <td className="px-2 py-1 border-r border-gray-300">David Thompson</td>
                        <td className="px-2 py-1 border-r border-gray-300">91</td>
                        <td className="px-2 py-1 border-r border-gray-300 bg-red-100"></td>
                        <td className="px-2 py-1 bg-red-100 text-red-700">Missing</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-2 py-1 border-r border-gray-300 text-gray-400">5</td>
                        <td className="px-2 py-1 border-r border-gray-300">ProcessMax Systems</td>
                        <td className="px-2 py-1 border-r border-gray-300">Lisa Anderson</td>
                        <td className="px-2 py-1 border-r border-gray-300">35</td>
                        <td className="px-2 py-1 border-r border-gray-300 bg-red-100"></td>
                        <td className="px-2 py-1 bg-red-100 text-red-700">Missing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
          
            <Card className="bg-white border-2 border-enrichly-teal/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-enrichly-teal rounded-full"></div>
                  <h3 className="text-lg font-semibold text-enrichly-navy">After: Enriched Output</h3>
                </div>
              <div className="bg-white rounded border overflow-hidden shadow-sm">
                {/* Mock CRM Interface */}
                <div className="bg-gray-50 px-4 py-2 border-b flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">Active Campaign: Q1 Outreach</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Live</span>
                  </div>
                  <div className="text-xs text-gray-500">Updated 2 min ago</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="px-4 py-2 text-left">Contact</th>
                        <th className="px-4 py-2 text-left">Company</th>
                        <th className="px-4 py-2 text-left">Email Status</th>
                        <th className="px-4 py-2 text-left">Campaign</th>
                        <th className="px-4 py-2 text-left">Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-medium">JS</div>
                            <div>
                              <div className="font-medium">John Smith</div>
                              <div className="text-xs text-gray-500">john@techcorp.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div>TechFlow Solutions</div>
                          <div className="text-xs text-gray-500">$47M Revenue</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Sent</span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="text-xs">Sequence 1/3</div>
                          <div className="text-xs text-gray-500">Follow-up in 2 days</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Opened</span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs font-medium">SC</div>
                            <div>
                              <div className="font-medium">Sarah Chen</div>
                              <div className="text-xs text-gray-500">sarah@datacore.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div>DataCore Industries</div>
                          <div className="text-xs text-gray-500">$83M Revenue</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Sent</span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="text-xs">Sequence 2/3</div>
                          <div className="text-xs text-gray-500">Next: Tomorrow</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Replied</span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-medium">MJ</div>
                            <div>
                              <div className="font-medium">Mike Johnson</div>
                              <div className="text-xs text-gray-500">mike@cloudsync.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div>CloudSync Corp</div>
                          <div className="text-xs text-gray-500">$62M Revenue</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Queued</span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="text-xs">Sequence 1/3</div>
                          <div className="text-xs text-gray-500">Sends in 4 hours</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-enrichly-teal/5 px-4 py-2 border-t">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-enrichly-teal font-medium">✓ AI Personalization Active</span>
                    <span className="text-gray-600">Reply Rate: 28% | Open Rate: 67%</span>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial */}
        <Card className="bg-gradient-to-br from-enrichly-navy to-enrichly-navy/90 border-0 shadow-2xl max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-enrichly-teal/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-enrichly-teal/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative">
              <Quote className="w-12 h-12 text-enrichly-teal mx-auto mb-6" />
              <blockquote className="text-xl lg:text-2xl text-white/90 italic mb-8 leading-relaxed">
                "I worked with Oliver for almost two years, and he was an essential part of my search. I recommend using Enrichly rather than interns to support the mechanics of outreach. Enrichly's work was fast and high quality, and they were quick to respond to feedback. I'd recommend them to anyone who's doing cold outreach."
              </blockquote>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-white text-lg">Chris Tyler, Principal</div>
                  <div className="text-enrichly-teal font-medium">Search Party Capital</div>
                </div>
                <a 
                  href="https://www.linkedin.com/in/chris-tyler" 
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