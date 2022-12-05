import Head from 'next/head'
import { Chanels } from '../components/chanels/Chanels'
import { Footer } from '../components/laylout/Footer'
import { Navigation } from '../components/laylout/Navigation'
import { ProgramSlider } from '../components/programs/ProgramSlider'
import { Explore } from '../components/slider/Explore'
import { MainSlider } from '../components/slider/MainSlider'
import { SecondarySlider } from '../components/slider/SecondarySlider'

import { GetStaticProps } from 'next'
import { Program, Programs } from '../types'
import { useEffect, useState } from 'react'
import FirstModal from '../components/laylout/FirstModal'

export default function Home({ programs }: Programs) {
  // console.log('programs***', programs)
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div className={''}>
      <Head>
        <title>Care Assistance</title>
        <meta name="description" content="Care assistance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-full">
        <Navigation />
        <MainSlider />
        <ProgramSlider programs={programs} />
        <Chanels />
        <SecondarySlider />
        <Explore />
        <FirstModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ programs: Program[] }> = async (
  context
) => {
  const res = await fetch(
    'http://careassistance.co/wp-json/wp/v2/personalizados'
  )
  const programs: Program[] = await res.json()

  return {
    props: {
      programs
    }
  }
}
