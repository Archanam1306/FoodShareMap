
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutContent = () => {
  return (
    <div className="space-y-6">
      <Card className="border-foodshare-green/20">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">About Food Share Compass</h2>
          <p className="mb-4">
            Food Share Compass is a platform dedicated to connecting those with excess food to people in need.
            By mapping available food resources, we help reduce food waste while addressing food insecurity in communities.
          </p>
          <p className="mb-4">
            Our mission is to create a more sustainable and equitable food distribution system by leveraging
            technology to bridge the gap between food surplus and food need.
          </p>
        </CardContent>
      </Card>
      
      <Card className="border-foodshare-orange/20">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold text-foodshare-orange-dark mb-3">How It Works</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-foodshare-green-light w-8 h-8 flex items-center justify-center rounded-full text-white flex-shrink-0">1</div>
              <div>
                <h3 className="font-medium">List Excess Food</h3>
                <p className="text-gray-600 text-sm">Restaurants, grocery stores, or individuals can list their excess food items.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-foodshare-green w-8 h-8 flex items-center justify-center rounded-full text-white flex-shrink-0">2</div>
              <div>
                <h3 className="font-medium">Find on Map</h3>
                <p className="text-gray-600 text-sm">People in need can find available food resources on our interactive map.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-foodshare-green-dark w-8 h-8 flex items-center justify-center rounded-full text-white flex-shrink-0">3</div>
              <div>
                <h3 className="font-medium">Connect & Share</h3>
                <p className="text-gray-600 text-sm">Connect through the platform and arrange food pickup or delivery.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutContent;
