import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProgramList = ({ programs }: Programs) => {
  // console.log(programs, 'programs LIST')
  const router = useRouter()

  const slider = useRef(null)
  const [indexSnap, setIndexSnap] = useState<number>(0)

  const bullets = new Array(programs.length).fill(0)

  const back = () => {
    setIndexSnap(indexSnap - 1)
    router.push(`#programa${indexSnap - 1}`, undefined, { scroll: false })
  }
  const forward = () => {
    setIndexSnap(indexSnap + 1)
    router.push(`#programa${indexSnap + 1}`, undefined, { scroll: false })
  }

  // console.log(slider)

  return (
    <div className="w-full h-full ">
      <ul className="w-full h-fit flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 pt-5 debug1 no-scrollbar">
        {programs.map((program, idx: any) => {
          return (
            <ProgramCard
              program={program}
              key={program.acf.titulo}
              idx={idx}
              setIndexSnap={setIndexSnap}
            />
          )
        })}
      </ul>
      <ul className=" w-full h-fit  flex flex-row items-center justify-around md:hidden">
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
      <div className="w-full mb-5 flex flex-row gap-5 items-center justify-center debug1">
        {indexSnap !== 0 ? (
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={back}
            className="text-2xl hover:text-primary text-input"
          />
        ) : (
          ''
        )}
        {indexSnap === programs.length - 1 ? (
          ''
        ) : (
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={forward}
            className="text-2xl hover:text-primary text-input"
          />
        )}
      </div>
    </div>
  )
}

export default ProgramList
