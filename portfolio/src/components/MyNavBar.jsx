import React from "react";
import { Link } from "react-router-dom";
import {
  HStack,
  Image,
  Box,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  SimpleGrid,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/BluBlack.png";

const MyNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Show above="md">
        <HStack justifyContent="center" my={12}>
          <Box mx={10} as={Link} to="/">
            Home
          </Box>
          <Box mx={10} as={Link} to="/AboutPage">
            About
          </Box>
          <Box as={Link} to="/" mx={10}>
            <Image src={logo} boxSize="60px" />
          </Box>

          <Menu>
            <MenuButton
              fontWeight="normal"
              backgroundColor="transparent"
              as={Button}
              m={0}
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
          <Box mx={10} as={Link} to="/Contact">
            Contact
          </Box>
        </HStack>
      </Show>

      <Hide above="md">
        <HStack justifyContent="space-between" my={3}>
          <Box as={Link} to="/">
            <Image mx={5} src={logo} boxSize="40px" />
          </Box>

          <Box mx={7}>
            <FontAwesomeIcon
              icon={faBars}
              type="button"
              ref={btnRef}
              onClick={onOpen}
            />
          </Box>

          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
            colorScheme="gray"
            size="xs"
            placement="top"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>

              <DrawerBody>
                <SimpleGrid columns={1} >
                  <Box as={Link} to="/">
                    Home
                  </Box>
                  <Box as={Link} to="/AboutPage">
                    About
                  </Box>
                  <Box>
                  <Menu>
                    <MenuButton
                      height={5}
                      fontWeight="normal"
                      backgroundColor="transparent"
                      as={Button}
                      p={0}
                     
                      rightIcon={<ChevronDownIcon />}
                    >
                      Projects
                    </MenuButton>
                    <MenuList >
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

                  <Box as={Link} to="/Contact">
                    Contact
                  </Box>
                </SimpleGrid>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Hide>
    </>
  );
};

export default MyNavBar;
