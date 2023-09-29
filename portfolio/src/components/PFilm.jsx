import React from 'react'
import { Container, GridItem, SimpleGrid, Text, Grid, HStack } from '@chakra-ui/react'

const PFilm = () => {
  return (
    <>
       <Container maxW="container.xl" className='myNoise2' borderRadius={30} p='90px'>
            <Grid templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={2}>
                    <Text fontSize={35} fontWeight={700} >Film Projects</Text>
                </GridItem>
              
            </Grid>
        </Container>
    </>
  )
}

export default PFilm