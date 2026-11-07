import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/axios-instance'
import map from '../../assets/img/map.svg'
import im8 from '../../assets/img/im8.png'
import Title from '../../Layout/Title'


export default function ZD2() {
const { id } = useParams()

  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [ind, setInd] = useState(0)

  const getProject = async () => {
    try {
      setLoading(true)

      const response = await api.get('/zone')

      const foundProject = response.data
        .flatMap(zone => zone.projects || [])
        .find(item => item.id === id)

      if (!foundProject) {
        throw new Error('Project not found')
      }

      setProject(foundProject)

    } catch (error) {
      console.log(error)
      setError(error.message)

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProject()
  }, [id])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  if (!project) return <h1>Project not found</h1>


  return (
    <>
      
       <div>
        <Title
        title={'Sawary Family Villa Project'}
        mto={'mt-10'}
        />
      <div className="w-full h-full p-10" style={{ fontFamily: "Lato, sans-serif" }}>
            <div className="grid w-full h-full  grid-cols-3 gap-1">

             <div className='w-full col-span-3 h-[500px] min-w-0'>
              <img src={project.images?.[ind]} alt={project.name_en} className="block w-full h-full object-cover rounded-[16px]"/>
             </div>




   <div className="w-full col-span-3 h-auto">
  <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

   {project.images?.slice(1).map((img, index) => (
  <img
    key={index}
    src={img}
    alt={`Project ${index + 2}`}
    className="w-full h-full object-cover rounded-[16px] cursor-pointer"
    onClick={() => setInd(index + 1)}
  />
))}
   

  </div>
</div>
      
    </div>
    </div>

  

<div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-6" style={{ fontFamily: "Lato, sans-serif" }}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full">
  <h1 className="text-red-700 text-2xl sm:text-3xl lg:text-4xl font-medium">{project.name_en}</h1>

  <img src={im8} alt="HU" className="w-auto h-[50px] object-cover rounded-t-[16px] right-0 absolute mr-20"/>
</div>

<div className="flex items-start gap-2 mt-5">

<svg width="12" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4583 9.33331C12.4583 11.0592 11.0591 12.4583 9.33325 12.4583C7.60736 12.4583 6.20825 11.0592 6.20825 9.33331C6.20825 7.60742 7.60736 6.20831 9.33325 6.20831C11.0591 6.20831 12.4583 7.60742 12.4583 9.33331Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#847D7D"/>
<path d="M9.33333 1C7.1232 1 5.00358 1.87797 3.44078 3.44078C1.87797 5.00358 1 7.1232 1 9.33333C1 11.3042 1.41875 12.5938 2.5625 14.0208L9.33333 21.8333L16.1042 14.0208C17.2479 12.5938 17.6667 11.3042 17.6667 9.33333C17.6667 7.1232 16.7887 5.00358 15.2259 3.44078C13.6631 1.87797 11.5435 1 9.33333 1Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#847D7D"/>
</svg>

<p className='text-[#847d7d] font-medium'>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
</div>




<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
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

    <div className="flex flex-col h-auto sm:ml-0 xl:ml-18">
  <h1 className='text-xl font-medium'>Overview</h1>

  <p>{project.description_en}</p>


  </div>
 </div>

</div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}
