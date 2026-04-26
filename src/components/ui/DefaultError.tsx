import { Button, Center, EmptyState } from "@chakra-ui/react"
import { TriangleAlert } from "lucide-react"

type DefaultErrorProps = {
  message?: string
  onRetry?: () => void
  showRetry?: boolean
  reset?: () => void
  error?: Error
}

export function DefaultError({
  message = "Something went wrong. Please try again.",
  onRetry,
  showRetry = false,
  reset,
}: DefaultErrorProps) {
  const handleRetry = onRetry ?? reset ?? (() => window.location.reload())
  const canRetry = showRetry || !!reset

  return (
    <Center minH="dvh">
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator color="red.500" fontSize="4xl">
            <TriangleAlert />
          </EmptyState.Indicator>
          <EmptyState.Title
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="widest"
            textTransform="uppercase"
            color="fg"
          >
            Something went wrong
          </EmptyState.Title>
          <EmptyState.Description
            fontSize="xs"
            color="fg.muted"
            textAlign="center"
            maxW="xs"
          >
            {message}
          </EmptyState.Description>
          {canRetry && (
            <Button
              size="sm"
              variant="subtle"
              colorPalette="red"
              mt="2"
              letterSpacing="wide"
              textTransform="uppercase"
              fontSize="xs"
              fontWeight="semibold"
              onClick={handleRetry}
            >
              Retry
            </Button>
          )}
        </EmptyState.Content>
      </EmptyState.Root>
    </Center>
  )
}
