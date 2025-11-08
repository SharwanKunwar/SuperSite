import React from "react";
import { motion } from "framer-motion";



function InfoCard({ title, description, tags, siteLink }) {
  return (
    <motion.div 
    initial={{opacity:0, x:100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.3}}
    className="bg-white rounded-lg p-3 shadow-md flex flex-col gap-2 h-[260px] ">
      <div className=" rounded-md flex gap-3 p-2">
        <div className="bg-linear-to-br from-indigo-400 to-green-400 via-pink-400 w-[40%] h-[110px] flex justify-center items-center rounded-sm"><img src="/vite.svg" alt="logo" className="w-[70px]"/></div>
        <div className=" w-[60%]">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          {/* Description */}
          <p className="text-gray-500 text-sm">{description}</p>


        </div>
      </div>
      


      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`px-2 py-1 my-2 text-xs rounded-full ${
              tag.color ? tag.color : "bg-gray-200 text-gray-800"
            }`}
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* Visit Button */}
      <a
        href={siteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
      >
        Visit Site &rarr;
      </a>
    </motion.div>
  );
}

export default InfoCard;
