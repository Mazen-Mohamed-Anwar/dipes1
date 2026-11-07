import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'
export default function Footer() {
  return (
   <div className="min-h-[374px] bg-[#EBEBEB] flex flex-col items-center">
    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">

<div className="h-full"  >
      <img src={Logo} className='items-center '/> 
      <h5 className="mt-1 text-[16px]">+1(7635)547-12-97</h5>
      <h5 className="mt-3 text-[16px]">support@lift.agency</h5>
    
  </div>


   <div className="h-full font-bold"  >
     <h3>Quick Links</h3>
     <div className=""  >

    <ul className='flex-col flex mt-2  gap-3'>

    <Link to="/">
      <li className='text-gray-500 text-sm  underline-offset-2  hover:text-red-900 font-serif cursor-pointer' >Home</li></Link>
 
    <Link to="/units">
      <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer' >Units</li></Link>
 
    <Link to="/zones">
      <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer' >Zones</li></Link>
 

    <Link to="/developers">
       <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer'>Developers</li></Link>
    <Link to="/contactus">
      <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer'>Contact US</li></Link>
    </ul>
    </div>
    </div>


    <div className="h-full font-bold"  >
     <h3>About</h3>
     <div className=""  >

    <ul className='flex-col flex mt-2  gap-3'>

    <Link to="/">
      <li className='text-gray-500 text-sm  underline-offset-2  hover:text-red-900 font-serif cursor-pointer' >Grand Atlas</li></Link>
 
    <Link to="/units">
      <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer' >Privacy Policy</li></Link>
 
    <Link to="/zones">
      <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer' >Legal</li></Link>
 

    <Link to="/developers">
       <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer'>Help</li></Link>
    <Link to="/contactus">
      <li className='text-gray-500 text-sm  hover:text-red-900 font-serif cursor-pointer'>Support</li></Link>
    </ul>
    </div>
    </div>

     <div className="h-full font-bold"  >
     <h3>About</h3>
     <div className=""  >

    <div class="w-full max-w-sm mt-2 min-w-[100px]">
  <div class="relative">
    <input
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-red-800 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Get product updates" 
    />

    <button
      class="absolute top-0 right-0  h-full w-15  flex items-center justify-center rounded bg-red-800  rounded-l-none border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
     <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z" fill="white"/>
</svg>
 
    </button> 

  </div>

  <div class="relative mt-5">
    <svg width="137" height="37" viewBox="0 0 137 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M118.25 35.75C127.915 35.75 135.75 27.915 135.75 18.25C135.75 8.58502 127.915 0.75 118.25 0.75C108.585 0.75 100.75 8.58502 100.75 18.25C100.75 27.915 108.585 35.75 118.25 35.75Z" stroke="#8E1616" strokeWidth="2"/>
<path d="M123.97 15.0147C123.889 14.9229 123.758 14.8998 123.651 14.9564C123.584 14.9916 123.458 15.0378 123.309 15.0834C123.497 14.8262 123.649 14.5382 123.715 14.2793C123.744 14.1677 123.702 14.0501 123.61 13.9836C123.518 13.9177 123.396 13.9177 123.304 13.9836C123.159 14.0875 122.46 14.3997 122.018 14.5008C121.02 13.6011 119.857 13.5077 118.649 14.2331C117.667 14.8229 117.453 16.0221 117.495 16.7531C115.247 16.5305 113.85 15.3093 113.063 14.2985C113.008 14.2276 112.919 14.1903 112.836 14.1958C112.749 14.2024 112.669 14.2524 112.625 14.3299C112.253 14.9757 112.15 15.6896 112.327 16.3947C112.425 16.7795 112.595 17.1186 112.792 17.3934C112.697 17.3456 112.606 17.2857 112.52 17.2142C112.441 17.1472 112.33 17.1345 112.237 17.179C112.144 17.2247 112.084 17.3214 112.084 17.4275C112.084 18.6382 112.821 19.4462 113.508 19.8683C113.397 19.8545 113.281 19.8292 113.164 19.7924C113.064 19.7611 112.955 19.7924 112.885 19.8738C112.816 19.9546 112.799 20.07 112.843 20.1684C113.229 21.0472 113.961 21.6517 114.867 21.871C114.076 22.3486 113.017 22.5828 112.048 22.4679C111.922 22.4498 111.803 22.5317 111.763 22.6559C111.724 22.7801 111.775 22.9164 111.886 22.9801C113.357 23.8293 114.686 24.1327 115.835 24.1327C117.507 24.1327 118.797 23.4907 119.583 22.9538C121.7 21.5083 123.02 18.913 122.836 16.591C123.176 16.3332 123.683 15.8572 123.998 15.3455C124.063 15.2422 124.051 15.1059 123.97 15.0147Z" fill="#8E1616"/>
<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M68.25 35.75C77.915 35.75 85.75 27.915 85.75 18.25C85.75 8.58502 77.915 0.75 68.25 0.75C58.585 0.75 50.75 8.58502 50.75 18.25C50.75 27.915 58.585 35.75 68.25 35.75Z" stroke="#8E1616" strokeWidth="2"/>
<path d="M69.8433 13.7708H71.4517C71.5997 13.7708 71.7198 13.6576 71.7198 13.5182V12.0026C71.7198 11.8632 71.5997 11.75 71.4517 11.75H69.8433C68.2178 11.75 66.8946 12.9963 66.8946 14.5286V16.2968H65.0182C64.8702 16.2968 64.7501 16.4099 64.7501 16.5494V18.0649C64.7501 18.2044 64.8702 18.3175 65.0182 18.3175H66.8946V23.6221C66.8946 23.7615 67.0147 23.8747 67.1627 23.8747H68.7711C68.919 23.8747 69.0391 23.7615 69.0391 23.6221V18.3175H70.9156C71.0308 18.3175 71.1332 18.2478 71.1702 18.1448L71.7064 16.6292C71.7337 16.5524 71.7198 16.4675 71.6694 16.4013C71.6184 16.3357 71.538 16.2968 71.4517 16.2968H69.0391V14.5286C69.0391 14.1108 69.3999 13.7708 69.8433 13.7708Z" fill="#8E1616"/>
<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M18.25 35.75C27.915 35.75 35.75 27.915 35.75 18.25C35.75 8.58502 27.915 0.75 18.25 0.75C8.58502 0.75 0.75 8.58502 0.75 18.25C0.75 27.915 8.58502 35.75 18.25 35.75Z" stroke="#8E1616" strokeWidth="2"/>
<path d="M14.2337 14.7171C15.053 14.7171 15.7172 14.0529 15.7172 13.2335C15.7172 12.4142 15.053 11.75 14.2337 11.75C13.4143 11.75 12.7501 12.4142 12.7501 13.2335C12.7501 14.0529 13.4143 14.7171 14.2337 14.7171Z" fill="#8E1616"/>
<path d="M15.4698 15.708H12.9973C12.8608 15.708 12.75 15.8188 12.75 15.9553V23.373C12.75 23.5095 12.8608 23.6203 12.9973 23.6203H15.4698C15.6063 23.6203 15.7171 23.5095 15.7171 23.373V15.9553C15.7171 15.8188 15.6063 15.708 15.4698 15.708Z" fill="#8E1616"/>
<path d="M22.8382 15.2969C21.7814 14.9349 20.4595 15.2529 19.6668 15.8231C19.6396 15.7167 19.5427 15.6376 19.4275 15.6376H16.9549C16.8184 15.6376 16.7076 15.7484 16.7076 15.8849V23.3026C16.7076 23.4391 16.8184 23.5499 16.9549 23.5499H19.4275C19.564 23.5499 19.6747 23.4391 19.6747 23.3026V17.9717C20.0743 17.6275 20.5891 17.5178 21.0104 17.6968C21.4189 17.8694 21.6528 18.2907 21.6528 18.852V23.3026C21.6528 23.4391 21.7636 23.5499 21.9001 23.5499H24.3727C24.5091 23.5499 24.6199 23.4391 24.6199 23.3026V18.354C24.5917 16.322 23.6358 15.5699 22.8382 15.2969Z" fill="#8E1616"/>
</svg>

  </div>
</div>


    </div>
    </div>



      </div>
    <div className="mt-auto min-h-[60px] w-[80%] flex items-center justify-center border-t-2 border-gray-400">
  <h6 className="text-gray-600 text-center">
    © 2020 Lift Media. All rights reserved
  </h6>
</div>
    </div>
  )
}
