
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const StatisticsContent = () => {
  const stats = [
    {
      figure: "33%",
      label: "of all food produced globally is wasted",
      color: "bg-foodshare-orange"
    },
    {
      figure: "820 million",
      label: "people do not have enough to eat",
      color: "bg-foodshare-green-dark"
    },
    {
      figure: "8%",
      label: "of greenhouse gases come from food waste",
      color: "bg-foodshare-green"
    },
    {
      figure: "1.3 billion",
      label: "tons of food wasted annually",
      color: "bg-foodshare-orange-dark"
    }
  ];

  const impactData = [
    { month: "Jan", foodSaved: 120, peopleFed: 80 },
    { month: "Feb", foodSaved: 150, peopleFed: 95 },
    { month: "Mar", foodSaved: 180, peopleFed: 120 },
    { month: "Apr", foodSaved: 210, peopleFed: 140 },
    { month: "May", foodSaved: 250, peopleFed: 170 },
    { month: "Jun", foodSaved: 280, peopleFed: 190 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Food Waste & Hunger Statistics</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-foodshare-green/10">
            <CardContent className="p-6 text-center">
              <div className={`${stat.color} text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3`}>
                {index + 1}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.figure}</div>
              <div className="text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-foodshare-green/20">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
          <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="text-foodshare-green font-semibold mb-2">Impact Chart</div>
              <p className="text-gray-500 text-sm">
                Chart showing food saved and people fed will be displayed here.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-foodshare-green/10 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-foodshare-green">1,190 kg</div>
              <div className="text-gray-600">Food Saved</div>
            </div>
            <div className="bg-foodshare-orange/10 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-foodshare-orange">795</div>
              <div className="text-gray-600">People Fed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsContent;
