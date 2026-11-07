import Hero from '../../Layout/Hero'
import HZ from '../../assets/img/HZ.png'
import api from './../../utils/axios-instance'
import { useNavigate } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { create } from 'axios';
import axios from 'axios';
export default function Zones() {

  const navigate=useNavigate()
  const [zones,setZones]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  
  const getZones=async ()=>{ 
    try{
    const zo=await api.get("/zone")
    console.log(zo.data)
    setZones(zo.data)
    setLoading(false)


  }catch(error){
  setLoading(false)
  console.log("Error: ",error)
  setError(error)
}

   

  
}

  useEffect(()=>{
  
      getZones()}
  
    ,[])


  return (
    <>
    <div>
       <Hero
           
           
            btn={false}
                  img={HZ}
                  title={"Destinations Defined by"}
                  title2={"Distinction"}
                  ds={"From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."}
                  icon={true}
           
           
           
           
           />
    </div>

  
  
     {loading && <h1>Loading...</h1>}
      {!loading && error && <h1>Error loading zones</h1>}
    

        
<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  mb-10
  w-auto
  h-auto
gap-10
  mt-10
  mx-4
  lg:mx-5
  overflow-hidden
">

  
       { zones.map((zone)=>{
          return(
            <div key={zone.id} >
              <img src={zone.images} className='w-full h-48 rounded-xl mb-10' alt='zones' onClick={()=>navigate(`/zones/${zone.id}`)}></img>
              <img src={zone.images} className='w-full h-48 rounded-xl' alt='zones  ' onClick={()=>navigate(`/zones/${zone.id}`)}></img>
              

            </div>
          )

        })
      }

    </div>
   
    
    
    </>
  )
}
