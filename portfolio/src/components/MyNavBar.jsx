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
  LinkOverlay,
  LinkBox,
  Container,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/BluBlack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";

const MyNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Show above="md">
        <Container maxW="container.xl" justifyContent="end" mt={7}>
          <HStack justifyContent="start">
            <LinkBox ms={2}>
              <LinkOverlay href="https://www.linkedin.com/in/saul-s-727702196/" />
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </LinkBox>
            <LinkBox ms={3}>
              <LinkOverlay href="https://github.com/Sauljr144" />
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </LinkBox>
            <LinkBox ms={2} me={2}>
              <LinkOverlay href="https://vimeo.com/saulsuazo" />
              <FontAwesomeIcon icon={faVimeoV} size="xl" />
            </LinkBox>

            <LinkBox ms={1}>
              <LinkOverlay href="https://www.instagram.com/bluwolfpictures/" />
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </LinkBox>
          </HStack>

          <HStack justifyContent="center" mt={2} mb={10}>
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
        </Container>
      </Show>

      <Hide above="md">
        <HStack justifyContent="space-between" my={3}>
          <Box as={Link} to="/">
            <Image mx={5} src={logo} boxSize="40px" />
          </Box>

          <HStack me={5}>
            <LinkBox me={2}>
              <LinkOverlay href="https://www.linkedin.com/in/saul-s-727702196/" />
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </LinkBox>
            <LinkBox me={2}>
              <LinkOverlay href="https://github.com/Sauljr144" />
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </LinkBox>
            <LinkBox me={2}>
              <LinkOverlay href="https://vimeo.com/saulsuazo" />
              <FontAwesomeIcon icon={faVimeoV} size="xl" />
            </LinkBox>

            <LinkBox me={2}>
              <LinkOverlay href="https://www.instagram.com/bluwolfpictures/" />
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </LinkBox>

            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              type="button"
              ref={btnRef}
              onClick={onOpen}
            />
          </HStack>
        </HStack>

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
              <SimpleGrid columns={1}>
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

                <Box as={Link} to="/Contact">
                  Contact
                </Box>
              </SimpleGrid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </>
  );
};

export default MyNavBar;
