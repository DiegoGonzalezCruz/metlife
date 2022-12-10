import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'
import { useInView } from 'react-intersection-observer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'

const ProgramList = ({ programs }: Programs) => {
  console.log(programs, 'programs LIST')

  const [indexSnap, setIndexSnap] = useState(0)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0
  })
  const forward = () => {
    console.log('fwd')
  }

  const back = () => {
    console.log('bck')
  }
  return (
    <div className="w-full h-full ">
      <ul className="w-full h-fit flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 py-5">
        {programs.map((program, idx) => {
          return (
            <ProgramCard program={program} key={program.acf.titulo} idx={idx} />
          )
        })}
        {/* <div>hola</div> */}
      </ul>
      <div className="w-full mb-5 flex flex-row gap-5 items-center justify-center ">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={back}
          className="text-2xl hover:text-primary text-input"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={forward}
          className="text-2xl hover:text-primary text-input"
        />
      </div>
    </div>
  )
}

export default ProgramList
