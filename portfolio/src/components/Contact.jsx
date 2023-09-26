import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'

const Contact = () => {
  return (
    <>
    <Container maxW="container.xl">
        <Box
          mt={{ lg: "-125px", md: "-125px", sm: "-40px" }}
          height={{ lg: "350px", md: "350px", sm: "250" }}
          borderRadius={30}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="myNoise"
          
        >
          <Text fontSize={30} fontWeight="bold" mt="50px">
            Contact
          </Text>
        </Box>
        </Container>
    
    </>
  )
}

export default Contact