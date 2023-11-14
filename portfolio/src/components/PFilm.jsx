import React from "react";
import {
  Container,
  GridItem,
  SimpleGrid,
  Text,
  Grid,
  HStack,
  Box,
  Link,
  Center,
} from "@chakra-ui/react";

const PFilm = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        className="myNoise2"
        borderRadius={30}
        p={{sm:30 ,md: 45, lg: 90}}
      >
        <Text fontSize={35} fontWeight={700} mb={10}>
          Film Projects
        </Text>

        <Center>
          <Text fontSize={25} fontWeight={600} mb={6}>
            Demo Reel
          </Text>
        </Center>

        <div style={{ padding: "42.5% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/374463480?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "25px",
            }}
            title="Reel"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

        <Center>
          <Text fontSize={25} fontWeight={600} mt={20} mb={6}>
            My Top Favorite Projects I’ve Created
          </Text>
        </Center>

        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2 }}
          spacingX="40px"
          spacingY="40px"
        >
          <GridItem>
            <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/793504114?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                title="Marion"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            <Text fontWeight={600} fontSize={20} mt={4}>
              Marion
            </Text>
            <Text fontSize={15}>
              A short documentary showing the dangers of drug abuse.
            </Text>
          </GridItem>

          <GridItem>
            <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/727255581?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                title="Marion"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            <Text fontWeight={600} fontSize={20} mt={4}>
              Kate
            </Text>
            <Text fontSize={15}>
              A short documentary showing a mom coping with her son’s suicide.
            </Text>
          </GridItem>

          <GridItem>
            <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/641048208?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                title="Marion"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <Text fontWeight={600} fontSize={20} mt={4}>
              Rollin Root
            </Text>
            <Text fontSize={15}>
              A mobile farmers market of the Agricultural Institute of Marin.
            </Text>
          </GridItem>

          <GridItem>
            <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/345143243?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                title="Marion"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <Text fontWeight={600} fontSize={20} mt={4}>
              Invisible
            </Text>
            <Text fontSize={15}>
              A music video featuring the amazing Shannon Bonne!
            </Text>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacingX="30px"
          spacingY="30px"
        ></SimpleGrid>
      </Container>
    </>
  );
};

export default PFilm;
