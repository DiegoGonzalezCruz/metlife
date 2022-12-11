import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const ProgramList = ({ programs }: Programs) => {
  // console.log(programs, 'programs LIST')
  const slider = useRef()
  const [indexSnap, setIndexSnap] = useState<number>(0)

  const bullets = new Array(programs.length).fill(0)

  return (
    <div className="w-full h-full ">
      <ul
        ref={slider}
        className="w-full h-fit flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 py-5"
      >
        {programs.map((program, idx) => {
          return (
            <ProgramCard
              program={program}
              key={program.acf.titulo}
              idx={indexSnap}
              setIndexSnap={setIndexSnap}
            />
          )
        })}
      </ul>
      <ul className="w-full h-fit debug2 flex flex-row items-center justify-around">
        {bullets.map((bullet, idx) => {
          return (
            <li
              key={idx}
              className={`border border-primary h-4 w-4 rounded-full ${
                idx === indexSnap ? 'bg-primary' : 'bg-white'
              }`}
            ></li>
          )
        })}
      </ul>
      <div className="w-full my-5 flex flex-row gap-5 items-center justify-center ">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => setIndexSnap(indexSnap - 1)}
          className="text-2xl hover:text-primary text-input"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => setIndexSnap(indexSnap + 1)}
          className="text-2xl hover:text-primary text-input"
        />
      </div>
    </div>
  )
}

export default ProgramList
