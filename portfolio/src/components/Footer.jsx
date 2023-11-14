import { HStack, Image, Box, Text, Container } from '@chakra-ui/react';
import React from 'react';
import {Link}from 'react-router-dom'
import logo from '../assets/BluBlack.png'




const Footer = () => {
  return (
    // <>hola</>
    <>
    <Container maxW='container.xl'>

    <HStack justifyContent='start' mt={12} mb={5} >
      <Box as={Link} to='/'>

      <Image me={2} src={logo} boxSize='35px'/>
      </Box>
      <Box  mx={2} as={Link} to='/' fontSize={11} fontWeight='bold'>Home</Box>
      <Box  mx={2}as={Link} to='/AboutPage' fontSize={11} fontWeight='bold'>About</Box>
      <Box mx={2} as={Link} to='/ProjectsPage' fontSize={11} fontWeight='bold'>Projects</Box>
      <Box mx={2} as={Link} to='/Contact' fontSize={11} fontWeight='bold'>Contact</Box>
    </HStack>
    <Text mb={10} fontSize={11} color="#595858">Copyright © 2023 Saul Suazo. All rights reserved.</Text>
    </Container>
    </>
  )
}

export default Footer