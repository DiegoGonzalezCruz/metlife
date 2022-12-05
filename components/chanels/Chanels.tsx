import Image from 'next/image'
import React from 'react'

const channels = [
  {
    img: '/img/channels/Whatsapp.svg',
    title: 'WhatsApp'
  },
  {
    img: '/img/channels/videollamada.svg',
    title: 'Video llamada'
  },
  {
    img: '/img/channels/lineaexclusiva.svg',
    title: 'Línea exclusiva'
  }
]

export const Chanels = () => {
  return (
    <div className="w-5/6 mx-auto py-10  ">
      <div className=" text-center">
        <h2 className="text-primary text-xl font-Titillium font-normal">
          Canales
        </h2>
        <span className="text-secondaryDark font-Montserrat font-bold text-3xl">
          exclusivos
        </span>
      </div>
      <p className="w-full mx-auto text-black text-center py-5 text-base font-medium">
        Ponemos a tu disposición, canales de atención exclusivos y recursos de
        comunicación estratégica, creados a la medida de tus necesidades.
      </p>
      <ul className=" snap-x snap-mandatory flex flex-row overflow-scroll my-5 md:gap-5 py-5 md:justify-between ">
        {channels.map((channel) => {
          return (
            <li
              key={channel.title}
              className="  rounded-xl shrink-0 w-full md:w-1/4  md:shadow-xl  snap-start flex flex-col items-center  gap-5 py-5 "
            >
              <Image
                src={channel.img}
                width={80}
                height={80}
                alt={channel.title}
                className="h-24 w-full "
              />
              <h2 className="text-secondaryDark text-xl font-Fira text-center">
                {channel.title}
              </h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
