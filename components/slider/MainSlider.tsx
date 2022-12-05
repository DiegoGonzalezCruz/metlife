import Image from 'next/image'

export const MainSlider = () => {
  return (
    <div className="w-full h-[50vh]  ">
      <div className="w-full h-full flex md:flex-row-reverse flex-col">
        <Image
          src="/img/sliders/mainSlider.png"
          width={500}
          height={500}
          className="object-cover h-full md:w-1/2 w-full"
          alt="bienvenidos a metlife orienta"
        />
        <div className="md:w-1/2 w-full h-full bg-primary flex items-center justify-center ">
          <Image
            src="/img/sliders/bienvenido.svg"
            width={500}
            height={500}
            className="object-contain h-full w-5/6"
            alt="bienvenidos a metlife orienta"
          />
        </div>
      </div>
    </div>
  )
}
