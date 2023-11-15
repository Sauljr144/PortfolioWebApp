import React from "react";
import {
  Container,
  GridItem,
  SimpleGrid,
  Text,
  Grid,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faJs,
  faUnity,
  faBootstrap,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import typescirpt from "../assets/typescript.png"
import csharp from "../assets/c_sharp.png"
import weather from "../assets/WebProjects/WeatherApp.png"
import top10 from "../assets/WebProjects/Top10.png"
import flashCards from '../assets/WebProjects/FlashCards.png'
import hangman from '../assets/WebProjects/hangman.png'

const PWeb = () => {
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

      <Container
        maxW="container.xl"
        className="myNoise"
        borderRadius={30}
        p={{base: 30, md:35, lg:90}}
      >
        <Text fontSize={35} fontWeight={700} >
          Web Projects
        </Text>
        <Text fontSize={18} fontWeight={700} mt={2} mb={2}>
          What I’ve used for development:
        </Text>
        <HStack >
          <FontAwesomeIcon icon={faGithub} size='lg' />
          <FontAwesomeIcon icon={faReact} size="lg" />
          <Image src={typescirpt} boxSize="19px" />
          <FontAwesomeIcon icon={faJs} size="lg" />
          <Image src={csharp} boxSize="20px" />
          <FontAwesomeIcon icon={faUnity} size="lg" />
          <FontAwesomeIcon icon={faBootstrap} size="lg" />
          <FontAwesomeIcon icon={faHtml5} size="lg" />
          <FontAwesomeIcon icon={faCss3} size="lg" />
        </HStack>

        <Text textAlign="center" fontSize={22} fontWeight={700} mt={20} mb={2}>
          My Top Favorite Projects I've Developed
        </Text>

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX="30px" spacingY="30px">
          <GridItem>
            <Box
              height="300px"
              display="flex"
              bgSize="cover"
              bgPosition="center"
              bgImage={weather}
              borderRadius={20}
            ></Box>
            <Text mt={4} fontWeight={700} fontSize={20}>
              Weather App
            </Text>
          </GridItem>
          <GridItem>
            <Box
              height="300px"
              display="flex"
              bgSize="cover"
              bgPosition="top"
              bgImage={top10}
              borderRadius={20}
            ></Box>
            <Text mt={4} fontWeight={700} fontSize={20}>
              Top 10
            </Text>
          </GridItem>
          <GridItem>
            <Box
              height="300px"
              display="flex"
              bgSize="cover"
              bgPosition="center"
              bgImage={flashCards}
              borderRadius={20}
            ></Box>
            <Text mt={4} fontWeight={700} fontSize={20}>
              Flash Cards
            </Text>
          </GridItem>
          <GridItem>
            <Box
              height="300px"
              display="flex"
              bgSize="cover"
              bgPosition='top'
              bgImage={hangman}
              borderRadius={20}
            ></Box>
            <Text mt={4} fontWeight={700} fontSize={20}>
              Hangman
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
      </Container>
    </>
  );
};

export default PWeb;
