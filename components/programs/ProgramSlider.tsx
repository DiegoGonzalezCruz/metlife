import React from 'react'
import { Programs } from '../../types'
import ProgramList from '../lists/ProgramList'

export const ProgramSlider = ({
  programs,
  setProgramToModal,
  setIsProgramModalOpen
}: Programs) => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex flex-col items-center justify-center my-5">
        <h2 className="text-primary  text-xl font-Titillium font-normal">
          Conoce tu
        </h2>
        <span className="text-secondaryDark font-bold text-2xl">
          programas online
        </span>
      </div>
      <ProgramList
        programs={programs.sort((a, b) =>
          a.acf.titulo.localeCompare(b.acf.titulo)
        )}
        setProgramToModal={setProgramToModal}
        setIsProgramModalOpen={setIsProgramModalOpen}
      />
    </div>
  )
}
