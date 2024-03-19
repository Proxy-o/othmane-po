import React from "react";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a Software Developer &
        <span className="inline-flex ml-2 flex-col h-[1px] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <li className="text-[#2f7df4]">Contributer</li>
          <li className="text-[#2f7df4]">Gamer</li>
          <li className="text-[#2f7df4]">Blogger</li>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
