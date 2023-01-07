import Image from 'next/image'
import { useState } from 'react'
import { Program, ProgramsModal } from '../../types'
import Button from '../buttons/Button'
import ProgramModal from '../laylout/ProgramModal'
import { useInView } from 'react-intersection-observer'

const ProgramCard = ({ program, idx, setIndexSnap }: Program) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [programToModal, setProgramToModal] = useState<ProgramsModal>()

  const modalOpener = (prgm: ProgramsModal) => {
    // console.log('modal open', prgm)
    setIsModalOpen(true)
    setProgramToModal(prgm)
  }

  return (
    <>
      <div
        id={`programa${idx}`}
        className=" shadow-xl rounded-xl snap-start md:snap-center scroll-smooth  h-full  shrink-0 first:ml-10 last:mr-10 flex flex-col items-center mt-5 "
      >
        <div className="w-full h-full flex flex-col items-center justify-around gap-5 px-5 py-5">
          <div className=" w-full h-fit  flex flex-col gap-5">
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
                <span className="text-primary text-xl md:text-2xl font-Montserrat font-bold ">
                  {program.acf.posttitle}
                </span>{' '}
              </h2>
            </div>
          </div>
          <div className=" w-full h-fit flex flex-col gap-5 justify-end ">
            <Button
              onClick={() => modalOpener(program as any)}
              className="bg-secondary text-sm "
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>
      <ProgramModal
        program={programToModal}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}

export default ProgramCard
