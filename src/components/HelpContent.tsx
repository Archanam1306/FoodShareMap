
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";

const HelpContent = () => {
  const faqs = [
    {
      question: "How do I list food for sharing?",
      answer: "Navigate to the 'Donate Food' tab and fill out the form with details about the food items you're offering. Include information such as food type, quantity, pickup location, and expiration details."
    },
    {
      question: "Who can access the food listed on the platform?",
      answer: "Our platform is open to anyone in need of food, including individuals, families, community organizations, and food banks. We believe in reducing barriers to food access."
    },
    {
      question: "Is there a delivery option for those who can't pick up food?",
      answer: "While most food exchanges happen through pickup, some donors may offer delivery. Additionally, we have volunteer groups who sometimes assist with food transport for those with mobility challenges."
    },
    {
      question: "How do I know if the food is safe to eat?",
      answer: "Donors are required to provide information about the food condition and expiry dates. We encourage users to inspect food upon pickup and use their best judgment. Our community rating system also helps ensure quality."
    },
    {
      question: "Can businesses participate in food sharing?",
      answer: "Absolutely! Restaurants, grocers, farms, and food producers are all welcome to share excess food through our platform. We offer special business accounts with additional features for regular donors."
    },
    {
      question: "What if I have dietary restrictions or allergies?",
      answer: "Donors are encouraged to list allergen information. You can also use the search filters to find food that meets your dietary needs. Always verify allergen information directly with the donor before consumption."
    }
  ];

  const contactInfo = {
    email: "help@foodsharecompass.org",
    phone: "(555) 123-4567",
    hours: "Monday-Friday: 9am-5pm"
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Help & FAQ</h2>
      
      <Card className="border-foodshare-green/20 mb-6">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-foodshare-orange/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-500">Email:</div>
                <div>{contactInfo.email}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Phone:</div>
                <div>{contactInfo.phone}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Support Hours:</div>
                <div>{contactInfo.hours}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-foodshare-green/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foodshare-green hover:text-foodshare-green-dark flex items-center">
                  <span className="mr-2">→</span>
                  User Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-foodshare-green hover:text-foodshare-green-dark flex items-center">
                  <span className="mr-2">→</span>
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-foodshare-green hover:text-foodshare-green-dark flex items-center">
                  <span className="mr-2">→</span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foodshare-green hover:text-foodshare-green-dark flex items-center">
                  <span className="mr-2">→</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foodshare-green hover:text-foodshare-green-dark flex items-center">
                  <span className="mr-2">→</span>
                  Report an Issue
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpContent;
