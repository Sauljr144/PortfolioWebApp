import React from 'react'
import { Container, Button, GridItem, SimpleGrid, Text, Grid, HStack, Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure} from '@chakra-ui/react'
import photo1 from "../assets/Photography/Bibi&James_0025.jpg"

const PPhoto = () => {
  useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure()

  const myImages = [
    "assets/Photography/Bibi&James_0025.jpg",
    "assets/Photography/David&Fernanda-1.jpg",
    "assets/Photography/Bibi&James_0038.jpg",
    "assets/Photography/David&Fernanda-2.jpg",
    "assets/Photography/Bibi&James_0032.jpg",
    "assets/Photography/Bibi&James_0037.jpg",
    "assets/Photography/Bibi&James_0047.jpg",
    "assets/Photography/David&Fernanda-3.jpg",
    "assets/Photography/Denise&Adrian_0007.jpg",
    "src/assets/Photography/Bibi&James_0057.jpg",
    "src/assets/Photography/David&Fernanda-4.jpg",
    "src/assets/Photography/Denise&Adrian_0011.jpg",
    "src/assets/Photography/David&Fernanda-9.jpg",
    "src/assets/Photography/Denise&Adrian_0028.jpg",
    "src/assets/Photography/David&Fernanda-6.jpg",
    "src/assets/Photography/David&Fernanda-10.jpg",
    "src/assets/Photography/Denise&Adrian_0026.jpg",
    "src/assets/Photography/David&Fernanda-8.jpg"
  ]

  return (
    <>
      <Container maxW="container.xl" className='myNoise2' borderRadius={30} p='90px'>
          <Text fontSize={35} fontWeight={700} >Photography</Text>
            <Box
                mt={10} 
                padding={4}
                w="100%"
                maxW="900px"
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "10px" }}>

                    {myImages.map((src) => (
                      <Image
                      onClick={onOpen}
                        key={src}
                        w="100%"
                        mb={3}
                        d="inline-block"
                        src={require(src)}
                        alt="Alt"
                        cursor='pointer'
                      />
                     
                    ))}
              </Box>
              

         
        </Container>
    </>
  )
}

export default PPhoto