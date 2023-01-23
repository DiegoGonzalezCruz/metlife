import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Benefit } from '../../types'
import ButtonWhite from '../buttons/ButtonWhite'

const BenefitCard = ({ benefit, setIndexSnap, idx }: Benefit) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1
  })
  useEffect(() => {
    if (inView) {
      // console.log('visible')
      // console.log(entry, 'entry***')
      setIndexSnap(idx)
    }
  }, [inView, idx, setIndexSnap])

  return (
    <li
      ref={ref}
      key={benefit.description}
      className=" w-full  h-96  flex flex-col gap-5  snap-start px-5 items-stretch justify-around "
    >
      <Image
        src={benefit.img}
        width={300}
        height={300}
        alt={benefit.description}
        className="h-48 object-contain mx-auto "
      />
      <h2 className=" w-full text-center text-primary text-xl md:text-2xl font-Titillium">
        {benefit.description}
      </h2>
      <ButtonWhite className="bg-white w-fit mx-auto mb-10 md:mb-0">
        {benefit.text}
      </ButtonWhite>
    </li>
  )
}

export default BenefitCard
