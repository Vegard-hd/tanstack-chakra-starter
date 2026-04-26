import { Button, Flex } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react/center"
import { Text } from "@chakra-ui/react/text"
import { Undo2 } from "lucide-react"

export function NotFoundComponent() {
  return (
    <>
      <Center minH={"80dvh"}>
        <Flex align={"center"} direction="column" spaceY={"10"}>
          <Text fontSize={"2xl"} color={"fg"}>
            404 - page not found
          </Text>
          <a href="/">
            <Button>
              <Undo2 />
              Return to home page
            </Button>
          </a>
        </Flex>
      </Center>
    </>
  )
}
