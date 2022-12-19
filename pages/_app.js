import '../styles/globals.scss'
import { Open_Sans } from '@next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const opensans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return (
      <main className={opensans.className}>
        <Component {...pageProps} />
      </main>
  )
}
