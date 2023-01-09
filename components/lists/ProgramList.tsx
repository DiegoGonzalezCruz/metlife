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

const ProgramList = ({
  programs,
  setProgramToModal,
  setIsProgramModalOpen
}: Programs) => {
  return (
    <div className="w-full h-fit z-30 ">
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
        grabCursor={true}
        className=" min-h-[50vh] md:min-h-full flex flex-col gap-5"
      >
        {programs.map((program, idx: any) => {
          return (
            <SwiperSlide key={program.acf.titulo}>
              <ProgramCard
                program={program}
                idx={idx}
                setProgramToModal={setProgramToModal}
                setIsProgramModalOpen={setIsProgramModalOpen}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ProgramList
