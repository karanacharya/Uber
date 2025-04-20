import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {

  // console.log(props.suggestions.description,"suggestin")
  return (
    <div>
    
      {props.suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          onClick={() => {
            props.onSuggestionClick(suggestion);
          }}
          className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl items-center justify-start"
        >
          <h2 className="bg-[#eee] ml-2 h-7 flex items-center justify-center w-9 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{suggestion}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
