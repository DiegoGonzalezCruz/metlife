import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar, Mousewheel } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProgramList = ({
  programs,
  setProgramToModal,
  setIsProgramModalOpen
}: Programs) => {
  return (
    <div className="w-full h-fit min-h-full z-30 ">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1
            // centeredSlides: true,
            // centeredSlidesBounds: true
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4
          }
        }}
        spaceBetween={0}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, Mousewheel]}
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
