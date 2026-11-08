import React from 'react'
import hero from '../assets/img/hero.png'
import iconHero from '../assets/img/iconHero.png'
import fb from '../assets/icon/fb.svg'
import insta from '../assets/icon/insta.svg'
import t from '../assets/icon/t.svg'
import x from '../assets/icon/x.svg'
export default function Hero({btn,icon,img,ds,title,title2}) {
  return (
<>
<div className='h-screen bg-cover flex flex-row '  style={{backgroundImage:`url(${img})`}}>
  
<div className=' h-full w-full  flex flex-col justify-center items-center'>
      
<h1
  className="text-4xl text-white font-bold text-center space-y-2 md:text-6xl"
  style={{ fontFamily: '"Playfair", serif' }}
>
  <span className="block">{title}</span>
  <span className="block">{title2}</span>
</h1>
<div className="w-full sm:w-11/12 md:w-2/3 mt-5 mx-auto px-3">

<p className="text-gray-300 font-bold text-center text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed break-words" style={{ fontFamily: '"Lato", sans-serif' }} >{ds}</p>
     </div>
     
     
{btn ? (
  <div className="flex items-center justify-center mt-5">
    <button className="bg-gradient-to-r from-red-900 to-red-500 w-50 h-10 md:w-60  rounded-sm text-xl font-medium text-white">
      Explore
    </button>
  </div>
) : (
  ""
)}

    </div>

        
     
     

    </div>  
    {icon&&
     <div className=' flex flex-row md:flex-col w-full justify-center items-center md:items-start mt-5 md:justify-start absolute bottom-0  gap-3  md:ml-4'>
             <img src={fb} className='size-10 md:size-14 border rounded-full p-2 border-white'></img>
             <img src={x} className=' size-10 md:size-14 border rounded-full p-2 border-white   '></img>
             <img src={insta} className='  size-10 md:size-14 border rounded-full p-2 border-white '></img>
             <img src={t} className=' size-10 md:size-14 border rounded-full p-2 border-white  '></img>
          </div >} </>
  )
}
