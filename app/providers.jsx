'use client'

// import { CacheProvider } from '@chakra-ui/next-js'
// import { ChakraProvider } from '@chakra-ui/react'

export default function Providers({ children }) {
  return (<div>{children}</div>
    // <CacheProvider>
    //   <ChakraProvider>{children}</ChakraProvider>
    // </CacheProvider>
  )
}
