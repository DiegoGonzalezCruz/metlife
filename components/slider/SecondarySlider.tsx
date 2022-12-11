import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'

const features = [
  {
    description:
      'Compra aquí el medicamento genérico que necesitas y aprovecha el descuento que tenemos para ti.',
    img: '/img/sliders/doctor.png'
  }
]

export const SecondarySlider = () => {
  return (
    <div className="w-full md:h-full ">
      <ul className="w-full h-full ">
        {features.map((feat) => {
          return (
            <li
              key={feat.description}
              className="bg-primary flex flex-col md:flex-row-reverse items-center justify-between  w-full h-full "
            >
              <Image
                src={feat.img}
                width={400}
                height={300}
                alt={feat.description}
                className="w-full md:w-1/2 md:h-full  object-cover"
              />
              <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 h-full py-5   ">
                <div className="w-3/4 mx-auto flex flex-col gap-5 ">
                  <p className="text-white text-center">{feat.description}</p>

                  <Button className="font-Montserrat font-bold">
                    Llévame ahí
                  </Button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
