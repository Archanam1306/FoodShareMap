
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommunityContent = () => {
  const stories = [
    {
      name: "Sarah's Bakery",
      type: "Donor",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&q=75&fit=crop&w=600",
      story: "We used to throw away unsold bread and pastries every night. Now we connect with local shelters through Food Share Compass and ensure nothing goes to waste.",
      impact: "Donates 15kg of food weekly"
    },
    {
      name: "Downtown Shelter",
      type: "Recipient",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=75&fit=crop&w=600",
      story: "Finding consistent food sources was always challenging for us. The map feature helps us locate available donations nearby and plan our meals more effectively.",
      impact: "Feeds 200+ people weekly with donated food"
    },
    {
      name: "Green Earth Community",
      type: "Volunteer Group",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&q=75&fit=crop&w=600",
      story: "Our volunteer drivers use the app to coordinate pickups from donors and deliveries to those who can't travel to food share points.",
      impact: "Completed 150+ food deliveries"
    }
  ];

  const events = [
    {
      title: "Community Food Drive",
      date: "June 15, 2023",
      location: "Central Park",
      description: "Join us for our monthly food collection and distribution event."
    },
    {
      title: "Food Waste Workshop",
      date: "June 22, 2023",
      location: "Community Center",
      description: "Learn techniques to reduce food waste in your home and business."
    },
    {
      title: "Volunteer Training",
      date: "July 5, 2023",
      location: "Online",
      description: "Training session for new volunteers interested in food rescue."
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Community Stories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stories.map((story, index) => (
          <Card key={index} className="border-foodshare-green/20">
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{story.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    story.type === 'Donor' ? 'bg-foodshare-green/10 text-foodshare-green' : 
                    story.type === 'Recipient' ? 'bg-foodshare-orange/10 text-foodshare-orange' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {story.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{story.story}</p>
                <div className="text-xs font-medium text-foodshare-green-dark">{story.impact}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <Card key={index} className="border-foodshare-orange/20 hover:border-foodshare-orange transition-colors">
            <CardContent className="p-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{event.title}</h3>
                <span className="text-foodshare-orange text-sm">{event.date}</span>
              </div>
              <p className="text-gray-500 text-sm">{event.location}</p>
              <p className="text-gray-600 text-sm mt-2">{event.description}</p>
              <Button variant="outline" className="mt-3 text-foodshare-green border-foodshare-green hover:bg-foodshare-green hover:text-white transition-colors">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-foodshare-green/20 bg-foodshare-green/5 mt-8">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Join Our Community</h3>
          <p className="mb-4">Become a volunteer, donor, or recipient and help us build a more food-secure future.</p>
          <Button className="bg-foodshare-green hover:bg-foodshare-green-dark">
            Sign Up to Volunteer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityContent;
