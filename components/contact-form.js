import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Button, Input, LightMode, DarkMode, Textarea, useToast } from '@chakra-ui/core';
import {AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay} from "@chakra-ui/core"
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import {useRef, useState} from 'react';

export default function ContactForm() {
  const cancelRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false)
  const toast = useToast();

  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = 'You need to specify an email address !';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Your email address is invalid :S ...';
    }
    
    if (!values.name) {
      errors.name = 'You need to add your name !';
    }

    return errors;
  }

  async function submit(values, {setSubmitting}) {
    const res = await fetch('/api/contact', {method: 'POST', body: JSON.stringify(values)});
    setSubmitting(false);
    if (!res.ok) {
      setIsOpen(true);
    } else {
      toast({
        title: "Request successfully sent !",
        description: "I will answer you about your project very soon ! Thank you for contacting me !",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <>
    <Formik initialValues={{email: '', name: '', msg: ''}} validate={validate} onSubmit={submit}>
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email} mb={4}>
                <Input {...field} id="email" placeholder="Email" bg="white"/>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name} mb={4}>
                <Input {...field} id="name" placeholder="Name" bg="white"/>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="msg">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.msg && form.touched.msg}>
                <Textarea {...field} id="msg" placeholder="What's your project about ?" rows="8" bg="white"/>
                <FormErrorMessage>{form.errors.msg}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="red" isLoading={props.isSubmitting} type="submit" leftIcon={<RiSendPlaneFill/>}>
            Contact me
          </Button>
        </Form>
      )}
    </Formik>

    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Network error !
            </AlertDialogHeader>

            <AlertDialogBody>
              I am having trouble reaching my server :S ! Would you mind contacting me through another platform instead ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button as="a" target="_blank" href="https://www.linkedin.com/in/rhidra/" leftIcon={<FaLinkedin/>} colorScheme="blue" ml={3}>
                Contact on Linkedin
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}