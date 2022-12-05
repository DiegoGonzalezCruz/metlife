import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className=" w-full mx-auto h-fit md:h-full bg-backgroundDark flex flex-col ">
      <div className="w-5/6  h-full flex flex-col items-center justify-center mx-auto ">
        <div className="flex flex-row justify-between items-center py-5 w-full  ">
          <Image
            src="/img/logos/metlife.png"
            alt="metlife"
            width={50}
            height={20}
            className=" h-fit w-1/3 md:h-5 md:w-fit"
          />
          <Image
            src="/img/logos/poweredCA.png"
            alt="metlife"
            width={80}
            height={20}
            className=" h-fit w-1/3 md:h-10 md:w-fit"
          />
        </div>
        <div className="w-full flex flex-row  gap-5 my-2 ">
          <p className="text-xs text-primary font-Titillium ">
            Políticas de Privacidad
          </p>
          <p className="text-xs text-primary font-Titillium">
            Términos y condiciones
          </p>
        </div>
        <div className=" flex flex-row  gap-0  w-full items-end justify-between md:self-start mb-2 ">
          <div className="flex gap-5">
            <p className="font-Titillium text-xs font-bold ">
              Chile / Compañías MetLife.
            </p>
            <p className="font-Titillium text-xs ">
              <b className="font-bold text-xs">Atención Telefónica: </b>
              Lunes a Jueves 9:00 a 17:00 hrs. Viernes 9:00 a 15:00 hrs.
            </p>
            <p className="font-Titillium text-xs">
              <b className="font-bold text-xs">Desde teléfonos fijos: </b>
              600 390 3000.
              <b className="font-bold text-xs ">
                {' '}
                Desde teléfonos celulares o el extranjero:
              </b>{' '}
              +56 2 2826 4790.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
