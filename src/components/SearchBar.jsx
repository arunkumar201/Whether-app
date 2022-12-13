import React from 'react'
import { UilSearch, UilMapMarkerAlt } from "@iconscout/react-unicons";
function SearchBar() {
  return (
    //Div For search Input box,search Icon ,Units Icons
    // its a Container for entire search input box,Icons
    <div className="my-3 flex flex-row justify-center">
      {/* For Input Box */}
      {/* for Search Icon and Location Icon */}
      <div className="flex flex-row w-3/4 items-center space-x-2 justify-center">
        <input
          placeholder="Search location..."
          type="text"
          className="text-sm w-full shadow-xl p-2 font-normal capitalize focus:outline-none"
        />
        <UilSearch
          size={25}
          className="text-white  transition ease-in-out hover:scale-125  hover:cursor-pointer"
        />
        <UilMapMarkerAlt
          size={25}
          className="text-white  transition ease-in-out hover:scale-125 hover:cursor-pointer "
        />
      </div>
      {/* For C and F Unit Options  */}
      <div className="w-1/4 flex flex-row items-center justify-center">
        <button name="Celsius" className="text-xl font-light text-white">
          °C
        </button>
        <p className="text-xl text-white  mx-1.5">|</p>
        <button name="Celsius" className="text-xl font-light text-white">
          °F
        </button>
      </div>
    </div>
  );
}

export default SearchBar