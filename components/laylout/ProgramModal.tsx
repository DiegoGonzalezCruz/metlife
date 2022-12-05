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
        <div className="card h-3/4 mt-10 w-1/2 bg-white mx-auto relative rounded-xl">
          <div className="wrapper w-full mx-auto h-full  flex flex-col justify-between ">
            <div className=" h-1/2  flex flex-row justify-between pl-10">
              <div className=" flex flex-row items-center justify-around w-1/2 ">
                <Image
                  src={programToView.acf.icono}
                  alt={programToView.acf.titulo}
                  width={100}
                  height={100}
                />
                <h2 className="font-Montserrat text-xl text-primary  w-1/2">
                  {programToView.acf.pretitle}
                  <br />
                  <b>{programToView.acf.posttitle}</b>
                </h2>
              </div>
              <div className="w-1/2   h-full flex items-center justify-end  overflow-hidden">
                <Image
                  alt={programToView.acf.titulo}
                  src={programToView.acf.imagen_modal}
                  width={100}
                  height={100}
                  className="w-full   object-contain "
                />
              </div>
            </div>
            <div className=" h-fit w-full flex flex-col items-center justify-between px-10">
              <p className="text-secondaryDark font-Titillium  w-full">
                {programToView.acf.description}
              </p>
            </div>
            <ul className=" flex flex-row gap-2 items-center justify-between px-10">
              {contactArray.map((feat) => {
                return (
                  <li className="border border-secondaryDark px-4 py-2 rounded-xl flex flex-row items-center justify-center gap-2">
                    <Image
                      src={feat.img}
                      width={20}
                      height={40}
                      alt={feat.title}
                      className=" w-fit"
                    />
                    <p className="text-sm text-secondaryDark">{feat.title}</p>
                  </li>
                )
              })}
            </ul>
            <div className=" bg-backgroundDark py-5 px-10 flex flex-row items-center justify-between h-fit w-full gap-10">
              <p className="text-sm text-secondaryDark">
                {programToView.acf.horario}
              </p>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer text-3xl"
              />
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
