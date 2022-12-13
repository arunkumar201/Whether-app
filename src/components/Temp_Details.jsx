import React from 'react'
import {
  UilTemperature,
  UilWind,
  UilTear,
  UilBrightness,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
function Temp_Details() {
  return (
    <div>
      <div
        className="flex text-center justify-center items-center text-cyan-200 text-xl
   font-bold py-3"
      >
        <p>Clear Info</p>
      </div>
      <div className="flex text-center justify-between text-white
      py-2">
        {/* Image Loading Section */}
        <img
          src="https://bit.ly/3VYQrCq"
          alt=""
          width={10}
          height={10}
          className="w-20 h-20"
        />

        <p className=" text-white text-5xl">25°</p>

        <div className="flex flex-col space-y-3">
          <div className="flex flex-row items-center justify-center text-sm">
            <UilTemperature size={18} className="mr-0.5" />
            Real Felt:
            <span className="ml-1 font-semibold">45°</span>
          </div>

          <div className="flex flex-row items-center justify-center text-sm">
            <UilTear size={18} className="mr-0.5" />
            Humidity:
            <span className="ml-1 font-semibold">45% </span>
          </div>

          <div className="flex flex-row items-center justify-center text-sm">
            <UilWind size={18} className="mr-0.5" />
            Wind:
            <span className="ml-1 font-semibold">45 km/hr</span>
          </div>
        </div>
      </div>
      {/* this div  displays the rise ,set  Time Of sun ,High and low Temperature */}
      <div className="flex flex-row justify-center  items-center text-white py-3 text-sm space-x-3">
        <UilBrightness />
        Rise:
        <p className="ml-1 font-light">
          <span>4.50 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        Set:
        <p className="ml-1 font-light">
          <span>4.50 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp size={20} />
        High:
        <p className="ml-1 font-light">
          <span>45°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown size={20} />
        Rise:
        <p className="ml-1 font-light">
          <span>45°</span>
        </p>
      </div>
      {/* end of the first Div */}
    </div>
  );
}

export default Temp_Details