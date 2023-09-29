import React from 'react'
import { Box, Container, Text, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SimpleGrid,
  GridItem,
  Button, } from '@chakra-ui/react'

const Contact = () => {
  return (
    <>
    <Container maxW="container.lg" className='myNoise' borderRadius={30} p={10}>

      <SimpleGrid columns={{sm:1, md:2, lg:2}}>
        <GridItem display='flex' alignItems='center' justifyContent='center'>
          <Text pe={{sm: 0, md:10}} textAlign='center' fontSize={40} fontWeight={700}>Let's Work Together!</Text>
        </GridItem>
        <GridItem>
        <FormControl>
          <FormLabel mt={4} fontWeight={600}>Name</FormLabel>
            <Input mb={4} bgColor="#FAFAFA" type='text' placeholder='Name goes here.'/>
          <FormLabel fontWeight={600}>Email</FormLabel>
            <Input mb={4} bgColor="#FAFAFA" type='email' placeholder='Email goes here.'/>
          <FormLabel fontWeight={600}>Message</FormLabel>
            <Input mb={4} bgColor="#FAFAFA" type='text' placeholder='Message goes here.'/>
        </FormControl>
        <Box display='flex' justifyContent='center' mb={4}>

        <Button bgColor="#FAFAFA">Submit</Button>
        </Box>
        </GridItem>
      </SimpleGrid>
       
        </Container>



    </>
  )
}

export default Contact