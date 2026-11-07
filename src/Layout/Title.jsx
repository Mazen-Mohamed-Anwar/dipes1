import React from 'react'

export default function Title({title,mto,mbo}) {
  return (
    <>
    
<div className={`flex flex-col items-center justify-center rounded-xl gap-2 ${mto} ${mbo}`}>
    <h1 className='text-4xl text-black font-semibold text-center' style={{ fontFamily: '"Playfair Display", serif' }}>{title}</h1>
    <div className="mx-auto mt-1 h-[5px] w-[155px] rounded-full bg-red-700"></div>
</div>
    
    
    
    </>
  )
}
