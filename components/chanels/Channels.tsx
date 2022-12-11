import Image from 'next/image'
import React, { useState } from 'react'
import Channel from './Channel'

const channels = [
  {
    img: '/img/channels/whatsapp.svg',
    title: 'WhatsApp',
    text: (
      <p>
        Escríbenos <br /> <b>+56 9 9968 7935</b>
      </p>
    )
  },
  {
    img: '/img/channels/videollamada.svg',
    title: 'Video llamada',
    text: (
      <p>
        Iniciar sesión para <br /> <b>ver agenda</b>
      </p>
    )
  },
  {
    img: '/img/channels/lineaexclusiva.svg',
    title: 'Línea exclusiva',
    text: (
      <p>
        Llámanos al
        <br /> <b>600 945 9800</b>
      </p>
    )
  }
]

export const Channels = () => {
  const [indexSnap, setIndexSnap] = useState<number>(0)

  return (
    <div className="w-5/6 mx-auto py-10  ">
      <div className=" text-center w-full ">
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
      <ul className=" snap-x snap-mandatory flex flex-row overflow-scroll my-5 md:gap-5 py-5 md:justify-between no-scrollbar w-full">
        {channels.map((channel, idx) => {
          return (
            <Channel
              channel={channel}
              key={channel.title}
              idx={idx}
              setIndexSnap={setIndexSnap}
            />
          )
        })}
      </ul>
      <ul className="md:hidden flex flex-row gap-5 items-center justify-center no-scrollbar">
        {channels.map((c, cidx) => {
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
  )
}
