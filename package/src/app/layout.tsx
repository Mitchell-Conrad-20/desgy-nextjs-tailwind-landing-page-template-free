import { Inter, Lora, Manrope, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { ThemeProvider } from 'next-themes'
import {
  resolveFont,
  resolvePalette,
  siteThemeConfig,
} from '@/app/api/data/config'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })
const inter = Inter({ subsets: ['latin'], display: 'swap' })
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})
const lora = Lora({ subsets: ['latin'], display: 'swap' })

const fontMap = {
  manrope,
  inter,
  poppins,
  lora,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const activePalette = resolvePalette(siteThemeConfig.activePaletteId)
  const activeFont = resolveFont(siteThemeConfig.activeFontId)
  const selectedFont = fontMap[activeFont.id as keyof typeof fontMap]

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={selectedFont.className}
        style={{
          ['--color-primary' as string]: activePalette.colors.primary,
          ['--color-purple' as string]: activePalette.colors.purple,
          ['--color-grey' as string]: activePalette.colors.grey,
          ['--color-border' as string]: activePalette.colors.border,
          ['--color-darkmode' as string]: activePalette.colors.darkmode,
          ['--color-deep-slate' as string]: activePalette.colors.deepSlate,
          ['--color-dark-surface' as string]: activePalette.colors.darkSurface,
          ['--color-dark-card' as string]: activePalette.colors.darkCard,
          fontFamily: activeFont.cssFontFamily,
        }}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
