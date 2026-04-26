import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react"

function LoadingBar({ delay, height }: { delay: string; height: string }) {
  return (
    <Box
      w="3"
      h={height}
      borderRadius="sm"
      bg="fg"
      animationName="pulse"
      animationDuration="1.3s"
      animationTimingFunction="ease-in-out"
      animationIterationCount="infinite"
      animationDelay={delay}
    />
  )
}

export function SimpleLoader({
  text = "...loading",
  minH = "40",
}: {
  text?: string
  minH?: string
}) {
  return (
    <Center minH={minH}>
      <VStack gap="7">
        <HStack gap="2" align="flex-end">
          <LoadingBar delay="0s" height="8" />
          <LoadingBar delay="0.18s" height="14" />
          <LoadingBar delay="0.36s" height="10" />
        </HStack>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="widest"
          color="fg.muted"
          textTransform="uppercase"
          userSelect="none"
        >
          {text}
        </Text>
      </VStack>
    </Center>
  )
}
