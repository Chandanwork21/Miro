import React from "react";
import { MoveRight } from "lucide-react";
import { Twitter, Facebook, Linkedin, Instagram, Youtube, Globe } from 'lucide-react';
import AppStore from "../assets/AppStore.png"
import GooglePlay from "../assets/googleplay.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:underline cursor-pointer">Online whiteboard</li>
              <li className="hover:underline cursor-pointer">Templates</li>
              <li className="hover:underline cursor-pointer">Apps & Integrations</li>
              <li className="hover:underline cursor-pointer">Miro Developer Platform</li>
              <li className="hover:underline cursor-pointer">Miroverse</li>
              <li className="hover:underline cursor-pointer">Security & Compliance</li>
              <li className="hover:underline cursor-pointer">Miro for Devices</li>
              <li className="hover:underline cursor-pointer">Changelog</li>
              <li className="hover:underline cursor-pointer">Accessibility</li>
            </ul>
            <div className="flex items-center text-gray-400 underline hover:text-blue-300 cursor-pointer mt-3">
              <span>View More</span> <MoveRight className="ml-2" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Meetings and Workshops",
                "Brainstorming & Ideation",
                "Agile Workflows",
                "Diagramming",
                "Research & Design",
                "Strategy & Planning",
                "Mind Map",
                "Concept Map",
                "Online Sticky Notes",
                "Flowchart",
                "Wireframing",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {["About Us", "Careers 🚀", "Miro in the News", "Customer Stories"].map(
                (item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{item}</li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Miro Academy",
                "Help Center",
                "Blog",
                "Status",
                "Miro Community",
                "Miro Professional Network",
                "Miro Experts Directory",
                "Miro Events",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Pricing and Plans</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Pricing",
                "Business",
                "Enterprise",
                "Consultants",
                "Education",
                "Startups",
                "NPOs",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
            <div className="flex items-center text-gray-400 underline hover:text-blue-300 cursor-pointer mt-3">
              <span>Contact Sales</span> <MoveRight className="ml-2" />
            </div>
          </div>
        </div>

        <hr class="border-t border-white my-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">   
        <div className="flex gap-4">
          <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        </div>

       
        <div className="text-sm flex flex-wrap items-center justify-center gap-4 text-gray-300">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Globe className="w-4 h-4" /> EN
          </div>
          <span>© 2022 Miro</span>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Manage Cookies</a>
        </div>

       
        <div className="flex gap-3">
        <button className="flex items-center gap-2 hover:border-2 hover:border-gray cursor-pointer px-4 py-2 rounded-lg text-white">
         <img src={AppStore} alt="App Store" className="w-8 h-8 rounded" />
         App Store
         </button>
         
         <button className="flex items-center gap-2 hover:border-2 hover:border-gray cursor-pointer  px-4 py-2 rounded-lg text-white">
           <img src={GooglePlay} alt="Google Play" className="w-8 h-8 rounded" />
           Google Play
         </button>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
