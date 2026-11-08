
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card2({ img1, img2, id }) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-3 flex justify-center">

      <div className="
        w-full
        max-w-[400px]
        min-h-[377px]
        rounded-2xl
      ">

        <div className="
          w-full
          h-full
          relative
          shadow-md
          rounded-xl
          overflow-hidden
          bg-white
        ">

          <div className="
            min-w-[100px]
            bg-red-700
            absolute
            right-3
            top-4
            rounded-md
            px-2
            py-1
            text-white
            text-center
            text-sm
            z-10
          ">
            New Cairo
          </div>

          <img
            src={img1}
            alt="HU"
            className="
              w-full
              h-[200px]
              sm:h-[250px]
              object-cover
              rounded-t-xl
            "
          />

          <div className="flex justify-start items-start py-2">
            <img
              src={img2}
              alt="HU"
              className="max-w-[90%] h-[50px] object-contain"
            />
          </div>

          <div className="px-3 py-3">
            <button
              className="
                border
                w-full
                h-[40px]
                rounded-lg
                border-[#8E1616]
                text-[#8E1616]
                hover:bg-[#8E1616]
                hover:text-white
                transition-all
              "
              onClick={() => navigate(`/devProject/${id}`)}
            >
              View Details
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
