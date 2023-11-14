import React from 'react'
import { Container, Text, Box, Image, useDisclosure} from '@chakra-ui/react'
import ThePhotos from '../ThePhotos.js'



const PPhoto = () => {
  useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const myImages = [
  //  "https://drive.google.com/uc?export=view&id=1VLa109rYrmw7f4FXLa2B3u9FcU9NcWiN",
  //  "https://drive.google.com/uc?export=view&id=1dFd393FFLq0pSnDyWFeznDWLPX3hwpIn",
  //  "https://drive.google.com/uc?export=view&id=1P0ndDjGxECF_kl5zLVkHAmWOUgmCyZBJ",
  //  "https://drive.google.com/uc?export=view&id=1OI46sJTKs4_-GplSlkFWhCQnnZVCF0cs",
  //  "https://drive.google.com/uc?export=view&id=1lmFYADQ58U8YUaWD5B2LOyoYfoCJJcOJ",
  //  "https://drive.google.com/uc?export=view&id=1glnnL-5PKOpPJsZOZYH_-nQfUx6PQqrx",
  //  "https://drive.google.com/uc?export=view&id=1sBfynkCTaVExuQyCAbq-Bh-t6DoTltCj",
  //  "https://drive.google.com/uc?export=view&id=1An4ynjhdxE40YEEJnfnm0sYv4YU-X1vi",
  //  "https://drive.google.com/uc?export=view&id=1eprY_y2eYIAH_KvN4oD55adr3sbAZdus",
  //  "https://drive.google.com/uc?export=view&id=1o3jrNrz1fdfMEtRtKncS3-tTg0pHuM8Y",
  //  "https://drive.google.com/uc?export=view&id=1pvYuyeNcSi_V42vtmY2oxiKg8PBKASu4",
  //  "https://drive.google.com/uc?export=view&id=1xIxn9J1n2ZNnPKKUUI4V9kDDi18EAlRG",
  //  "https://drive.google.com/uc?export=view&id=1NBiGXVDEujNAMc_kbmbupfitBhaao6sW",
  //  "https://drive.google.com/uc?export=view&id=1yl0mS5ngPgEbjSneHzJp-YPzYMrklfDw",
  //  "https://drive.google.com/uc?export=view&id=19ih4LZJhY395tCSjkL1Zak9-aGR_rGX4",
  //  "https://drive.google.com/uc?export=view&id=1RKG0AvG4Nl6TAkU_D7cO2Ma6HFsRJcCY",
  //  "https://drive.google.com/uc?export=view&id=1EKlPJ7N1eTk8F47R2sF4BPwWXiPD6dv_",
  //  "https://drive.google.com/uc?export=view&id=14d7RPE86Z1YR7C-L-m8pOAGOIahJWhh1",
  // ]

  return (
    <>
      <Container maxW="container.xl" className='myNoise2' borderRadius={30}  p={{sm: 30, md:40, lg:90}}>
          <Text fontSize={35} fontWeight={700} >Photography</Text>
            <Box
                mt={10} 
                padding={4}
                w="100%"
                maxW="900px"
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "10px" }}>

                    {ThePhotos.map((src, index) => (
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