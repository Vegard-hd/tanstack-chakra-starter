'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import type { ColorModeProviderProps } from './color-mode'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      // fonts: {
      //   body: { value: "'Sora', sans-serif" },
      //   heading: { value: "'Sora', sans-serif" },
      // },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props}></ColorModeProvider>
    </ChakraProvider>
  )
}
