'use client'

import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react'

function People() {
  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box>People</Box>
        <LinkBox
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          px={4}
          h={8}
        >
          <LinkOverlay href="/people/add">Add</LinkOverlay>
        </LinkBox>
      </Box>
    </Box>
  )
}

export default People
