import { useParams } from 'react-router-dom'
import api from '../../utils/axios-instance'
import Title from '../../Layout/Title'
import zonee from '../../assets/img/zone.png'
import ap from '../../assets/img/ap.svg'
import Card from '../../Layout/Card'
import Gym from '../../assets/img/Gym.svg'
import size from '../../assets/icon/size.svg'
import React, { useEffect, useState } from 'react'
export default function DevProject() {
   const { id } = useParams()

    const [dp, setDP] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getDP = async () => {
        try {
            setLoading(true)
            setError(null)

            const apidp = await api.get(`/developer/${id}`)

            setDP(apidp.data)
            console.log(apidp.data)

        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDP()
    }, [id])

    if (loading) return <div>Loading...</div>

    if (error) return <div>Error: {error}</div>

    if (!dp) return <div>No developer found</div>



  return (
    <>
    <div>

        <Title
        title={'Developers Projects'}
        mto={'mt-10'}
        />

        <div className='w-auto m-10 rounded-3xl h-96 bg-cover' style={{backgroundImage:`url(${zonee})`}} >

        </div>
      
      
<div className="w-auto h-full sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-10 my-10 gap-10">
{dp?.projects?.length > 0 ? (
  dp.projects.map((item) => (
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
  <p className="col-span-3 text-center">
    No projects found for this developer.
  </p>
)}
          </div></div>
   
    </>
  )
}
