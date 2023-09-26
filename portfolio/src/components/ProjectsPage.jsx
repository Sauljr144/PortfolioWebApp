import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectsPage = () => {
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
            Projects
          </Text>
        </Box>
        </Container>
    
    </>
  )
}

export default ProjectsPage