import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Titillium_Web } from '@next/font/google'

const titillium = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-titllium'
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
