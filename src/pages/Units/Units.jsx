import React, { useEffect, useState } from 'react'
import Hero from '../../Layout/Hero'
import Card from '../../Layout/Card'
import HU from '../../assets/img/HU.png'
import Bedroom from '../../assets/icon/Bedroom.svg'
import vector from '../../assets/icon/Vector.svg'
import size from '../../assets/icon/size.svg'
import api from '../../utils/axios-instance'
import { Navigate, useNavigate } from 'react-router-dom';
import Zones from './../Zones/Zones';
export default function Units() {

const[unitss,setUnits]=useState([])
const[lodaing,setLoding]=useState(true)  
const[error,setError]=useState(null)
const[search,setSearch]=useState("")
const[price,setPrice]=useState("")
const[bedroom,setBedroom]=useState("")
const[zone,setZone]=useState("")
const[dev,setDev]=useState("")
const[pro,setPro]=useState("")
const[st,setSt]=useState("")
const navigate=useNavigate()

const getUnit=async()=>{
  try{
    const uni=await api.get("/unit")
    setUnits(uni.data)
    console.log(uni.data)
    setLoding(false)
    
  }catch(error){
    setError(error)
    setLoding(false)

  }
}

useEffect(()=>{
  getUnit()
  
},[])


const falter = unitss.filter((unitt) => {
  return (
    unitt.title_en.toLowerCase().includes(search.toLowerCase()) &&
    (price === "" || unitt.price <= Number(price)) &&
    (bedroom === "" || unitt.bedrooms <= Number(bedroom))&&
  (zone === "" || unitt.zoneName_en === zone)&&
  (dev === "" || unitt.developerName_en === dev)&&
  (pro === "" || unitt.projectName_en === pro)&&
  (st === "" || unitt.status === st)
  );
});


  return (
    <>
    <div>
       <Hero
           
           
            btn={true}
                  img={HU}
                  title={"Where Visionary Design"}
                  title2={"Meets Daily Life"}
                  ds={"Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world "}
                  icon={true}
           
           
           />



<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  xl:grid-cols-7
  w-auto
  h-auto
  rounded-xl
  border-2
  border-[#8E1616]
  mt-10
  mx-4
  lg:mx-10
  overflow-hidden
">

  
  <div className="flex items-center justify-between min-w-0 border-b lg:border-b-0 lg:border-r border-[#8E1616] p-2">
    <input
      className="outline-none h-[50px] w-full min-w-0 px-2"
      type="text"
      value={search}
      placeholder="Search Property"
      onChange={(e) => setSearch(e.target.value)}
    />

    <svg
      className="h-6 w-6 shrink-0 opacity-50 mx-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
  </div>


  <div className="flex items-center min-w-0 border-b lg:border-b-0 lg:border-r border-[#8E1616] p-2">
    <select
      className="p-2 text-black w-full min-w-0 outline-none"
      onChange={(e) => setBedroom(e.target.value)}
    >
      <option value="">All Bedrooms</option>
      <option value="2">2 Bedrooms</option>
      <option value="4">4 Bedrooms</option>
      <option value="12">12 Bedrooms</option>
    </select>
  </div>

 
  <div className="flex items-center min-w-0 border-b lg:border-b-0 lg:border-r border-[#8E1616] p-2">
    <input
      type="text"
      className="outline-none w-full min-w-0 h-[50px] px-2"
      placeholder="Projects"
      list="Projects"
      onChange={(e) => setPro(e.target.value)}
    />
    <datalist id="Projects">
      <option value="Hayah" />
      <option value="hills" />
      <option value="Hayah resident" />
    </datalist>
  </div>

  
  <div className="flex items-center min-w-0 border-b lg:border-b-0 lg:border-r border-[#8E1616] p-2">
    <input
      type="text"
      className="outline-none w-full min-w-0 h-[50px] px-2"
      placeholder="Zone"
      list="browser"
      onChange={(e) => setZone(e.target.value)}
    />
    <datalist id="browser">
      <option value="Alexandria" />
      <option value="Cairo" />
    </datalist>
  </div>

  <div className="flex items-center min-w-0 border-b lg:border-b-0 lg:border-r border-[#8E1616] p-2">
    <input
      type="text"
      className="outline-none w-full min-w-0 h-[50px] px-2"
      placeholder="Developer"
      list="browse"
      onChange={(e) => setDev(e.target.value)}
    />
    <datalist id="browse">
      <option value="elmorshedy" />
    </datalist>
  </div>


  <div className="flex items-center min-w-0 border-b lg:border-b-0 lg:border-r border-[#8E1616] p-2">
    <input
      type="text"
      className="outline-none w-full min-w-0 h-[50px] px-2"
      placeholder="Status"
      list="AVAILABLE"
      onChange={(e) => setSt(e.target.value)}
    />
    <datalist id="AVAILABLE">
      <option value="AVAILABLE" />
    </datalist>
  </div>


  <div className="flex items-center min-w-0 p-2">
    <input
      type="text"
      className="outline-none w-full min-w-0 h-[50px] px-2"
      placeholder="Price Range"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

</div>


<div className="w-full flex items-center justify-center mt-6 px-4">
  <button className="
    w-full
    sm:w-1/2
    lg:w-1/4
    h-[45px]
    rounded-lg
    bg-[#8E1616]
    text-white
    hover:bg-[#6d1010]
    transition
  ">
    Search
  </button>
</div>





   
<div className="w-auto h-full sm:grid grid-cols-1 sm:mb-10 sm:justify-center sm:items-center  md:grid-cols-2 xl:grid-cols-3 mx-10 my-10 mb-10 gap-10">
  {lodaing && <h1>Loading...</h1>}

  {!lodaing && error && <h1>Error loading units</h1>}

  {!lodaing && !error && (
    falter.length > 0 ? (
      falter.map((unit) => (
        <div key={unit.id}>
          <Card
            img={unit.images?.[0]}
            bed={unit.bedrooms}
            tru={'true'}
            bath={unit.bathrooms}
            siz={unit.size}
            title={unit.title_en}
            price={unit.price}
            Bedroom={Bedroom}
            vector={vector}
            size={size}
            prag={unit.description_en}
            ap={'units'}
            id={unit.id}
          />
        </div>
      ))
    ) : (
      <p className="col-span-3">No units found.</p>
    )
  )}
</div>
    </div>
    
    
     </>
  );
}