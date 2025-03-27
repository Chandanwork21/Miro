import React from 'react'
import {MoveRight} from "lucide-react"

const UsersSection = () => {
  return (
    <>
    <div className="flex justify-center items-center">
<div className="bg-gray-900 text-white w-1/2 py-10 my-5 flex flex-col items-center rounded-md">
<h1 className="text-5xl font-bold text-center">Join 45M+ users today</h1>
    <p className="text-gray-500 text-lg mt-2">Start for free - upgrade anytime.</p>
    
    <a href="#" className="text-gray-500 text-lg mt-2 px-4 py-2 underline cursor-pointer rounded-md">
      Joining as an organization? Contact Sales
    </a>

   
    <button className="flex items-center px-4 py-2 mt-6 bg-blue-600 text-white rounded-md hover:bg-gray-200 hover:text-black cursor-pointer transition duration-300">
      <span>Sign Up Free</span>
      <MoveRight className="ml-2" />
    </button>
</div>
</div>
    </>
  )
}

export default UsersSection