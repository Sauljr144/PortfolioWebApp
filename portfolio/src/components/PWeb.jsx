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
  Link,
  LinkOverlay,
  LinkBox,
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
import typescirpt from "../assets/typescript.png";
import csharp from "../assets/c_sharp.png";
import weather from "../assets/WebProjects/WeatherApp.png";
import top10 from "../assets/WebProjects/Top10.png";
import flashCards from "../assets/WebProjects/FlashCards.png";
import hangman from "../assets/WebProjects/hangman.png";

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
          p={{ base: 30, md: 35, lg: 90 }}
        >
          <Text fontSize={35} fontWeight={700}>
            Web Projects
          </Text>
          <Text fontSize={18} fontWeight={700} mt={2} mb={2}>
            What I’ve used for development:
          </Text>
          <HStack>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <FontAwesomeIcon icon={faReact} size="lg" />
            <Image src={typescirpt} boxSize="19px" />
            <FontAwesomeIcon icon={faJs} size="lg" />
            <Image src={csharp} boxSize="20px" />
            <FontAwesomeIcon icon={faUnity} size="lg" />
            <FontAwesomeIcon icon={faBootstrap} size="lg" />
            <FontAwesomeIcon icon={faHtml5} size="lg" />
            <FontAwesomeIcon icon={faCss3} size="lg" />
          </HStack>

          <Text
            textAlign="center"
            fontSize={22}
            fontWeight={700}
            mt={20}
            mb={2}
          >
            My Top Favorite Projects I've Developed
          </Text>

          <SimpleGrid
            columns={{ sm: 1, md: 2 }}
            spacingX="30px"
            spacingY="30px"
          >
            <GridItem>
              <LinkBox>
                <Box
                  height="300px"
                  display="flex"
                  bgSize="cover"
                  bgPosition="top"
                  bgImage={top10}
                  borderRadius={20}
                >
                  <LinkOverlay href="https://yellow-pond-0d83f3f1e.4.azurestaticapps.net/" />
                </Box>
              </LinkBox>
              <Text mt={4} fontWeight={700} fontSize={20}>
                Top 10
              </Text>
            </GridItem>

            <GridItem>
              <LinkBox>
                <Box
                  height="300px"
                  display="flex"
                  bgSize="cover"
                  bgPosition="center"
                  bgImage={weather}
                  borderRadius={20}
                >
                  <LinkOverlay href="https://black-plant-08e7aa81e.4.azurestaticapps.net/" />
                </Box>
              </LinkBox>
              <Text mt={4} fontWeight={700} fontSize={20}>
                Weather App
              </Text>
            </GridItem>

            <GridItem>
              <LinkBox>
                <Box
                  height="300px"
                  display="flex"
                  bgSize="cover"
                  bgPosition="center"
                  bgImage={flashCards}
                  borderRadius={20}
                >
                  <LinkOverlay href="https://victorious-meadow-06551e51e.4.azurestaticapps.net/" />
                </Box>
              </LinkBox>
              <Text mt={4} fontWeight={700} fontSize={20}>
                Flash Cards
              </Text>
            </GridItem>
            <GridItem>
              <LinkBox>
                <Box
                  height="300px"
                  display="flex"
                  bgSize="cover"
                  bgPosition="top"
                  bgImage={hangman}
                  borderRadius={20}
                >
                  <LinkOverlay href="https://kind-tree-0dc2f8a1e.4.azurestaticapps.net/" />
                </Box>
              </LinkBox>
              <Text mt={4} fontWeight={700} fontSize={20}>
                Hangman
              </Text>
            </GridItem>
          </SimpleGrid>

          <Text fontSize={35} fontWeight={700} mt={20} mb={5}>
            Favorite Unity Projects
          </Text>
          <SimpleGrid
            columns={{ sm: 1, md: 2 }}
            spacingX="30px"
            spacingY="30px"
          >
            <GridItem>
              <Box height={{ base: 370, md: 360, lg: 450 }}>
                <iframe
                  style={{ borderRadius: "30px" }}
                  id="webgl_iframe"
                  allow="autoplay; fullscreen; vr"
                  src="https://play.unity.com/webgl/584751fb-5041-40eb-9783-16a36294dd85?screenshot=false&embedType=embed"
                  width="100%"
                  height="100%"
                  webkitallowfullscreen="true"
                ></iframe>
              </Box>
            </GridItem>
            <GridItem>
              <Box height={{ base: 370, md: 360, lg: 450 }}>
                <iframe
                style={{ borderRadius: "30px" }}
                  id="webgl_iframe"
                  allow="autoplay; fullscreen; vr"
                  src="https://play.unity.com/webgl/81135727-e226-4f99-9cdb-7facac5e2267?screenshot=false&embedType=embed"
                  width="100%"
                  height="100%"
                  webkitallowfullscreen="true"
                ></iframe>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};

export default PWeb;
