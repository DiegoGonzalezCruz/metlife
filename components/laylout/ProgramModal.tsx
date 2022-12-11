import Image from 'next/image'
import React from 'react'
import { Program, ProgramFromREST, ProgramsModal } from '../../types'
import Button from '../buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ProgramModal = ({ program, isModalOpen, setIsModalOpen }: any) => {
  // console.log(program, '*******HERE')

  const contactArray = [
    {
      title: '600 945 9800',
      img: '/img/logos/program-features/landline.svg'
    },
    { title: '+56 9 9968 7935', img: '/img/logos/program-features/chat.svg' },
    {
      title: 'Consulta Online',
      img: '/img/logos/program-features/cellphone.svg'
    },
    {
      title: 'Agendamiento',
      img: '/img/logos/program-features/telemedicina.svg'
    }
  ]

  const programToView = program
  if (programToView) {
    return (
      <div
        className={` top-0  w-screen h-screen bg-input/60 ${
          !isModalOpen ? 'hidden' : 'fixed'
        }`}
      >
        <div className="card h-fit md:w-3/4 bg-white mx-auto  rounded-xl  relative">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsModalOpen(false)}
            className="cursor-pointer text-3xl text-input absolute top-5 right-5 z-20"
          />
          <div className="wrapper w-full mx-auto h-full  flex flex-col justify-between gap-5 ">
            <div className=" h-1/2   flex flex-row justify-between  ">
              <div className=" flex flex-row items-center justify-around w-1/2 md:w-1/3   translate-x-10 z-20">
                <Image
                  src={programToView.acf.icono_white}
                  alt={programToView.acf.icono_white}
                  width={400}
                  height={400}
                  className=" w-full"
                />
              </div>
              <div className="w-1/2  h-full md:w-1/3 flex items-center  relative ">
                <Image
                  alt={programToView.acf.titulo}
                  src={programToView.acf.imagen_modal}
                  width={400}
                  height={400}
                  className="w-full object-contain  "
                />
                <div className="absolute z-10 bg-gradient-to-r from-white/95 to-white/0 h-full w-full"></div>
              </div>
            </div>
            <div className=" h-fit w-full flex flex-col items-center justify-between px-10">
              <p className="text-primary text-center font-Titillium  w-full">
                {programToView.acf.description}
              </p>
            </div>
            <ul className=" flex md:flex-row flex-col gap-2 items-center justify-between md:px-10  px-10">
              {contactArray.map((feat) => {
                return (
                  <li
                    key={feat.img}
                    className=" border border-primary rounded-full  w-full "
                  >
                    <div className=" h-12 py-2 w-full px-2 flex md:flex-row  items-center justify-center gap-2 ">
                      <Image
                        src={feat.img}
                        width={20}
                        height={40}
                        alt={feat.title}
                        className=" w-fit h-full"
                      />
                      <p className="text-base text-primary  w-fit">
                        {feat.title}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className=" bg-backgroundDark py-5 px-10 flex flex-row items-center justify-between h-fit w-full gap-10">
              <p className="text-sm text-primary text-center">
                {programToView.acf.horario}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ProgramModal
