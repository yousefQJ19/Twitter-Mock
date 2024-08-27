import { createRoot } from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react"
import Router from "./utility/router"
import {Flex} from "@chakra-ui/react"

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Flex bg={"black"}>
      <Router/>
    </Flex>
  </ChakraProvider>,
)
