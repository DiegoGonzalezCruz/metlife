import Image from 'next/image'
import React from 'react'
import { Program, ProgramFromREST, ProgramsModal } from '../../types'
import Button from '../buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const FirstModal = ({ isModalOpen, setIsModalOpen }: any) => {
  if (isModalOpen) {
    return (
      <div
        className={`z-50 top-0 flex flex-col items-center justify-center  w-screen h-screen bg-input/50 ${
          !isModalOpen ? 'hidden' : 'fixed'
        }`}
      >
        <div className=" md:h-fit md:w-5/6 xl:w-1/2 bg-white relative rounded-xl md:mx-auto md:my-auto ">
          <div className="wrapper w-3/4 mx-auto h-full py-10 flex flex-col gap-5 ">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-primary text-2xl md:text-3xl">Atención:</h2>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-3xl text-primary cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <p className="font-Montserrat md:text-sm text-xs">
              Declaro conocer y aceptar que la orientación médica es otorgada
              por profesionales de Care Assistance, quienes asumen la
              responsabilidad por los servicios otorgados en conformidad a la
              ley, sin posterior responsabilidad de MetLife Chile Seguros de
              Vida S.A. De este modo, estoy consciente de que MetLife Chile
              Seguros de Vida S.A no tiene responsabilidad alguna ni
              intervención en cualquier orientación o recomendación médica así
              como en la prescripción de fármacos que los médicos de Care
              Assistance puedan indicarme al momento de recibir la atención de
              telemedicina.
            </p>
            <p className="font-Montserrat md:text-sm text-xs">
              Asimismo, declaro conocer que la Orientación Médica otorgada no
              sustituye los chequeos regulares de salud con el médico o
              profesional médico de su elección ni pretende reemplazar una
              atención presencial y que en caso de emergencia médica debo
              dirigirme a un centro de atención médica de urgencia de inmediato
              y que el examen físico del Usuario o Paciente que se realiza en
              forma virtual a través de la cámara del computador del Usuario o
              paciente no reemplaza a un examen físico presencial, por lo que,
              en caso de estimarse necesario, el paciente se derivará a una
              consulta médica presencial.
            </p>
            <div className=" w-2/4 mx-auto flex flex-col items-center justify-center">
              <Button
                className={'bg-primary'}
                onClick={() => setIsModalOpen(false)}
              >
                Acepto
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default FirstModal
