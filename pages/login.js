// Libraries
import React from "react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  Divider,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import isEmpty from "lodash.isempty";
import { useRouter } from "next/router";

// Utilities
// import { useFormFields } from "src/utilities/other";
// import { validateLogIn } from "src/utilities/validation";

// Other
// import firebase from "src/firebase";

export const useFormFields = (initialState) => {
  const [fields, setValues] = React.useState(initialState);

  return [
    fields,
    (event) => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
};

////////////////////////////////////////////////////////////////////////////////
// Login

const Login = () => {
  const router = useRouter();
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const hasErrors = React.useMemo(() => !isEmpty(errors), [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //   setError(null);
    //   setIsLoading(true);

    //   const { isValid, errors } = validateLogIn(fields);

    //   setErrors(errors);

    //   if (!isValid) {
    //     setIsLoading(false);
    //     window.scrollTo(0, 0);
    //     return;
    //   }

    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(fields.email, fields.password)
    //     .then(() => {
    //       router.push("/");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setError(error.message);
    //       setIsLoading(false);
    //       window.scrollTo(0, 0);
    //     });
  };

  return (
    <Box as="main" pos="relative" pb={12} bg="#fdfdfd" minH="100vh" h="100%">
      <Box
        as="article"
        py={{ base: 6, md: 16 }}
        px={{ base: 0, md: 8 }}
        mx="auto"
        fontSize="xl"
        maxW={{
          base: "100%",
          sm: "xl",
          md: "3xl",
        }}
      >
        {hasErrors ? (
          <Alert status="error" mb={4} rounded="lg">
            <AlertIcon />
            <AlertDescription>
              There are errors in the form below. Please review and correct
              before submitting again.
            </AlertDescription>
          </Alert>
        ) : null}
        <Box
          pos="relative"
          borderWidth={1}
          boxShadow="lg"
          rounded={{ base: "none", md: "lg" }}
          bg="white"
          as="form"
          p={12}
          onSubmit={handleSubmit}
        >
          <Heading as="h1" size="2xl">
            Login
          </Heading>
          <Divider borderColor="gray.300" mt={12} mb={10} />
          {error ? (
            <Alert status="error" mb={12} rounded="lg">
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}
          <Stack spacing={6}>
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel htmlFor="email" fontSize="lg" fontWeight="bold">
                Email
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jdoe123@gmail.com"
                onChange={handleFieldChange}
                value={fields.email}
                size="lg"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel htmlFor="password" fontSize="lg" fontWeight="bold">
                Password
              </FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******************"
                onChange={handleFieldChange}
                value={fields.password}
                size="lg"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
          </Stack>
          <Button
            colorScheme="orange"
            type="submit"
            size="lg"
            w="full"
            isDisabled={isLoading}
            isLoading={isLoading}
            loadingText="Logging in..."
            my={12}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
