import React, { useEffect, useState } from 'react'
import api from '../../utils/axios-instance'
import { create } from 'axios';
import Hero from '../../Layout/Hero'
import Card2 from '../../Layout/Card2'
import axios from 'axios';
import im8 from '../../assets/img/im8.png'
import Dev from '../../assets/img/Dev.png'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Developers() {
 const { id } = useParams()
  const[devs,setDev]=useState([])
  const[lodaing,setLoding]=useState(true)  
  const[error,setError]=useState(null)
  
  const navigate=useNavigate()


  const getdev=async()=>{
  try{
    const deve=await api.get("/developer")
    setDev(deve.data)
    console.log(deve.data)
    setLoding(false)
    
  }catch(error){
    setError(error)
    setLoding(false)

  }
}

useEffect(()=>{
  getdev()
  
},[])


  return (
   <>
      <div>
         <Hero
             
             
              btn={false}
                    img={Dev}
                    title={"Defining the Future "}
                    title2={"Skyline."}
                    ds={"Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."}
                    icon={true}
             
             
             />

<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-6
  px-4
  my-20
">
              {lodaing && <h1>Loading...</h1>}
      
        {!lodaing && error && <h1>Error loading Dev</h1>}
      
      {!lodaing && !error && devs?.length > 0 ? (

  devs.map(item => (
    <div key={item.id}>

              <Card2
              
              img1={item.images}
              img2={im8}
              id={item.id}
              
              />

             </div>
                 
  ))
) : (
  <p className="col-span-3">No units found.</p>
)}

      </div>
      </div>
             
  </>       
  )
}
