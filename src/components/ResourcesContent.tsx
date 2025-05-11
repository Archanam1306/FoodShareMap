
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ResourcesContent = () => {
  const resources = [
    {
      title: "Food Banks Directory",
      description: "Find local food banks and community pantries in your area.",
      link: "#",
      category: "Food Access"
    },
    {
      title: "Nutrition Guidelines",
      description: "Information about balanced nutrition on a budget.",
      link: "#",
      category: "Health"
    },
    {
      title: "Community Gardens",
      description: "Directory of community gardens where you can volunteer or grow your own food.",
      link: "#",
      category: "Sustainable Food"
    },
    {
      title: "Government Assistance Programs",
      description: "Information about SNAP, WIC and other food assistance programs.",
      link: "#",
      category: "Support Programs"
    },
    {
      title: "Food Waste Reduction Tips",
      description: "Learn how to reduce food waste in your home or business.",
      link: "#",
      category: "Sustainability"
    },
    {
      title: "Volunteer Opportunities",
      description: "Ways to get involved in fighting food insecurity in your community.",
      link: "#",
      category: "Community Action"
    }
  ];

  const categories = Array.from(new Set(resources.map(r => r.category)));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Resources</h2>
      
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-medium text-foodshare-orange mb-3">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.filter(r => r.category === category).map((resource, idx) => (
              <Card key={idx} className="border-foodshare-green/20 hover:border-foodshare-green transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-semibold">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
                  <a href={resource.link} className="text-foodshare-green hover:text-foodshare-green-dark text-sm mt-2 inline-block">
                    Learn more →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcesContent;
