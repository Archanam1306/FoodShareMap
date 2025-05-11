
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Map from '@/components/Map';
import FoodList from '@/components/FoodList';
import AboutContent from '@/components/AboutContent';
import DonateContent from '@/components/DonateContent';
import ResourcesContent from '@/components/ResourcesContent';
import StatisticsContent from '@/components/StatisticsContent';
import CommunityContent from '@/components/CommunityContent';
import HelpContent from '@/components/HelpContent';

const Index = () => {
  const [activeTab, setActiveTab] = useState("find-food");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto py-4 px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-foodshare-green flex items-center justify-center text-white font-bold text-lg mr-3">
                FC
              </div>
              <h1 className="text-xl font-bold text-foodshare-green-dark">Food Share Compass</h1>
            </div>
            <div>
              <Button className="bg-foodshare-green hover:bg-foodshare-green-dark">
                Sign In / Register
              </Button>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
            <TabsList className="w-full overflow-x-auto flex justify-start sm:justify-center gap-1 bg-gray-100 p-1 h-auto">
              <TabsTrigger value="find-food" className="px-3 py-2 text-sm flex-shrink-0">
                Find Food
              </TabsTrigger>
              <TabsTrigger value="donate" className="px-3 py-2 text-sm flex-shrink-0">
                Donate Food
              </TabsTrigger>
              <TabsTrigger value="about" className="px-3 py-2 text-sm flex-shrink-0">
                About
              </TabsTrigger>
              <TabsTrigger value="resources" className="px-3 py-2 text-sm flex-shrink-0">
                Resources
              </TabsTrigger>
              <TabsTrigger value="statistics" className="px-3 py-2 text-sm flex-shrink-0">
                Statistics
              </TabsTrigger>
              <TabsTrigger value="community" className="px-3 py-2 text-sm flex-shrink-0">
                Community
              </TabsTrigger>
              <TabsTrigger value="help" className="px-3 py-2 text-sm flex-shrink-0">
                Help
              </TabsTrigger>
            </TabsList>
            
            <div className="container mx-auto mt-6 px-4">
              <TabsContent value="find-food" className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold text-foodshare-green-dark mb-4">Find Available Food</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Map />
                    </div>
                    <div>
                      <div className="bg-foodshare-green/5 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold mb-2">Filter Results</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm mb-1">Distance</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                              <option>Within 1 mile</option>
                              <option>Within 5 miles</option>
                              <option>Within 10 miles</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Food Type</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                              <option>All Types</option>
                              <option>Fresh Produce</option>
                              <option>Prepared Meals</option>
                              <option>Packaged Goods</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Availability</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                              <option>Available Now</option>
                              <option>Available Today</option>
                              <option>Available This Week</option>
                            </select>
                          </div>
                          <Button className="w-full bg-foodshare-green hover:bg-foodshare-green-dark mt-2">
                            Apply Filters
                          </Button>
                        </div>
                      </div>
                      <FoodList />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="donate" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <DonateContent />
                </div>
              </TabsContent>

              <TabsContent value="about" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <AboutContent />
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <ResourcesContent />
                </div>
              </TabsContent>

              <TabsContent value="statistics" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <StatisticsContent />
                </div>
              </TabsContent>

              <TabsContent value="community" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <CommunityContent />
                </div>
              </TabsContent>

              <TabsContent value="help" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <HelpContent />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </header>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foodshare-green mb-3">Food Share Compass</h3>
              <p className="text-gray-600 text-sm">Connecting excess food to those in need through community mapping and sharing.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-foodshare-green">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-foodshare-green">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-foodshare-green">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-foodshare-green">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-foodshare-green">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-foodshare-green">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-foodshare-green">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm">
            © 2023 Food Share Compass. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
