import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Navbar } from 'components/Navbar'

import 'tailwindcss/tailwind.css'
import 'tailwind.source.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
