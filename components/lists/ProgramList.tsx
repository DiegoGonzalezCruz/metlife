import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar } from 'swiper'

import { isBrowser, isMobile } from 'react-device-detect'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProgramList = ({ programs }: Programs) => {
  return (
    <div className="w-full h-full ">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2
          }
        }}
        spaceBetween={0}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        // className="w-full h-fit flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 pt-5  no-scrollbar"
        className=""
      >
        {programs.map((program, idx: any) => {
          return (
            <SwiperSlide key={program.acf.titulo}>
              <ProgramCard program={program} idx={idx} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <ul className="w-full h-fit flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 pt-5  no-scrollbar">
        {programs.map((program, idx: any) => {
          return (
            <ProgramCard
              program={program}
              key={program.acf.titulo}
              idx={idx}
              setIndexSnap={setIndexSnap}
            />
          )
        })}
      </ul> */}
      {/* <ul className=" w-full h-fit  flex flex-row items-center justify-around md:hidden">
        {bullets.map((bullet, idx) => {
          return (
            <li
              key={idx}
              className={`border border-primary h-4 w-4 rounded-full ${
                idx === indexSnap ? 'bg-primary' : 'bg-white'
              }`}
            ></li>
          )
        })}
      </ul>
      <div className="w-full mb-5 flex flex-row gap-5 items-center justify-center ">
        {indexSnap !== 0 ? (
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={back}
            className="text-2xl hover:text-primary text-input"
          />
        ) : (
          ''
        )}
        {indexSnap === programs.length - 1 ? (
          ''
        ) : (
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={forward}
            className="text-2xl hover:text-primary text-input"
          />
        )}
      </div> */}
    </div>
  )
}

export default ProgramList
