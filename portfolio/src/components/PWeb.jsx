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
      <Container
        maxW="container.xl"
        className="myNoise"
        borderRadius={30}
        p="90px"
      >
        <Text fontSize={35} fontWeight={700}>
          Web Projects
        </Text>
        <Text fontSize={18} fontWeight={700} mt={2} mb={2}>
          What I’ve used for development:
        </Text>
        <HStack>
          <FontAwesomeIcon icon={faGithub} size="xl" />
          <FontAwesomeIcon icon={faReact} size="xl" />
          <Image src={typescirpt} boxSize="22px" />
          <FontAwesomeIcon icon={faJs} size="xl" />
          <Image src={csharp} boxSize="23px" />
          <FontAwesomeIcon icon={faUnity} size="xl" />
          <FontAwesomeIcon icon={faBootstrap} size="xl" />
          <FontAwesomeIcon icon={faHtml5} size="xl" />
          <FontAwesomeIcon icon={faCss3} size="xl" />
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
    </>
  );
};

export default PWeb;
