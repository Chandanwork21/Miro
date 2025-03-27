import React from 'react';
import BrainStorm from "../assets/BrainStorm.png";
import UXdesign from "../assets/UXdesign.png";
import { MoveRight, Check } from "lucide-react";

const BuiltForSection = () => {
  return (
    <>
   
      <div>
        <h1 className="text-4xl font-bold text-center my-5">Built the way you work</h1>
        <ul className="flex flex-wrap justify-center my-4">
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl">Brainstorming</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl">Diagramming</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl">Meetings and Workshops</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl hidden md:inline-block">Research & Design</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl hidden md:inline-block">Strategic Planning</li>
        </ul>
      </div>

    
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col justify-center w-3/4 my-6">
            <h1 className="text-lg text-gray-600">Brainstorming</h1>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique deserunt totam maiores error soluta quo eaque culpa rem in eveniet harum omnis, labore, quis nihil, voluptates at iusto dolorum?
              <br />
              <a href="#" className="text-blue-500 underline flex items-center gap-2 px-1 hover:text-blue-600 transition">
                <span>Learn more</span>
                <MoveRight className="w-5 h-5" />
              </a>
            </p>
          </div>
        </div>

       
        <div className="w-full h-full flex justify-center items-start overflow-hidden hidden md:block">
          <img 
            src={BrainStorm} 
            alt="Brainstorming" 
            className="w-full object-cover rounded-lg"
            loading="lazy" 
          />
        </div>
      </div>

     
      <div>
        <h1 className="text-4xl font-bold text-center my-5">Built for all kinds of teams</h1>
        <ul className="flex flex-wrap justify-center my-4">
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl">UX & Design</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl">Marketing</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl">Project Management</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl hidden md:inline-block">Engineering</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl hidden md:inline-block">Sales</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl hidden md:inline-block">Consultants</li>
          <li className="m-5 px-4 border-2 border-blue-100 rounded-xl hidden md:inline-block">Agile Coaches</li>
        </ul>
      </div>

      
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col justify-center w-3/4 my-6">
            <h1 className="text-lg text-gray-600">UX and Design</h1>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" /> Build low-fi wireframes
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" /> Involve stakeholders in design process
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" /> Run engaging design workshops
              </li>
            </ul>
            <br />
            <a href="#" className="text-blue-500 underline flex items-center gap-2 px-1 hover:text-blue-600 transition">
              <span>Learn more</span>
              <MoveRight className="w-5 h-5" />
            </a>
          </div>
        </div>

       
        <div className="w-full h-full flex justify-center items-start overflow-hidden hidden md:block">
          <img 
            src={UXdesign} 
            alt="UX and Design" 
            className="w-full object-cover rounded-lg"
            loading="lazy" 
          />
        </div>
      </div>
    </>
  );
};

export default BuiltForSection;
