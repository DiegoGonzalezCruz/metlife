import { ReactNode } from 'react'
import { JsxElement } from 'typescript'

export interface Program {
  idx?: number
  ref?: any
  setIndexSnap?: Dispatch<SetStateAction<boolean>>
  setProgramToModal?: any
  setIsProgramModalOpen?: any
  program: {
    acf: {
      titulo: string
      imagen: string
      imagen_modal: string
      icono: string
      horario: string
      pretitle: string
      posttitle: string
      description: string
    }
  }
}
export interface ProgramFromREST {
  idx?: number
  acf: {
    titulo: string
    imagen: string
    imagen_modal: string
    icono: string
    horario: string
    pretitle: string
    posttitle: string
    description: string
  }
}

export interface ProgramsModal {
  program: {
    acf: {
      titulo: string
      imagen: string
      imagen_modal: string
      icono: string
      horario: string
      pretitle: string
      posttitle: string
      description: string
    }
  }
  isModalOpen: boolean
  setIsModalOpen: Function
}
export interface Programs {
  setProgramToModal: Function
  setIsProgramModalOpen?: any
  programs: {
    acf: {
      titulo: string
      imagen: string
      imagen_modal: string
      icono: string
      horario: string
      pretitle: string
      posttitle: string
      description: string
    }
    idx?: number
  }[]
}

export interface Channel {
  setIndexSnap?: Dispatch<SetStateAction<boolean>>
  idx?: number
  channel: {
    img: string
    title: string
    text: JSX.Element
  }
}
export interface Benefit {
  setIndexSnap: Dispatch<SetStateAction<boolean>>
  idx?: number
  benefit: {
    description: string
    text: string
    img: string
  }
}
export interface Channels {
  channels: {
    img: string
    title: string
  }[]
}

export interface ButtonProps {
  onClick?: MouseEventHandler
  children: string
  colors?: {
    text: string
    bg: string
  }
  className?: HTMLAttributes
}
