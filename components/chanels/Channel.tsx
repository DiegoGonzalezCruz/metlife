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
      className=" rounded-xl shrink-0 w-full md:w-1/4  md:shadow-2xl  snap-start   my-5 overflow-hidden "
    >
      <div className="w-full h-fit flex flex-col items-center justify-between gap-5 ">
        <Image
          src={channel.img}
          width={80}
          height={80}
          alt={channel.title}
          className="h-16 w-full  mt-10  "
        />
        <h2 className="text-secondaryDark text-base font-Fira text-center h-fit ">
          {channel.title}
        </h2>
        <div className="h-fit py-2 bg-secondaryDark  prose-p:font-light prose-p:text-white w-full text-center prose-p:font-Fira prose-p:leading-tight prose-p:text-base">
          {channel.text}
        </div>
      </div>
    </li>
  )
}

export default Channel
