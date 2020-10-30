import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Button, Input, LightMode, DarkMode, Textarea } from '@chakra-ui/core';
import { RiSendPlaneFill } from 'react-icons/ri';

export default function ContactForm() {
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

  function submit(values, {setSubmitting}) {
    console.log(values, setSubmitting);
  }

  return (
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
  );
}