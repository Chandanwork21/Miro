import React from 'react';
import WorkImage from "../assets/WorkImage.png";
import ConnectImage from "../assets/ConnectImage.png";
import { MoveRight } from "lucide-react";

const WorkSection = () => {
  return (
    <>
      
      <div className="flex flex-row justify-center items-center w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col justify-center w-3/4 my-6">
            <h1 className="text-4xl font-bold">Work together, <br /> whatever you work</h1>
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
        <div className="w-full h-full flex justify-center items-start overflow-hidden">
          <img 
            src={WorkImage} 
            alt="Work" 
            className="w-full object-cover rounded-lg" 
            loading="lazy" 
          />
        </div>
      </div>

     
      <div className="flex flex-row justify-center items-center w-full">
        <div className="w-full">
          <img 
            src={ConnectImage} 
            alt="Connect" 
            className="w-full object-cover rounded-lg"
            loading="lazy" 
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col justify-center w-1/2 my-6">
            <h1 className="text-4xl font-bold">Connect your tools, <br /> close your tabs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique deserunt totam maiores error soluta quo eaque culpa rem in eveniet harum omnis, labore, quis nihil, voluptates at iusto dolorum?
              <br />
              <a href="#" className="text-blue-500 underline flex items-center gap-2 px-1 hover:text-blue-600 transition">
                <span>Learn more</span>
                <MoveRight className="w-5 h-5" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
