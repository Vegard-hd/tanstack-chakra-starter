import { createFileRoute } from '@tanstack/react-router'
import { Box } from '@chakra-ui/react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <Box>Test chakra box</Box>
}
