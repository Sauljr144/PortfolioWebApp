import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  GridItem,
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  WarningIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";


const Contact = () => {

  
  
  const { onClose, isOpen, onOpen } = useDisclosure();

  const [submitError, setSubmitError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_5olt04p",
        "template_w0vjvr6",
        {
          from_name: form.name,
          to_name: "Saul",
          from_email: form.email,
          to_email: "saulsuazojr06@gmail.com",
          message: form.message,
        },
        "HPdR25maI-7R6B2Be"
      )
      .then(
        () => {
          console.log(submitError);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error, "try again");
          setSubmitError(true);
          console.log(isOpen);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={15}>
          <ModalCloseButton />
          <ModalBody className="myNoise" borderRadius={15}>
            <Text textAlign="center" mt={5}>
              {submitError ? (
                <WarningIcon boxSize={10} />
              ) : (
                <CheckCircleIcon boxSize={10} />
              )}
            </Text>
            <Text fontSize={25} fontWeight={700} textAlign="center" mt={2}>
              {submitError ? "Something Went Wrong!" : "Success!"}
            </Text>
            <Text mb={5} textAlign={submitError ? "center" : "left"}>
              {submitError
                ? "There was an error, please try again!"
                : "I will get back to you as soon as possible. In the meantime, feel free to check more of my work! Thank you!"}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Container
        maxW="container.lg"
        className="myNoise"
        borderRadius={30}
        p={10}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }}>
          <GridItem display="flex" alignItems="center" justifyContent="center">
            <Text
              pe={{ sm: 0, md: 10 }}
              textAlign="center"
              fontSize={40}
              fontWeight={700}
            >
              Let's Work Together!
            </Text>
          </GridItem>
          <GridItem>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel mt={4} fontWeight={600}>
                  Name
                </FormLabel>
                <Input
                  mb={4}
                  bgColor="#FAFAFA"
                  type="text"
                  placeholder="Name goes here."
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  ref={formRef}
                />
                <FormLabel fontWeight={600}>Email</FormLabel>
                <Input
                  mb={4}
                  bgColor="#FAFAFA"
                  type="email"
                  placeholder="Email goes here."
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <FormLabel fontWeight={600}>Message</FormLabel>
                <Textarea
                  type="text"
                  bgColor="#FAFAFA"
                  mb={4}
                  placeholder="Message goes here."
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </FormControl>
              <Box display="flex" justifyContent="center" mb={4}>
                <Button bgColor="#FAFAFA" type="submit" onClick={onOpen}>
                  {loading ? "Sending..." : "Send"}
                </Button>
              </Box>
            </form>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Contact;
