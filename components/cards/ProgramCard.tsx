import Image from 'next/image'
import { useState } from 'react'
import { Program, ProgramsModal } from '../../types'
import Button from '../buttons/Button'
import ProgramModal from '../laylout/ProgramModal'

const ProgramCard = ({
  program,
  idx,
  setIsProgramModalOpen,
  setProgramToModal
}: Program) => {
  const modalOpener = (prgm: ProgramsModal) => {
    // console.log('modal open', prgm)
    setIsProgramModalOpen(true)
    setProgramToModal(prgm)
  }

  return (
    <div className="">
      <div
        id={`programa${idx}`}
        className=" my-10 shadow-xl rounded-xl snap-start md:snap-center scroll-smooth  h-72 first:ml-10 last:mr-10 flex flex-col  mt-5 "
      >
        <div className=" my-5 w-full h-full flex flex-col items-stretch justify-around px-5 ">
          <div className=" w-full h-full  flex flex-col gap-5  ">
            <Image
              src={program.acf.imagen}
              alt={program.acf.titulo}
              width={150}
              height={150}
              className="rounded-full mx-auto  h-24 w-fit "
            />
            <div className=" w-full h-fit text-center  ">
              <h2 className=" text-primary text-xl md:text-sm font-normal font-Montserrat ">
                {program.acf.pretitle}
                <br />
                <span
                  className={`text-primary text-base 
                  ${
                    program.acf.posttitle === 'Hospitalización domiciliaria' ||
                    program.acf.posttitle === 'Salud Sexual'
                      ? 'md:text-base'
                      : 'md:text-xl'
                  } 
                  font-Montserrat font-bold `}
                >
                  {program.acf.posttitle}
                </span>{' '}
              </h2>
            </div>
          </div>
          <div className=" w-fit mx-auto h-fit flex flex-col gap-5 justify-end z-40 relative">
            <Button
              onClick={() => modalOpener(program as any)}
              className="bg-secondary text-sm z-40"
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
