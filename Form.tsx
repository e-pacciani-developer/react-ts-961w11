import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  Box,
  Button,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';

const MyForm: React.FC = () => {
  return (
    <Box padding="2rem">
      <Stack spacing={3}>
        {/* <Formik
          initialValues={{ name: 'Sasuke' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        > */}
        <FormControl as="fieldset">
          <FormLabel>Nome</FormLabel>
          <Input variant="filled" placeholder="Nome" />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel>Cognome</FormLabel>
          <Input variant="filled" placeholder="Cognome" />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel>Colore</FormLabel>
          <Input variant="filled" placeholder="Colore" />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel>Data Nascita</FormLabel>
          <Input variant="filled" placeholder="Data Nascita" type="date" />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel>Occupazione</FormLabel>
          <Input variant="filled" placeholder="Occupazione" />
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
        {/* </Formik> */}
      </Stack>
    </Box>
  );
};

export default MyForm;
