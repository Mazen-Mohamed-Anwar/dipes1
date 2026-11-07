import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/axios-instance'
import map from '../../assets/img/map.svg'


export default function RDunits() {

  const {id}=useParams()
  const [unit,setUnits]=useState(null)
  const [lodaing , setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [ind,setind]=useState(0)

  const getUnit=async ()=>{
    try{
      const apiUnit=await api.get(`/unit/${id}`)
      setUnits(apiUnit.data)
      setLoading(false)
    }catch(error){
         console.log(error)
         setError(error)
         setLoading(false)
    }
  }

  useEffect(()=>{
    getUnit()
  },[id])

  

  if (!unit) {
    return <div>Loading...</div>;
  }

  return (
    <>
      
       <div>
      <div className="w-full h-full p-10">
            <div className="grid w-full h-full  grid-cols-3 gap-1">

             <div className='w-full col-span-3 h-[500px] min-w-0'>
              <img src={unit.project?.images?.[ind]} alt="HU" className="block w-full h-full object-cover rounded-[16px]"/>
             </div>




   <div className="w-full col-span-3 h-auto">
  <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

    {unit.images?.slice(1).map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Project ${index + 2}`}
        className="w-full h-full object-cover rounded-[16px]"
        onClick={() => setind(index)}
      />
    ))}

  </div>
</div>
      
    </div>
    </div>

  

<div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-center">
  <h1 className="text-red-700 text-2xl sm:text-3xl lg:text-4xl font-medium" style={{ fontFamily: "Lato, sans-serif" }}>
    Splendid historic Art Nouveau villa
  </h1>

  <h1 className="text-left md:text-right text-[#a18e17] font-medium text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: "Lato, sans-serif" }}>
    50,000,000 EGP
  </h1>
</div>

<div className="flex items-start gap-2 mt-5">

<svg width="12" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4583 9.33331C12.4583 11.0592 11.0591 12.4583 9.33325 12.4583C7.60736 12.4583 6.20825 11.0592 6.20825 9.33331C6.20825 7.60742 7.60736 6.20831 9.33325 6.20831C11.0591 6.20831 12.4583 7.60742 12.4583 9.33331Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#847D7D"/>
<path d="M9.33333 1C7.1232 1 5.00358 1.87797 3.44078 3.44078C1.87797 5.00358 1 7.1232 1 9.33333C1 11.3042 1.41875 12.5938 2.5625 14.0208L9.33333 21.8333L16.1042 14.0208C17.2479 12.5938 17.6667 11.3042 17.6667 9.33333C17.6667 7.1232 16.7887 5.00358 15.2259 3.44078C13.6631 1.87797 11.5435 1 9.33333 1Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#847D7D"/>
</svg>

<p className='text-[#847d7d] font-medium' style={{ fontFamily: "Lato, sans-serif" }}>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
</div>




<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8" style={{ fontFamily: "Lato, sans-serif" }}>
   <div className="flex flex-col w-auto h-auto">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl">At a glance</h1>
  <ul className="list-disc pl-5 space-y-2 mt-5 text-[#847d7d] font-medium">
    <li>Plot size ca.: 589 m²</li>
     <li>Living area ca.: 300 m²</li>
      <li>Bedrooms: 3</li>
       <li>Bathrooms: 3</li>
        <li>Living rooms: 2</li>
        <li>WC: 1</li>
        <li>External parking: 3, covered</li>
  </ul>

 </div>

    <div className="flex flex-col h-auto sm:ml-0 xl:ml-18" style={{ fontFamily: "Lato, sans-serif" }}>
  <h1 className='text-xl font-medium'>Overview</h1>

  <p className=' space-y-2 mt-5 text-[#847d7d] font-medium'>
    Nestled in a residential area of Minusio, this magnificent historic villa is for sale, fully renovated and ready to move in. The spacious living areas, flooded with natural light thanks to perfect sun exposure, create a unique and welcoming atmosphere. A well-maintained, low-maintenance garden provides the ideal setting for enjoying outdoor gatherings. Its proximity to essential services and public transport also makes the villa an ideal choice for families.
  </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6" style={{ fontFamily: "Lato, sans-serif" }}>

    <button className="bg-green-500 w-full h-10 md:w-full   rounded-sm text-xl font-medium text-white" >
      Contact via WhatsApp
    </button>

    <button className="border border-red-700 w-50 h-10 md:w-full rounded-sm text-xl font-medium text-red-700">
      Call
    </button>
  </div>
 </div>

</div>
    </div>
    
    
    
    
    
    
    
    </div></>
  )
}
