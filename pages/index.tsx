import Head from 'next/head'
import { Channels } from '../components/chanels/Channels'
import { Footer } from '../components/laylout/Footer'
import { Navigation } from '../components/laylout/Navigation'
import { ProgramSlider } from '../components/programs/ProgramSlider'
import { Explore } from '../components/slider/Explore'
import { MainSlider } from '../components/slider/MainSlider'
import { SecondarySlider } from '../components/slider/SecondarySlider'

import { GetStaticProps } from 'next'
import { Program, Programs } from '../types'
import { useState } from 'react'
import FirstModal from '../components/laylout/FirstModal'
import ProgramModal from '../components/laylout/ProgramModal'

export default function Home({ programs }: Programs) {
  // console.log('programs***', programs)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(true)

  const [programToModal, setProgramToModal] = useState<Program | null>(null)

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
        <ProgramSlider
          setProgramToModal={setProgramToModal}
          setIsProgramModalOpen={setIsProgramModalOpen}
          programs={programs}
        />
        <Channels />
        <SecondarySlider />
        <Explore />
        <FirstModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <ProgramModal
          program={programToModal}
          isProgramModalOpen={isProgramModalOpen}
          setIsProgramModalOpen={setIsProgramModalOpen}
        />
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
