import Image from 'next/image'
import React, { useState } from 'react'
import ButtonWhite from '../buttons/ButtonWhite'
import BenefitCard from '../cards/BenefitCard'

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
        <div className="flex items-center justify-center my-5  ">
          <h2 className="text-primary text-xl font-Montserrat font-normal text-center">
            Explora
            <br />
            <span className="text-secondaryDark text-3xl font-Montserrat font-bold text-center">
              más beneficios
            </span>
          </h2>
        </div>
        <ul className="flex flex-row items-start justify-between gap-10 snap-x snap-mandatory w-full h-full  overflow-scroll no-scrollbar py-5">
          {benefits.map((benefit, idx) => {
            return (
              <BenefitCard
                benefit={benefit}
                setIndexSnap={setIndexSnap}
                idx={idx}
                key={benefit.img}
              />
            )
          })}
        </ul>
        <ul className="md:hidden flex flex-row gap-5 items-center justify-center no-scrollbar">
          {benefits.map((c, cidx) => {
            return (
              <li
                key={cidx}
                className={`h-4 w-4 ${
                  cidx === indexSnap ? 'bg-primary' : 'bg-white'
                } border border-primary rounded-full`}
              ></li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
