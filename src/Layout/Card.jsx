import React from 'react'
import HU from '../assets/img/HU.png'
import Title from './Title';
import { useNavigate } from 'react-router-dom'
export default function Card({img,bed,bath,siz,title,price,prag,id,Bedroom,vector,size,ap,tru}) {
  const navigate=useNavigate()
  return (
    <>
    <div>

      <div className="grid w-[442px] h-[529px] rounded-[16px] shadow shadow-xl shadow-gray-500  bg-[#EAEAEA]  grid-rows-[220px_25px_40px_2fr_1fr] gap-1">
       <div className='w-full h-full relative '>
        {tru ?(
          <div className='w-25 h-auto  bg-[#21E008] absolute   right-3 rounded-sm justify-center items-center  translate-y-1/2 text-white text-center'>Available</div>
        ):("")
          }

        <img src={img} alt="HU" className="w-full h-full object-cover rounded-t-[16px]"/>
        
       </div>




       <div className='w-full h-full grid grid-cols-3   border-b  border-[#A18E77]'>
          <div className="flex items-center gap-2  justify-center " >
            <img src={Bedroom} alt="Bedroom" className="size-6 object-cover "/>
            <h3 className='text-[#A18E77]'>{bed}</h3>
            
              </div>

            <div className="flex items-center gap-2 justify-center  border-l-1 border-[#A18E77]">
            <img src={vector} alt="vector" className="size-5 object-cover "/>
            <h3 className='text-[#A18E77]'>{bath}</h3>
           
             </div>

            <div className="flex items-center gap-2 border-l-1 border-[#A18E77] justify-center">
            <img src={size} alt="Bedroom" className="size-5 object-cover "/>
            <h3 className='text-[#A18E77]'>{siz}</h3>
            
        </div>
       </div>





            <div className='w-auto h-auto grid grid-cols-2 mx-2  mt-2   '>
          
            <h3 className='text-[#8E1616] font-semibold text-2xl' style={{ fontFamily: '"Playfair Display", serif' }}>{title}</h3>
            <h3 className='text-[#A18E77] font-semibold  text-right text-2xl' style={{ fontFamily: '"Playfair Display", serif' }}>{price}</h3>
             </div>

             

              <div className='mx-2   min-h-0 overflow-y-auto '>
                <p className='text-[#847D7D] font-medium' style={{ fontFamily: "Lato, sans-serif" }}>{prag}</p>
              </div>

              <div className='w-auto  mx-2  '>
                <button className='border w-full h-[40px] rounded-[8px] border-[#8E1616] text-[#8E1616]'
                onClick={()=>navigate(`/${ap}/${id}`)}
                >View Details</button>
              </div>

</div>
      
    </div>
    </>
  )
}
