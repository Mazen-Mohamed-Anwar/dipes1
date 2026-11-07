import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Card2({img1,img2,id}) {
  const navigate = useNavigate();
  return (
    <div>
         <div className='w-[400px] h-[377px]   rounded-2xl grid-cols-[50px_25px_40px] justify-center items-center  '>
      
             <div className='w-full h-full relative shadow-md rounded-xl'>
              <div className='w-25 h-auto  bg-red-700 absolute   right-3 rounded-sm justify-center items-center  translate-y-1/2 text-white text-center'>New Cairo</div>
              <img src={img1} alt="HU" className="w-full h-[250px] bg-cover rounded-t-[16px]"/>
               <img src={img2} alt="HU" className="w-auto h-[50px] object-cover rounded-t-[16px]"/>
      
                <div className='w-auto  mx-2 mt-5  '>
    <button
  className="border w-full h-[40px] rounded-[8px] border-[#8E1616] text-[#8E1616]"
 onClick={() => navigate(`/devProject/${id}`)}
>
  View Details
</button>
                    </div>
             </div>
             </div>
    </div>
  )
}
