import Hero from '../../Layout/Hero'
import hero from '../../assets/img/hero.png'
import im1 from '../../assets/img/im1.png'
import im2 from '../../assets/img/im2.png'
import im3 from '../../assets/img/im3.png'
import im9 from '../../assets/img/im9.png'
import im10 from '../../assets/img/im10.png'
import stwo from '../../assets/img/stwo.png'
import Title from '../../Layout/Title'
import Card from '../../Layout/Card'
import im6 from '../../assets/img/im6.png'
import im8 from '../../assets/img/im8.png'
import React, { useState, useEffect } from 'react'



export default function Home() {


const images = [
  im1,
  im2,
  im3,
  im2,
  im1
];

const imag = [
  im9,
  im10,
  im9,
   im10,
  im9,

];

  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(
    window.innerWidth >= 768 ? 3 : 1
  );

  const maxIndex = images.length - itemsPerView;

  // Responsive
  useEffect(() => {
    function handleResize() {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
      setIndex(0);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  



  const [index1, setIndex1] = useState(0);
  const [itemsPerView1, setItemsPerView1] = useState(
    window.innerWidth >= 768 ? 3 : 1
  );

  const maxIndex1 = imag.length - itemsPerView1;

  // Responsive
  useEffect(() => {
    function handleResize() {
      setItemsPerView1(window.innerWidth >= 768 ? 3 : 1);
      setIndex(0);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    




 
    <div>
     <Hero
     
     
      btn={true}
            img={hero}
            title={"Redefining the Horizon"}
            title2={"of Modern Luxury Living"}
            ds={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
            icon={true}
     
     
     
     
     />
      {/* First one */}
<div className='h-auto  flex justify-center items-center flex-col'>


<Title title={"Benchmarks of Success"} mto={"mt-[50px]"}/>

 <div className=" h-full w-[95%] mt-10 justify-center  flex-row grid sm:grid-rows-1 md:grid-cols-2 xl:grid-cols-4 lg:justify-center lg:items-center   gap-10 md-gap-5 "  >


<div className='w-[325px] h-[143px] flex flex-col justify-center items-center bg-[#fff] rounded-[12px] border border-2 border-gray-300  shadow shadow-md shadow-gray-300'>
<svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1111 17.7H23.6V13.7666C23.6013 13.0717 23.878 12.4044 24.3696 11.9127C24.86 11.4224 25.5273 11.1457 26.2222 11.1444H44.5778C45.2727 11.1457 45.94 11.4211 46.4317 11.9127C46.9234 12.4044 47.1987 13.0717 47.2 13.7666V45.2333C47.1987 45.9282 46.922 46.5955 46.4317 47.0859C45.94 47.5776 45.2727 47.8542 44.5778 47.8555H13.1111C12.4162 47.8542 11.7502 47.5776 11.2585 47.0859C10.7668 46.5942 10.4902 45.9282 10.4889 45.2333V20.3222C10.4902 19.6273 10.7668 18.9599 11.2585 18.4683C11.7489 17.9779 12.4162 17.7013 13.1111 17.7ZM32.7778 45.2333H38.0222V38.6777H32.7778V45.2333ZM26.2222 45.2333H30.1556V38.6777C30.1569 37.9829 30.4335 37.3155 30.9252 36.8251C31.4155 36.3335 32.0829 36.0568 32.7778 36.0555H38.0222C38.7171 36.0568 39.3845 36.3335 39.8761 36.8251C40.3665 37.3155 40.6431 37.9829 40.6444 38.6777V45.2333H44.5778L44.5791 13.7666H26.2222V45.2333ZM13.1111 45.2333H23.6V20.3222H13.1111V45.2333ZM30.1556 29.5C30.1556 29.7596 30.2329 30.0126 30.3771 30.2289C30.52 30.444 30.7259 30.6118 30.9645 30.7114C31.2044 30.8111 31.468 30.836 31.7223 30.7862C31.9767 30.735 32.2101 30.6105 32.3936 30.4269C32.5772 30.2434 32.7017 30.01 32.7529 29.7556C32.8027 29.5013 32.7778 29.2377 32.6781 28.9978C32.5785 28.7592 32.4107 28.5533 32.1956 28.4104C31.9793 28.2662 31.7263 28.1889 31.4667 28.1889C31.1192 28.1889 30.7849 28.3265 30.5397 28.573C30.2932 28.8182 30.1556 29.1525 30.1556 29.5ZM30.1556 24.2555C30.1556 24.5151 30.2329 24.7682 30.3771 24.9845C30.52 25.1995 30.7259 25.3673 30.9645 25.467C31.2044 25.5666 31.468 25.5915 31.7223 25.5417C31.9767 25.4906 32.2101 25.366 32.3936 25.1825C32.5772 24.9989 32.7017 24.7655 32.7529 24.5112C32.8027 24.2568 32.7778 23.9933 32.6781 23.7534C32.5785 23.5147 32.4107 23.3089 32.1956 23.166C31.9793 23.0218 31.7263 22.9444 31.4667 22.9444C31.1192 22.9444 30.7849 23.0821 30.5397 23.3286C30.2932 23.5737 30.1556 23.9081 30.1556 24.2555ZM30.1556 19.0111C30.1556 19.2707 30.2329 19.5237 30.3771 19.7401C30.52 19.9551 30.7259 20.1229 30.9645 20.2225C31.2044 20.3222 31.468 20.3471 31.7223 20.2973C31.9767 20.2461 32.2101 20.1216 32.3936 19.938C32.5772 19.7545 32.7017 19.5211 32.7529 19.2667C32.8027 19.0124 32.7778 18.7489 32.6781 18.5089C32.5785 18.2703 32.4107 18.0645 32.1956 17.9215C31.9793 17.7773 31.7263 17.7 31.4667 17.7C31.1192 17.7 30.7849 17.8376 30.5397 18.0841C30.2932 18.3293 30.1556 18.6636 30.1556 19.0111ZM38.0222 29.5C38.0222 29.7596 38.0996 30.0126 38.2438 30.2289C38.3867 30.444 38.5926 30.6118 38.8312 30.7114C39.0711 30.8111 39.3346 30.836 39.589 30.7862C39.8434 30.735 40.0767 30.6105 40.2603 30.4269C40.4438 30.2434 40.5684 30.01 40.6195 29.7556C40.6694 29.5013 40.6444 29.2377 40.5448 28.9978C40.4452 28.7592 40.2773 28.5533 40.0623 28.4104C39.846 28.2662 39.5929 28.1889 39.3333 28.1889C38.9859 28.1889 38.6516 28.3265 38.4064 28.573C38.1599 28.8182 38.0222 29.1525 38.0222 29.5ZM38.0222 24.2555C38.0222 24.5151 38.0996 24.7682 38.2438 24.9845C38.3867 25.1995 38.5926 25.3673 38.8312 25.467C39.0711 25.5666 39.3346 25.5915 39.589 25.5417C39.8434 25.4906 40.0767 25.366 40.2603 25.1825C40.4438 24.9989 40.5684 24.7655 40.6195 24.5112C40.6694 24.2568 40.6444 23.9933 40.5448 23.7534C40.4452 23.5147 40.2773 23.3089 40.0623 23.166C39.846 23.0218 39.5929 22.9444 39.3333 22.9444C38.9859 22.9444 38.6516 23.0821 38.4064 23.3286C38.1599 23.5737 38.0222 23.9081 38.0222 24.2555ZM38.0222 19.0111C38.0222 19.2707 38.0996 19.5237 38.2438 19.7401C38.3867 19.9551 38.5926 20.1229 38.8312 20.2225C39.0711 20.3222 39.3346 20.3471 39.589 20.2973C39.8434 20.2461 40.0767 20.1216 40.2603 19.938C40.4438 19.7545 40.5684 19.5211 40.6195 19.2667C40.6694 19.0124 40.6444 18.7489 40.5448 18.5089C40.4452 18.2703 40.2773 18.0645 40.0623 17.9215C39.846 17.7773 39.5929 17.7 39.3333 17.7C38.9859 17.7 38.6516 17.8376 38.4064 18.0841C38.1599 18.3293 38.0222 18.6636 38.0222 19.0111Z" fill="#8E1616"/>
</svg>
<h1 className='text-3xl font-bold'>48</h1>
<p className=' text-gray-500 font-bold' style={{ fontFamily: "Lato, sans-serif" }}>Properties Managed</p>
  </div>

<div className='w-[325px] h-[143px] flex flex-col justify-center items-center bg-[#fff] rounded-[12px] border border-2 border-gray-300  shadow shadow-md shadow-gray-300'>
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2515 10.6156C18.0502 10.0438 17.6765 9.54858 17.1818 9.19818C16.6872 8.84778 16.096 8.65951 15.4898 8.65935H13.2202C12.5763 8.66115 11.9557 8.90042 11.4773 9.33132C10.9989 9.76222 10.6962 10.3545 10.6273 10.9946C10.5584 11.6348 10.7281 12.2779 11.1038 12.8008C11.4796 13.3236 12.035 13.6895 12.6638 13.8283L16.1136 14.5838C16.8195 14.7379 17.4436 15.1475 17.8657 15.7338C18.2879 16.3202 18.4784 17.0419 18.4007 17.7602C18.3229 18.4785 17.9824 19.1428 17.4445 19.6252C16.9066 20.1076 16.2094 20.3742 15.4869 20.3736H13.5335C12.9281 20.3739 12.3374 20.1865 11.8428 19.8372C11.3483 19.4879 10.9741 18.9939 10.7719 18.4232M14.5146 8.65935V5.73077M14.5146 23.3022V20.3736M20.0994 39.3127V23.9377C20.0994 22.9668 20.4851 22.0357 21.1716 21.3492C21.8581 20.6627 22.7892 20.277 23.7601 20.277C24.731 20.277 25.6621 20.6627 26.3486 21.3492C27.0351 22.0357 27.4208 22.9668 27.4208 23.9377V31.9913H33.278C34.8314 31.9913 36.3212 32.6084 37.4196 33.7068C38.518 34.8052 39.1351 36.295 39.1351 37.8484V39.3127" stroke="#8E1616" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5175 27.7887C11.8156 27.7884 9.17811 26.9631 6.95778 25.4234C4.73745 23.8837 3.04007 21.7029 2.09259 19.1725C1.14511 16.6421 0.992677 13.8827 1.65568 11.2634C2.31868 8.644 3.76552 6.28946 5.80275 4.51454C7.83998 2.73963 10.3705 1.62893 13.056 1.33095C15.7415 1.03297 18.4539 1.56191 20.8307 2.84705C23.2075 4.1322 25.1353 6.11229 26.3564 8.52259C27.5774 10.9329 28.0336 13.6585 27.6639 16.3351" stroke="#8E1616" stroke-width="2.5" stroke-linecap="round"/>
</svg>

<h1 className='text-3xl font-bold'>90M</h1>
<p className=' text-gray-500 font-bold' style={{ fontFamily: "Lato, sans-serif" }}>Total Managed Investments</p>
  </div>

  <div className='w-[325px] h-[143px] flex flex-col justify-center items-center bg-[#fff] rounded-[12px] border border-2 border-gray-300  shadow shadow-md shadow-gray-300'>
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5312 16.8564C11.5312 17.3662 11.7337 17.855 12.0942 18.2154C12.4546 18.5758 12.9434 18.7783 13.4531 18.7783C13.9628 18.7783 14.4517 18.5758 14.8121 18.2154C15.1725 17.855 15.375 17.3662 15.375 16.8564C15.375 16.3467 15.1725 15.8579 14.8121 15.4975C14.4517 15.1371 13.9628 14.9346 13.4531 14.9346C12.9434 14.9346 12.4546 15.1371 12.0942 15.4975C11.7337 15.8579 11.5312 16.3467 11.5312 16.8564ZM25.625 16.8564C25.625 17.3662 25.8275 17.855 26.1879 18.2154C26.5483 18.5758 27.0372 18.7783 27.5469 18.7783C28.0566 18.7783 28.5454 18.5758 28.9058 18.2154C29.2663 17.855 29.4688 17.3662 29.4688 16.8564C29.4688 16.3467 29.2663 15.8579 28.9058 15.4975C28.5454 15.1371 28.0566 14.9346 27.5469 14.9346C27.0372 14.9346 26.5483 15.1371 26.1879 15.4975C25.8275 15.8579 25.625 16.3467 25.625 16.8564ZM20.5 2.5625C10.5943 2.5625 2.5625 10.5943 2.5625 20.5C2.5625 30.4057 10.5943 38.4375 20.5 38.4375C30.4057 38.4375 38.4375 30.4057 38.4375 20.5C38.4375 10.5943 30.4057 2.5625 20.5 2.5625ZM31.0303 31.0303C29.6609 32.3996 28.0674 33.4727 26.2937 34.2254C24.4639 35.0021 22.514 35.3945 20.5 35.3945C18.486 35.3945 16.5361 35.0021 14.7023 34.2254C12.9313 33.4774 11.3226 32.3923 9.96572 31.0303C8.59639 29.6609 7.52334 28.0674 6.77061 26.2937C5.99785 24.4639 5.60547 22.514 5.60547 20.5C5.60547 18.486 5.99785 16.5361 6.77461 14.7023C7.52257 12.9313 8.60774 11.3226 9.96973 9.96572C11.3391 8.59639 12.9326 7.52334 14.7063 6.77061C16.5361 5.99785 18.486 5.60547 20.5 5.60547C22.514 5.60547 24.4639 5.99785 26.2977 6.77461C28.0687 7.52257 29.6774 8.60774 31.0343 9.96973C32.4036 11.3391 33.4767 12.9326 34.2294 14.7063C35.0021 16.5361 35.3945 18.486 35.3945 20.5C35.3945 22.514 35.0021 24.4639 34.2254 26.2977C33.4783 28.068 32.393 29.6756 31.0303 31.0303ZM26.5859 21.3408H24.6601C24.4919 21.3408 24.3478 21.4689 24.3357 21.6371C24.1836 23.619 22.522 25.1846 20.5 25.1846C18.478 25.1846 16.8124 23.619 16.6643 21.6371C16.6522 21.4689 16.5081 21.3408 16.3399 21.3408H14.4141C14.3706 21.3408 14.3276 21.3496 14.2877 21.3666C14.2477 21.3837 14.2117 21.4088 14.1817 21.4402C14.1517 21.4717 14.1285 21.5089 14.1134 21.5496C14.0983 21.5904 14.0916 21.6338 14.0938 21.6771C14.2699 25.0524 17.0767 27.7471 20.5 27.7471C23.9233 27.7471 26.7301 25.0524 26.9062 21.6771C26.9084 21.6338 26.9017 21.5904 26.8866 21.5496C26.8715 21.5089 26.8483 21.4717 26.8183 21.4402C26.7883 21.4088 26.7523 21.3837 26.7123 21.3666C26.6724 21.3496 26.6294 21.3408 26.5859 21.3408Z" fill="#8E1616"/>
</svg>

<h1 className='text-3xl font-bold'>500</h1>
<p className=' text-gray-500 font-bold' style={{ fontFamily: "Lato, sans-serif" }}>Happy Clients</p>
  </div>

  <div className='w-[325px] h-[143px] flex flex-col justify-center items-center bg-[#fff] rounded-[12px] border border-2 border-gray-300  shadow shadow-md shadow-gray-300'>
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 23.5219L22.5875 25.3906C22.8854 25.5802 23.1833 25.5737 23.4812 25.3711C23.7792 25.1685 23.8875 24.8907 23.8062 24.5375L22.9937 21.0031L25.7563 18.6062C26.0271 18.3625 26.1083 18.0716 26 17.7336C25.8917 17.3956 25.6479 17.2125 25.2688 17.1844L21.6531 16.9L20.2312 13.5688C20.0958 13.2438 19.8521 13.0813 19.5 13.0813C19.1479 13.0813 18.9042 13.2438 18.7688 13.5688L17.3469 16.9L13.7312 17.1844C13.3521 17.2115 13.1083 17.3945 13 17.7336C12.8917 18.0727 12.9729 18.3636 13.2437 18.6062L16.0063 21.0031L15.1938 24.5375C15.1125 24.8896 15.2208 25.1675 15.5188 25.3711C15.8167 25.5748 16.1146 25.5813 16.4125 25.3906L19.5 23.5219ZM14.0562 32.5H9.75C8.85625 32.5 8.09142 32.182 7.4555 31.5461C6.81958 30.9102 6.50108 30.1448 6.5 29.25V24.9438L3.37188 21.775C3.07396 21.45 2.84375 21.0914 2.68125 20.6992C2.51875 20.3071 2.4375 19.9073 2.4375 19.5C2.4375 19.0927 2.51875 18.6935 2.68125 18.3024C2.84375 17.9113 3.07396 17.5522 3.37188 17.225L6.5 14.0562V9.75C6.5 8.85625 6.8185 8.09142 7.4555 7.4555C8.0925 6.81958 8.85733 6.50108 9.75 6.5H14.0562L17.225 3.37188C17.55 3.07396 17.9091 2.84375 18.3024 2.68125C18.6956 2.51875 19.0948 2.4375 19.5 2.4375C19.9052 2.4375 20.3049 2.51875 20.6992 2.68125C21.0936 2.84375 21.4522 3.07396 21.775 3.37188L24.9438 6.5H29.25C30.1437 6.5 30.9091 6.8185 31.5461 7.4555C32.1831 8.0925 32.5011 8.85733 32.5 9.75V14.0562L35.6281 17.225C35.926 17.55 36.1562 17.9091 36.3188 18.3024C36.4813 18.6956 36.5625 19.0948 36.5625 19.5C36.5625 19.9052 36.4813 20.3049 36.3188 20.6992C36.1562 21.0936 35.926 21.4522 35.6281 21.775L32.5 24.9438V29.25C32.5 30.1437 32.182 30.9091 31.5461 31.5461C30.9102 32.1831 30.1448 32.5011 29.25 32.5H24.9438L21.775 35.6281C21.45 35.926 21.0914 36.1562 20.6992 36.3188C20.3071 36.4813 19.9073 36.5625 19.5 36.5625C19.0927 36.5625 18.6935 36.4813 18.3024 36.3188C17.9113 36.1562 17.5522 35.926 17.225 35.6281L14.0562 32.5ZM15.4375 29.25L19.5 33.3125L23.5625 29.25H29.25V23.5625L33.3125 19.5L29.25 15.4375V9.75H23.5625L19.5 5.6875L15.4375 9.75H9.75V15.4375L5.6875 19.5L9.75 23.5625V29.25H15.4375Z" fill="#8E1616"/>
</svg>

<h1 className='text-3xl font-bold'>99%</h1>
<p className=' text-gray-500 font-bold' style={{ fontFamily: "Lato, sans-serif" }}>Client Satisfaction</p>
  </div>

 </div>

    </div>
{/* First two */}

<div className='h-auto  mb-10 flex  items-center flex-col '>

  

<Title title={"About Grand Atlas"} mto={"mt-[50px]"}/>

<div className="mt-20 w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

  {/* Image */}
  <div
    className="w-full min-h-[300px] md:min-h-[500px] border-4 border-red-800 rounded-t-[40px] bg-cover bg-center"
    style={{ backgroundImage: `url(${stwo})` }}
  >
  </div>

  {/* Content */}
  <div className="flex flex-col justify-center mt-5 lg:mt-0">

    <p className="text-gray-500 text-lg md:text-xl lg:text-2xl leading-8 lg:leading-10" style={{ fontFamily: "Lato, sans-serif" }}>
      We began with a singular, uncompromising vision: to bridge the gap
      between world-class architecture and the individuals who define our
      global culture. We recognized that for the discerning client, a home
      is rarely just a physical structure; it is a curated environment, a
      private gallery, and the ultimate expression of a life well-lived.
      Our journey started not in the pursuit of transactions, but in the
      pursuit of excellence. We set out to dismantle the traditional,
      high-volume real estate model in favor of a bespoke, 'private office'
      approach—one where quality always supersedes quantity, and where every
      client is treated as the sole focus of our firm.
      We don't just find you a home; we secure your peace of mind through
      a veil of absolute professional confidentiality.
    </p>

    <div className="mt-5 flex justify-center lg:justify-start">
      <button className="bg-gradient-to-r from-red-950 to-red-400 w-60 h-10 rounded-sm text-xl font-medium text-white">
        Know More
      </button>
    </div>

  </div>

</div>


</div>



<Title title={"Hand-Selected Masterpieces"} mto={"mt-[150px]"}/>


<div className="w-auto overflow-hidden my-20 mx-10">

      <div
        className="flex transition-transform duration-400"
        style={{
          transform: `translateX(-${index * (100 / itemsPerView)}%)`
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="shrink-0 px-2"
            style={{ width: `${100 / itemsPerView}%` }}
          >
            <img
              src={img}
              className="w-full h-64 object-cover rounded-xl"
              alt=""
            />
           
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-5">

      {Array.from({ length: 3 }).map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`h-3 rounded-full transition-all duration-300 ${
        index === i
          ? "bg-red-900 w-8"
          : "bg-gray-300 w-3"
      }`}
    />
  ))}


      </div>

    </div>


<Title title={"Strategic Locations"} mto={"mt-[150px] mb-[40px]"}/>
<div className="w-full mb-[70px]  ">

<img src={im6} className='w-full bg-accent h-[350px]'></img>

</div>







<Title title={"Future Landmarks"} mto={"mt-[150px]"}/>


<div className="w-auto overflow-hidden my-20 mx-20">

      <div
        className="flex transition-transform duration-400"
        style={{
          transform: `translateX(-${index1 * (100 / itemsPerView1)}%)`
        }}
      >
        {imag.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-full"
            style={{ width: `${100 / itemsPerView1}%` }}
          >

        <div className='w-[400px] h-[377px]   rounded-2xl grid-cols-[50px_25px_40px] justify-center items-center  '>

       <div className='w-full h-full shadow-md rounded-xl'>
        
        <img src={img} alt="HU" className="w-full h-[250px] object-none rounded-t-[16px]"/>
         <img src={im8} alt="HU" className="w-auto h-[50px] object-cover rounded-t-[16px]"/>

          <div className='w-auto  mx-2 mt-5  '>
                <button className='border w-full h-[40px] rounded-[8px] border-[#8E1616] text-[#8E1616]'
                onClick={()=>navigate(`/units/${id}`)}
                >View Details</button>
              </div>
       </div>
       </div>
            </div>
  
            
        
           
        
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-5">

      {Array.from({ length: 3 }).map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex1(i)}
      className={`h-3 rounded-full transition-all duration-300 ${
        index1 === i
          ? "bg-red-900 w-8"
          : "bg-gray-300 w-3"
      }`}
    />
  ))}


      </div>

    </div>



    </div></>
   );
   }

