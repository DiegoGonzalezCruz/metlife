import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Channel } from '../../types'

const Channel = ({ channel, setIndexSnap, idx }: Channel) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.8
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
      key={channel.title}
      className=" rounded-xl shrink-0 w-full md:w-1/4  md:shadow-xl  snap-start flex flex-col items-center  gap-5 py-5 "
    >
      <Image
        src={channel.img}
        width={80}
        height={80}
        alt={channel.title}
        className="h-12 w-full "
      />
      <h2 className="text-secondaryDark text-base font-Fira text-center">
        {channel.title}
      </h2>
      <div className="py-2 bg-secondaryDark  prose-p:font-light prose-p:text-white w-full text-center prose-p:font-Fira prose-p:leading-tight prose-p:text-base">
        {channel.text}
      </div>
    </li>
  )
}

export default Channel
