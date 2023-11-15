import React from 'react'
import { Container, Text, Box, Image, useDisclosure} from '@chakra-ui/react'
import myPhotos from '../ThePhotos'



const PPhoto = () => {
  useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <>

<Container maxW="container.xl">
        <Box
          mt={{ lg: "-125px", md: "-125px", base: "-40px" }}
          mb={10}
          height={{ lg: "350px", md: "350px", base: "250px" }}
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

      <Container maxW="container.xl" className='myNoise2' borderRadius={30}  p={{base: 30, md:40, lg:90}}>
          <Text fontSize={35} fontWeight={700} >Photography</Text>
            <Box
                mt={10} 
                padding={4}
                w="100%"
                maxW="900px"
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "10px" }}>

                    {myPhotos.map((src, index) => (
                      <Image
                      onClick={onOpen}
                        key={index}
                        w="100%"
                        mb={3}
                        d="inline-block"
                        src={src}
                        alt="Alt"
                        cursor='pointer'
                      />
                     
                    ))}
              </Box>
              

         
        </Container>

        </Container>
    </>
  )
}

export default PPhoto