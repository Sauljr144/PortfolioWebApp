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
          mt={{ lg: "-125px", md: "-125px", sm: "-40px" }}
          mb={10}
          height={{ lg: "350px", md: "350px", sm: "250" }}
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
   
        <Tabs position="relative" variant="unstyled" m={0}>
          <TabList mb={4}>
            <Tab fontSize={20} fontWeight={700}>Web</Tab>
            <Tab fontSize={20} fontWeight={700}>Filmmaking</Tab>
            <Tab fontSize={20} fontWeight={700}>Photography</Tab>
          </TabList>
          <TabIndicator
            mt="-20.5px"
            height="2px"
            bg="black"
            borderRadius="10px"
          />
          <TabPanels>
            <TabPanel>
            <PWeb/>
            </TabPanel>
            <TabPanel>
              <PFilm/>
            </TabPanel>
            <TabPanel>
              <PPhoto/>
            </TabPanel>
          </TabPanels>
         </Tabs>

        
        </Container>


  

  
       
     
       

        
    
    </>
  )
}

export default ProjectsPage