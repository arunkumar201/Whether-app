import React from 'react'

export default function ForCastSection({Title}) {
  return (
    <div>
      <div className="flex justify-start items-center
      mt-1">
        <p className="text-white font-weight-bold uppercase">{Title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row justify-between items-center text-white">
        <div className="flex flex-col justify-center items-center space-y-1">
          <p className="font-weight-bold text-sm">2.00 AM</p>
          <img
            src="https://bit.ly/3VYQrCq"
            alt=""
            width={5}
            height={5}
            className="w-10 h-10"
          />
          <p className="font-sm">41°</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="font-weight-bold text-sm">2.00 AM</p>
          <img
            src="https://bit.ly/3VYQrCq"
            alt=""
            width={5}
            height={5}
            className="w-10 h-10"
          />
          <p className="font-sm">41°</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="font-weight-bold text-sm">2.00 AM</p>
          <img
            src="https://bit.ly/3VYQrCq"
            alt=""
            width={5}
            height={5}
            className="w-10 h-10"
          />
          <p className="font-sm">41°</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="font-weight-bold text-sm">2.00 AM</p>
          <img
            src="https://bit.ly/3VYQrCq"
            alt=""
            width={5}
            height={5}
            className="w-10 h-10"
          />
          <p className="font-sm">41°</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="font-weight-bold text-sm">2.00 AM</p>
          <img
            src="https://bit.ly/3VYQrCq"
            alt=""
            width={5}
            height={5}
            className="w-10 h-10"
          />
          <p className="font-sm">41°</p>
        </div>
      </div>
    </div>
  );
}
