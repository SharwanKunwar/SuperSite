import React from "react";

function InfoCard({ title, description, tags, siteLink }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-md flex flex-col gap-2 h-[400px] ">
      <div className="bg-linear-to-bl from-slate-400 to-slate-400 via-pink-400 h-[180px] rounded-md flex justify-center items-center">
        <img src="/vite.svg" alt="logo" className="w-full h-full object-center p-10 shadow-2xl  rounded-md"/>
      </div>
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm">{description}</p>

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
    </div>
  );
}

export default InfoCard;
