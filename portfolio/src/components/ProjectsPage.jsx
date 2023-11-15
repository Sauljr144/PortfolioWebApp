import { Box, Container, Text, Tabs, Tab, TabList, TabPanel, TabPanels, TabIndicator } from '@chakra-ui/react'
import React from 'react'
import PWeb from './PWeb'
import PFilm from './PFilm'
import PPhoto from './PPhoto'


const ProjectsPage = () => {
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
   
        {/* <Tabs position="relative" variant="unstyled">
          <TabList mb={4}>
            <Tab fontSize={{sm:15, md:20, lg:20}} fontWeight={700}>Web</Tab>
            <Tab fontSize={{sm:15, md:20, lg:20}} fontWeight={700} id='filmmaking'>Filmmaking</Tab>
            <Tab fontSize={{sm:15, md:20, lg:20}} fontWeight={700}>Photography</Tab>
          </TabList>
          <TabIndicator
            mt="-20.5px"
            height="2px"
            bg="black"
            borderRadius="10px"
          />
          <TabPanels p={0}>
            <TabPanel p={0}>
            <PWeb/>
            </TabPanel >
            <TabPanel p={0}>
              <PFilm/>
            </TabPanel>
            <TabPanel p={0}>
              <PPhoto/>
            </TabPanel>
          </TabPanels>
         </Tabs> */}

        
        </Container>


  

  
       
     
       

        
    
    </>
  )
}

export default ProjectsPage