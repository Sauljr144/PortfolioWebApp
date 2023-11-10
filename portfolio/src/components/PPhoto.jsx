import React from 'react'
import { Container, Text, Box, Image, useDisclosure} from '@chakra-ui/react'

import photo1 from "../assets/Photography/Bibi&James_0025.jpg"
// import photo2 from "../assets/Photography/David_Fernanda_1.jpg"
import photo3 from "../assets/Photography/Bibi&James_0038.jpg"
// import photo4 from "../assets/Photography/David_Fernanda_2.jpg"
import photo5 from "../assets/Photography/Bibi&James_0032.jpg"
import photo6 from "../assets/Photography/Bibi&James_0037.jpg"
import photo7 from "../assets/Photography/Bibi&James_0047.jpg"
// import photo8 from "../assets/Photography/David_Fernanda_3.jpg"
import photo9 from "../assets/Photography/Denise&Adrian_0007.jpg"
import photo10 from "../assets/Photography/Bibi&James_0057.jpg"
// import photo11 from "../assets/Photography/David_Fernanda_4.jpg"
import photo12 from "../assets/Photography/Denise&Adrian_0011.jpg"
// import photo13 from "../assets/Photography/David_Fernanda_5.jpg"
import photo14 from "../assets/Photography/Denise&Adrian_0028.jpg"
// import photo15 from "../assets/Photography/David_Fernanda_6.jpg"
// import photo16 from "../assets/Photography/David_Fernanda_10.jpg"
import photo17 from "../assets/Photography/Denise&Adrian_0026.jpg"
// import photo18 from "../assets/Photography/David_Fernanda_8.jpg"
// import photos from "../photos.json"

const PPhoto = () => {
  useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure()

  const myImages = [
   photo1,
  //  photo2,
   photo3,
  //  photo4,
   photo5,
   photo6,
   photo7,
  //  photo8,
   photo9,
   photo10,
  //  photo11,
   photo12,
  //  photo13,
   photo14,
  //  photo15,
  //  photo16,
   photo17,
  //  photo18,
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

                    {myImages.map((src, index) => (
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
    </>
  )
}

export default PPhoto