import { useParams } from 'react-router-dom'
import api from '../../utils/axios-instance'
import Title from '../../Layout/Title'
import zonee from '../../assets/img/zone.png'
import ap from '../../assets/img/ap.svg'
import Card from '../../Layout/Card'
import Gym from '../../assets/img/Gym.svg'
import size from '../../assets/icon/size.svg'
import React, { useEffect, useState } from 'react'

export default function ZoneDetails() {
    const { id } = useParams()

    const [zone, setZone] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getZone = async () => {
        try {
            setLoading(true)
            setError(null)

            const apiZone = await api.get(`/zone/${id}`)

            setZone(apiZone.data)
            console.log(apiZone.data)

        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getZone()
    }, [id])

    if (loading) return <div>Loading...</div>

    if (error) return <div>Error: {error}</div>

    if (!zone) return <div>No zone found</div>



  return (
    <>
    <div>

        <Title
        title={'Zone Projects'}
        mto={'mt-10'}
        />

        <div className='w-auto m-10 rounded-3xl h-96 bg-cover' style={{backgroundImage:`url(${zonee})`}} >

        </div>
      
      
      <div className="w-auto h-full sm:grid grid-cols-1 sm:mb-10 sm:justify-center sm:items-center  md:grid-cols-2 xl:grid-cols-3 mx-10 my-10 mb-10 gap-10">
        {loading && <h1>Loading...</h1>}
      
        {!loading && error && <h1>Error loading units</h1>}
      
      {!loading && !error && zone?.projects?.length > 0 ? (

  zone.projects.map(item => (
    <div key={item.id}>
      <Card
        img={item.images?.[0]}
        title={item.name_en}
        Bedroom={ap}
        bed={'50'}
        bath={'0'}
        siz={'150m'}
        vector={Gym}
        size={size}
        prag={item.description_en}
        ap={'zd2'}
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
