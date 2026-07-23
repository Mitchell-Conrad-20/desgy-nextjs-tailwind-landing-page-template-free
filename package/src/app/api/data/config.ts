export type ThemePalette = {
  id: string
  label: string
  colors: {
    primary: string
    purple: string
    grey: string
    border: string
    darkmode: string
    deepSlate: string
    darkSurface: string
    darkCard: string
  }
}

export type ThemeFont = {
  id: string
  label: string
  cssFontFamily: string
}

export const colorPalettes: ThemePalette[] = [
  {
    id: 'classic-blue',
    label: 'Classic Blue',
    colors: {
      primary: '#0066ff',
      purple: '#1e013a',
      grey: '#f4f5f6',
      border: '#dbdbdb',
      darkmode: '#00224a',
      deepSlate: '#02398a',
      darkSurface: '#0b1324',
      darkCard: '#15233b',
    },
  },
  {
    id: 'sunset-coral',
    label: 'Sunset Coral',
    colors: {
      primary: '#ff6b6b',
      purple: '#5b2a86',
      grey: '#fff4f2',
      border: '#f1c4c4',
      darkmode: '#3a1b1d',
      deepSlate: '#8a2d3a',
      darkSurface: '#2b1418',
      darkCard: '#4b2027',
    },
  },
  {
    id: 'forest-green',
    label: 'Forest Green',
    colors: {
      primary: '#2e8b57',
      purple: '#123524',
      grey: '#f2f7f4',
      border: '#bfd7c6',
      darkmode: '#122a1b',
      deepSlate: '#174a2c',
      darkSurface: '#0f1e15',
      darkCard: '#183623',
    },
  },
  {
    id: 'midnight-violet',
    label: 'Midnight Violet',
    colors: {
      primary: '#7c3aed',
      purple: '#2d1b69',
      grey: '#f4f1ff',
      border: '#d4c6ff',
      darkmode: '#1c1238',
      deepSlate: '#432b90',
      darkSurface: '#161127',
      darkCard: '#241a47',
    },
  },
]

export const fontFamilies: ThemeFont[] = [
  {
    id: 'manrope',
    label: 'Manrope',
    cssFontFamily: 'Manrope, sans-serif',
  },
  {
    id: 'inter',
    label: 'Inter',
    cssFontFamily: 'Inter, sans-serif',
  },
  {
    id: 'poppins',
    label: 'Poppins',
    cssFontFamily: 'Poppins, sans-serif',
  },
  {
    id: 'lora',
    label: 'Lora',
    cssFontFamily: 'Lora, serif',
  },
]

export const siteThemeConfig = {
  activePaletteId: 'sunset-coral',
  activeFontId: 'lora',
  palettes: colorPalettes,
  fonts: fontFamilies,
} as const

export const resolvePalette = (paletteId = siteThemeConfig.activePaletteId) =>
  colorPalettes.find((palette) => palette.id === paletteId) ?? colorPalettes[0]

export const resolveFont = (fontId = siteThemeConfig.activeFontId) =>
  fontFamilies.find((font) => font.id === fontId) ?? fontFamilies[0]
