import React from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

  let navigate = useNavigate();

  return (
    <Container maxW="container.xl">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        spacingX="40px"
        spacingY="40px"
      >
        <GridItem colSpan={{ sm: 1, md: 2 }}>
          <Box
            display="flex"
            alignItems="end"
            width="100%"
            height="350px"
            borderRadius={30}
            bgImage="/src/assets/homepage/computer.jpg"
            bgPosition="center"
            bgSize="cover"
            cursor='pointer'
            onClick={() => navigate("/ProjectsPage")}
            
          >
            <Text ms={12} mb={10} color="white" fontWeight="bold" fontSize={25}>
              Web
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            display="flex"
            alignItems="end"
            width="100%"
            height="350px"
            borderRadius={30}
            bgImage="/src/assets/homepage/film.jpg"
            bgPosition="center"
            bgSize="cover"
            cursor='pointer'
            onClick={() => navigate("/ProjectsPage")}
          >
            <Text ms={12} mb={10} color="white" fontWeight="bold" fontSize={25}>
              Filmmaking
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            display="flex"
            alignItems="end"
            width="100%"
            height="350px"
            borderRadius={30}
            bgImage="/src/assets/homepage/photography.jpg"
            bgPosition="center"
            bgSize="cover"
            cursor='pointer'
            onClick={() => navigate("/ProjectsPage")}
          >
            <Text ms={12} mb={10} color="white" fontWeight="bold" fontSize={25}>
              Filmmaking
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
