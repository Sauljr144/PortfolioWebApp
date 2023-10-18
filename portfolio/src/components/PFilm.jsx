import React from 'react'
import { Container, GridItem, SimpleGrid, Text, Grid, HStack, Box } from '@chakra-ui/react'

const PFilm = () => {
  return (
    <>
       <Container maxW="container.xl" className='myNoise2' borderRadius={30} p='90px'>
        
          <Text fontSize={35} fontWeight={700} >Film Projects</Text>
          <Box height="300px"
              display="flex"
              bgSize="cover"
              bgPosition="center"
              bgImage="/src/assets/WebProjects/WeatherApp.png"
              borderRadius={20}>
          </Box>
          <SimpleGrid columns={{sm:1, md:2}} spacingX="30px" spacingY="30px">
          
          </SimpleGrid>
        
        </Container>
    </>
  )
}

export default PFilm