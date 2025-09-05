import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "motion/react";

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    locations: "",
    role: "",
    companySize: ""
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required";
    if (!formData.locations.trim()) newErrors.locations = "Target locations are required";
    if (!formData.role) newErrors.role = "Target role is required";
    if (!formData.companySize) newErrors.companySize = "Company size is required";
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (submitted) {
    return (
      <section className="bg-gray-50 px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-12 text-center space-y-6">
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold text-enrichly-navy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thanks! We'll be in touch shortly with your first 15 leads.
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our team will review your requirements and deliver your enriched leads within 2-3 business days.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="intake" className="bg-gray-50 px-4 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-enrichly-navy">
            Start Your Enrichment
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about your focus and claim your first 15 leads free.
          </p>
        </div>
        
        <Card className="bg-white border-0 shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal transition-colors ${
                      errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-200" : ""
                    }`}
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry/Niche *</Label>
                <Input
                  id="industry"
                  required
                  placeholder="e.g., Manufacturing, SaaS, Healthcare"
                  value={formData.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                  className="border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="locations">Target Location(s) *</Label>
                <Input
                  id="locations"
                  required
                  placeholder="e.g., Northeast US, California, National"
                  value={formData.locations}
                  onChange={(e) => handleInputChange("locations", e.target.value)}
                  className="border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Target Role/Persona *</Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger className="border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceo">CEO/President</SelectItem>
                      <SelectItem value="founder">Founder</SelectItem>
                      <SelectItem value="owner">Business Owner</SelectItem>
                      <SelectItem value="cfo">CFO</SelectItem>
                      <SelectItem value="vp">VP/Executive</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Target Company Size *</Label>
                  <Select onValueChange={(value) => handleInputChange("companySize", value)}>
                    <SelectTrigger className="border-gray-200 focus:border-enrichly-teal focus:ring-enrichly-teal">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="micro">$1M - $5M</SelectItem>
                      <SelectItem value="small">$5M - $25M</SelectItem>  
                      <SelectItem value="medium">$25M - $100M</SelectItem>
                      <SelectItem value="large">$100M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-enrichly-navy hover:bg-enrichly-navy/90 disabled:bg-gray-400 text-white py-4 text-lg transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Claim Free Leads"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}