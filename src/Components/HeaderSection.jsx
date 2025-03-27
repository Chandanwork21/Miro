import React, { useState } from "react";
import { Star } from "lucide-react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";

const HeaderSection = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [selectedImage, setSelectedImage] = useState(images[0]); 

  return (
    <div className="flex flex-row items-center justify-center space-x-12 py-20 max-w-6xl mx-auto">
     
      <div className="flex flex-col items-start text-left max-w-sm">
        <h1 className="text-5xl font-extrabold text-black leading-tight">
          Take ideas from <br />
          <span className="text-black">better to best</span>
        </h1>

        <p className="text-gray-600 mt-3 text-sm">
          Miro is your team&apos;s visual platform to connect, collaborate, and create — together.
        </p>

        <div className="mt-4 w-full">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white text-sm font-semibold rounded-full py-2 mt-2 cursor-pointer hover:bg-blue-700">
            Sign up free →
          </button>
        </div>

        <p className="text-gray-500 text-xs mt-2">
          Collaborate with your team within minutes
        </p>

       
        <div className="flex flex-col items-center bg-gray-100 mt-10 p-3 rounded-lg w-full max-w-xs">
          <div className="flex flex-col items-center text-yellow-500 text-sm">
           
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            
            <span className="text-gray-700 text-xs mt-1">Based on 5149+ reviews:</span>
          </div>

          <div className="flex items-center space-x-2 mt-2 cursor-pointer">
            <span className="text-sm font-semibold text-black hover:underline">GetApp</span>
            <span className="text-sm font-semibold text-black hover:underline">Capterra</span>
          </div>
        </div>
      </div>

     
      <div className="hidden md:flex flex-col w-[550px] h-[600px] space-y-4">
        
        <div className="flex-grow w-full h-full border rounded-md shadow-md overflow-hidden">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover rounded-md"
            loading="lazy" 
          />
        </div>

       
        <div className="flex justify-center space-x-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-24 rounded-md object-cover cursor-pointer border transition-all ${
                selectedImage === img ? "border-2 border-blue-500" : "hover:border-blue-500"
              }`}
              loading="lazy" 
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
