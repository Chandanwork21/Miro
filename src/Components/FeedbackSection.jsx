import React from "react";
import Vmware from "../assets/VMware.png"
import DocuSign from "../assets/DocuSign.png"
import {CircleUserRound,MoveRight} from "lucide-react"



const Feedbacks=()=> {
    return (
        <>
        <div className="bg-gray-100">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold my-10">Loved by the world's best team</h1>
        <button className="w-1/4 text-blue-600 border-2 border-blue-600 font-semibold rounded-full py-2  cursor-pointer flex items-center justify-center gap-2 transition duration-300 hover:bg-blue-200">
          <span>See all customer Stories</span>
          <MoveRight className="w-5 h-5" />
        </button>
    </div>
        <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-5xl flex gap-8">
          <div className="flex-1 border-r pr-6">
            <div className="flex items-center gap-2">
              <img src={Vmware} alt="Vmware Logo" className="w-30 h-15" />
            </div>
            <hr className="bg-gray-300 my-4"/>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt, dicta aperiam, quia voluptate corrupti aliquam ab repellendus, id doloribus tempore laudantium voluptates reprehenderit harum quod ipsam itaque perspiciatis sint!</p>
            <div className="flex items-center mt-4">
              <CircleUserRound size={35} />
              <div className="ml-3">
                <p className="font-bold">Rox Mustafa</p>
                <p className="text-gray-500 text-sm">Design Team Lead at VMware</p>
              </div>
            </div>
          </div>

          <div className="flex-1 border-r pr-6">
          <div className="flex items-center gap-2">
              <img src={DocuSign} alt="Vmware Logo" className="w-30 h-15" />
            </div>
            <hr className="bg-gray-300 my-4"/>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi quos amet! Id officia praesentium consequuntur minima numquam voluptatibus iusto, cum excepturi tenetur, ipsam sed, laboriosam natus enim beatae veritatis.</p>
            <div className="flex items-center mt-4">
            <CircleUserRound size={35} />
              <div className="ml-3">
                <p className="font-bold">Jane Ashley</p>
                <p className="text-gray-500 text-sm">Design Head at DocuSign</p>
              </div>
            </div>
          </div>

    
          <div className="flex-1 pl-6">
          <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold ">frog</h1>
            </div>
            <hr className="bg-gray-300 my-4"/>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem, earum expedita labore quaerat accusantium placeat dolor! Enim, illum, non, aperiam error odio explicabo eos velit aliquid culpa voluptatibus placeat?</p>
            <div className="flex items-center mt-4">
            <CircleUserRound size={35} />
              <div className="ml-3">
                <p className="font-bold">Laura Bind</p>
                <p className="text-gray-500 text-sm">Associate Design Director at frog</p>
              </div> 
            </div>
          </div>
        </div>
      </div>
      </div>

      </>
      
    )
  }
  export default Feedbacks;