import {
  HStack,
  Image,
  Box,
  Text,
  Container,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BluBlack.png";

const Footer = () => {
  return (
    // <>hola</>
    <>
      <Container maxW="container.xl">
        <HStack justifyContent="start" mt={12} mb={5}>
          <Box as={Link} to="/">
            <Image me={2} src={logo} boxSize="35px" alt="logo"/>
          </Box>
          <Box mx={2} as={Link} to="/" fontSize={11} fontWeight="bold">
            Home
          </Box>
          <Box mx={2} as={Link} to="/AboutPage" fontSize={11} fontWeight="bold">
            About
          </Box>
  

        <Box>
          <Menu>
            <MenuButton
              fontSize={11}
              fontWeight="bold"
              backgroundColor="transparent"
              as={Button}
              m={0}
              p={0}
              rightIcon={<ChevronDownIcon />}
            >
              Projects
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/Web">
                Web
              </MenuItem>
              <MenuItem as={Link} to="/Filmmaking">
                Filmmaking
              </MenuItem>
              <MenuItem as={Link} to="/Photography">
                Photography
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
          <Box  as={Link} to="/Contact" fontSize={11} fontWeight="bold">
            Contact
          </Box>
        </HStack>
        <Text mb={10} fontSize={11} color="#595858">
          Copyright © 2023 Saul Suazo. All rights reserved.
        </Text>
      </Container>
    </>
  );
};

export default Footer;
