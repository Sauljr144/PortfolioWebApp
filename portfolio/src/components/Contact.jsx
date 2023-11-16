import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SimpleGrid,
  GridItem,
  Button,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
// service_5olt04p
// template_w0vjvr6
// HPdR25maI-7R6B2Be
//

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_5olt04p",
      "template_w0vjvr6",
      {
        form_name: form.name,
        to_name: "Saul",
        form_email: form.email,
        to_email: "saulsuazojr06@gmail.com",
        message: form.message,
      },
      "HPdR25maI-7R6B2Be"
    ).then(()=>{
      alert('Email sent successfully!');

      setForm({
        name: "",
        email: "",
        message: ""
      });
    },
    (error)=>{
      setLoading(false)
      console.log(error, 'try again')
      alert('Something went wrong, try again.')
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
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
            <FormControl onSubmit={handleSubmit}>
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
              />
              <FormLabel fontWeight={600}>Message</FormLabel>
              {/* <Input mb={4} bgColor="#FAFAFA" type='text' placeholder='Message goes here.' height={200}/> */}
              <Textarea
                type="text"
                bgColor="#FAFAFA"
                mb={4}
                placeholder="Message goes here."
              />
            </FormControl>
            <Box display="flex" justifyContent="center" mb={4}>
              <Button bgColor="#FAFAFA" type="submite">
                Send
              </Button>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Contact;
