import React from "react";

function AboutTemplate({ text1, text2, text3, Title, reason, image }) {
  return (
    <div className=" text-black p-6 rounded-lg ">
      {/* Text Section */}
      <div className="flex gap-3 text-gray-500 text-[12px] mb-4">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{Title}</h2>

      {/* Reason or Description */}
      <p className="text-lg text-gray-700 mb-4">{reason}</p>

      {/* Image */}
      {image && (
        <img
          src={image}
          alt={Title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      )}
    </div>
  );
}

export default AboutTemplate;
