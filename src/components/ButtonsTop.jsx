import React from 'react'

const ButtonsTop = () => {
  let Popular_Cities = [
    {
      id: 1,
      name: "Delhi",
    },
    {
      id: 2,
      name: "Bangalore",
    },
    {
      id: "3",
      name: "Ahmedabad",
    },
    {
      id: "4",
      name: "London",
    },
    {
      id: 5,
      name: "NewYork",
    },
  ];
  return (
    <div className="flex items-center justify-around my-1 gap-7 flex-wrap">
     {
     Popular_Cities.map((city)=>{
       return (  
         <button
         className='text-green-100 text-lg font-medium'
         id="test-button"
         >{city.name}</button>
       )
     })
     
     
     }
    </div>
  )
}

export default ButtonsTop