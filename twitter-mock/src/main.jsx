import { createRoot } from 'react-dom/client'
import {Box, ChakraProvider,extendTheme} from "@chakra-ui/react"
import Router from "./utility/router"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white', 
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Box bg={"black"} 
         w={"100%"}>
      <Router/>
    </Box>
  </ChakraProvider>,
)
