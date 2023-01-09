import React, { useState } from 'react'
import BenefitCard from '../cards/BenefitCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper'

const benefits = [
  {
    img: '/img/sliders/explore1.png',
    description: 'Chequea tu estado de salud',
    text: 'Iniciar test'
  },
  {
    img: '/img/sliders/explore2.png',
    description: 'Compra tus medicamentos',
    text: 'Ver descuentos'
  },
  {
    img: '/img/sliders/explore3.png',
    description: 'Próximos lanzamientos',
    text: 'Leer Más'
  }
]

export const Explore = () => {
  const [indexSnap, setIndexSnap] = useState<number>(0)

  return (
    <div className="w-full my-10 h-full ">
      <div className="w-5/6 mx-auto h-full ">
        <div className="flex items-center justify-center my-5   ">
          <h2 className="text-primary text-xl font-Montserrat font-normal text-center">
            Explora
            <br />
            <span className="text-secondaryDark text-3xl font-Montserrat font-bold text-center">
              más beneficios
            </span>
          </h2>
        </div>

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          spaceBetween={50}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar, Mousewheel]}
          grabCursor={true}
          // className=" min-h-[50vh] md:min-h-full flex flex-col gap-5"
          className=" min-h-[45vh] w-full flex flex-row  justify-around  items-stretch  "
        >
          {benefits.map((benefit, idx) => {
            return (
              <SwiperSlide key={benefit.img} className=" ">
                <BenefitCard
                  benefit={benefit}
                  setIndexSnap={setIndexSnap}
                  idx={idx}
                  key={benefit.img}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
