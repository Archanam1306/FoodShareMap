
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DonateContent = () => {
  return (
    <div className="space-y-6">
      <Card className="border-foodshare-green/20">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Share Your Extra Food</h2>
          <p className="mb-6">
            Have food that might go to waste? List it here to connect with people who can use it.
          </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="food-name">
                Food Item Name
              </label>
              <Input id="food-name" placeholder="e.g., Fresh Vegetables, Bread, Canned Goods" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="description">
                Description
              </label>
              <Textarea id="description" placeholder="Describe the food items, quantity, and condition" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="quantity">
                  Quantity
                </label>
                <Input id="quantity" placeholder="e.g., 5 kg, 10 items" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="expires">
                  Expires In
                </label>
                <Input id="expires" placeholder="e.g., 2 days, 1 week" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="location">
                Pickup Location
              </label>
              <Input id="location" placeholder="Enter address or drop pin on map" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="contact">
                Contact Information
              </label>
              <Input id="contact" placeholder="How should recipients contact you?" />
            </div>

            <Button type="submit" className="w-full bg-foodshare-green hover:bg-foodshare-green-dark">
              List Food Donation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonateContent;
