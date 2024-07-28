import React from "react";

function ContentCard(props) {
  return (
    <div className="w-[346px] h-[auto] relative  mt-9">
      <img src={props.thumbnail} alt={props.alt} className="relative" />
      <div className="absolute bottom-8 left-7">
        <p className="text-white text-[24px] font-medium">{props.name}</p>
        <p className="text-gray-400 text-[13px] font-medium">{props.artist}</p>
      </div>
    </div>
  );
}

export default ContentCard;
