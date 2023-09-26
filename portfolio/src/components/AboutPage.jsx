import React from "react";
import { Box, Container, Grid, GridItem, Hide, Show, Text } from "@chakra-ui/react";


const AboutPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box
          mt={{ lg: "-125px", md: "-125px", sm: "-40px" }}
          height={{ lg: "350px", md: "350px", sm: "250" }}
          borderRadius={30}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="myNoise"
          
        >
          <Text fontSize={30} fontWeight="bold" mt="50px">
            About
          </Text>
        </Box>

        <Box my={10} display="flex" justifyContent="center">
          <Text width="650px" fontSize={20} fontWeight="bold">
            Hi! I’m Saul and I’m a web developer, filmmaker, and a photographer.
            I love technology and I like to find ways to implement it in my
            workflow. Over the years I’ve been able to work as a filmmaker and
            photographer. Now I’ve been blessed to start a career in web
            development!
          </Text>
        </Box>

<Show above="md">

        
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(7, 1fr)">

            <GridItem colSpan={3} h="10" display="flex" justifyContent="end">
              <Text fontSize={30} fontWeight="bold" me={10}>
                Present
              </Text>
            </GridItem>

            <GridItem
              colStart={4}
              colEnd={8}
              borderLeft=".2rem solid black"
            >
              <Box p={5} ms={10} mb={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Student - CodeStack Academy</Text>
                <Text fontWeight={700} mb={2}>Aug 2022 - Present</Text>
                <Text>As part of my career change to web development, I joined CodeStack Academy to learn web development. It as has been a wonderful time learning and getting to deploy websites. So far I’ve learned Unity 3D, C#, Javascript, and React!</Text>
              </Box>
            </GridItem>


            <GridItem
              colStart={4}
              colEnd={8}
              borderLeft=".2rem solid black"
            >
               <Box p={5} ms={10} mb={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Multimedia Specialist - CodeStack</Text>
                <Text fontWeight={700} mb={2}>Dec 2019 - Present</Text>
                <Text>Over at CodeStack, I was hired as a Multimedia Specialist to create more film projects, photography projects, and motion graphic pieces for various government clients in the educational field.</Text>
              </Box>
            </GridItem>

            <GridItem
              colStart={4}
              colEnd={8}
              borderLeft=".2rem solid black"
            >
               <Box p={5} ms={10} mb={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Filmmaking & Photography - Freelance</Text>
                <Text fontWeight={700} mb={2}>2013 - Present</Text>
                <Text>Through the years, I have worked with many talented people in several film and photography projects developing content for their businesses marketing and passion projects. I have made small documentaries, music videos, and promotional pieces that have given me a lot of experience and knowledge. To name a few organizations and people I have worked with, Williamson Productions, The Hispanic Chamber, Opening the World, singer/songwriter Shannon Bonne, Umba Entertainment, and many more. Currently I am involved with a documentary as a camera operator and editor about Escrima in Stockton.</Text>
              </Box>
            </GridItem>

            <GridItem colSpan={3} h="10" display="flex" justifyContent="end">
              <Text fontSize={30} fontWeight="bold" me={10}>
                2018
              </Text>
            </GridItem>

            <GridItem
              colStart={4}
              colEnd={8}
              borderLeft=".2rem solid black"
            >
              <Box p={5} ms={10} mb={5} mt={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Multimedia Clerk Temp - CodeStack</Text>
                <Text fontWeight={700} mb={2}>Feb 2018 - Dec 2019</Text>
                <Text>Over at CEDR Systems, I am part of the media and marketing department. We are in charge of developing all sorts of media. My specialty here is creating motion graphics, videos, photography, and developing marketing content for advertising and social media platforms. I have also been involved with designing the UI/UX for clients. The focus is education and government work. I believe in delivering cinematic videos, motion graphics, and photos that are compelling and high quality.</Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
</Show>

<Hide above="md">

      <Text display='flex' justifyContent='center' fontSize={30} fontWeight="bold">Present</Text>

      <Container style={{background: "linear-gradient(#000, #000) no-repeat center/2px 100%"}}  >
    <br/>
    <Box p={5}  mb={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Student - CodeStack Academy</Text>
                <Text fontWeight={700} mb={2}>Aug 2022 - Present</Text>
                <Text>As part of my career change to web development, I joined CodeStack Academy to learn web development. It as has been a wonderful time learning and getting to deploy websites. So far I’ve learned Unity 3D, C#, Javascript, and React!</Text>
              </Box>
      <br/>
      <Box p={5} mb={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Multimedia Specialist - CodeStack</Text>
                <Text fontWeight={700} mb={2}>Dec 2019 - Present</Text>
                <Text>Over at CodeStack, I was hired as a Multimedia Specialist to create more film projects, photography projects, and motion graphic pieces for various government clients in the educational field.</Text>
              </Box>
      <br/>
      <Box p={5} mb={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Filmmaking & Photography - Freelance</Text>
                <Text fontWeight={700} mb={2}>2013 - Present</Text>
                <Text>Through the years, I have worked with many talented people in several film and photography projects developing content for their businesses marketing and passion projects. I have made small documentaries, music videos, and promotional pieces that have given me a lot of experience and knowledge. To name a few organizations and people I have worked with, Williamson Productions, The Hispanic Chamber, Opening the World, singer/songwriter Shannon Bonne, Umba Entertainment, and many more. Currently I am involved with a documentary as a camera operator and editor about Escrima in Stockton.</Text>
              </Box>
       <br/>       
  </Container>


      <Text display='flex' justifyContent='center' fontSize={30} fontWeight="bold">2018</Text>
     

  <Container style={{background: "linear-gradient(#000, #000) no-repeat center/2px 100%"}}  >
    <br/>
      <Box p={5} mb={5} mt={5} bg='lightgray' borderRadius={10} className="myNoise2">
                <Text fontSize={20} fontWeight={700} mb={2}>Multimedia Clerk Temp - CodeStack</Text>
                <Text fontWeight={700} mb={2}>Feb 2018 - Dec 2019</Text>
                <Text>Over at CEDR Systems, I am part of the media and marketing department. We are in charge of developing all sorts of media. My specialty here is creating motion graphics, videos, photography, and developing marketing content for advertising and social media platforms. I have also been involved with designing the UI/UX for clients. The focus is education and government work. I believe in delivering cinematic videos, motion graphics, and photos that are compelling and high quality.</Text>
                </Box>
  </Container>

</Hide>
      </Container>
    </>
  );
};

export default AboutPage;
