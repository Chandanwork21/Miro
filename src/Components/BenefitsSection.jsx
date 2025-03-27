import React from 'react'
import Vmware from "../assets/VMware.png"
import DocuSign from "../assets/DocuSign.png"
import { CircleUserRound, MoveRight } from "lucide-react"

const BenefitsSection = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center py-10">
        <h1 className="text-4xl font-bold mt-2 text-center">
          Collaborate without <br /> constraints
        </h1>
        <div className="flex justify-center items-center w-full mt-6">
          <div className="bg-white shadow-lg rounded-xl p-4 max-w-5xl flex gap-4">
           
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Free Forever</h1>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt, dicta aperiam, quia voluptate corrupti aliquam ab repellendus, id doloribus tempore laudantium voluptates reprehenderit harum quod ipsam itaque perspiciatis sint!
                <a href='#' className="text-blue-400 hover:underline"> Pricing plans </a>
              </p>
            </div>

       
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Easy Integrations</h1>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi quos amet! Id officia praesentium consequuntur minima numquam voluptatibus iusto, cum excepturi tenetur, ipsam sed, laboriosam natus enim beatae veritatis.
                <a href='#' className="text-blue-400 hover:underline"> Marketplace </a>
              </p>
            </div>

           
            <div className="flex-1 pl-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Security First</h1>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem, earum expedita labore quaerat accusantium placeat dolor! Enim, illum, non, aperiam error odio explicabo eos velit aliquid culpa voluptatibus placeat? 
             <a href='#' className="text-blue-400 hover:underline"> Trust Center </a>
              </p>
            </div>
          </div>
        </div>
        <button className="w-fit flex items-center my-4 gap-2 text-white bg-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-600 transition">
  <span>Sign up free</span>
  <MoveRight className="w-5 h-5" />
</button>
      </div>
    </>
  )
}

export default BenefitsSection
