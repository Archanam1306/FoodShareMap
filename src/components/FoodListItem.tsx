
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FoodListItemProps {
  name: string;
  description: string;
  quantity: string;
  distance: string;
  expiresIn: string;
}

const FoodListItem = ({ name, description, quantity, distance, expiresIn }: FoodListItemProps) => {
  return (
    <Card className="mb-4 border-foodshare-green/20 hover:border-foodshare-green transition-colors">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-sm bg-foodshare-green/10 text-foodshare-green px-2 py-1 rounded-full">
            {distance}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex justify-between mt-3 text-sm">
          <span className="text-gray-500">Quantity: {quantity}</span>
          <span className="text-foodshare-orange font-medium">Expires in: {expiresIn}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodListItem;
