import Image from 'next/image'

export const Navigation = () => {
  return (
    <nav className="h-[10vh] md:h-[15vh] w-full flex items-center bg-white justify-center">
      <Image
        src="/img/logos/metlife-orienta.svg"
        alt="metlife orienta"
        width={200}
        height={50}
        className="w-5/6 bg-white md:h-1/3"
      />
    </nav>
  )
}
