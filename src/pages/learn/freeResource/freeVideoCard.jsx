import React from "react";
import { FaYoutube, FaPlay } from "react-icons/fa";

function FreeVideoCard({id , title , channel}) {


  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className="bg-white min-w-60 max-w-60 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">

        {/* Thumbnail */}
        <div className="relative aspect-video group">
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-5">
            {title}
          </h2>

          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500">
              {channel}
            </p>

            <FaYoutube className="text-red-600 text-lg" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default FreeVideoCard;