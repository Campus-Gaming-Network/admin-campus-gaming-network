import React from "react";
import startCase from "lodash.startcase";
import isEmpty from "lodash.isempty";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Button,
  Heading,
  FormErrorMessage,
  Box
} from "@chakra-ui/core";

import Layout from "../components/Layout";
import SchoolSearch from "../components/SchoolSearch";

const STUDENT_STATUS_OPTIONS = [
  { value: "", label: "Select status" },
  { value: "FRESHMAN", label: "Freshman" },
  { value: "SOPHMORE", label: "Sophmore" },
  { value: "JUNIOR", label: "Junior" },
  { value: "SENIOR", label: "Senior" },
  { value: "GRAD", label: "Grad" },
  { value: "ALUMNI", label: "Alumni" },
  { value: "FACULTY", label: "Faculty" },
  { value: "OTHER", label: "Other" }
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  school: "",
  status: ""
};

const formReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  };
};

const CreateUsers = () => {
  const [formState, formDispatch] = React.useReducer(
    formReducer,
    initialFormState
  );
  const handleFieldChange = React.useCallback(e => {
    formDispatch({ field: e.target.name, value: e.target.value });
  }, []);
  const onSchoolSelect = school => {
    formDispatch({ field: "school", value: school.id || "" });
  };
  const [error, setError] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const hasErrors = React.useMemo(() => !isEmpty(errors), [errors]);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setIsSubmitting(true);

  //   const { isValid, errors } = validateSignUp(formState);

  //   setErrors(errors);

  //   if (!isValid) {
  //     setIsSubmitting(false);
  //     window.scrollTo(0, 0);
  //     return;
  //   }

  //   firebaseAuth
  //     .createUserWithEmailAndPassword(formState.email, formState.password)
  //     .then(({ user }) => {
  //       firebaseFirestore
  //         .collection(COLLECTIONS.USERS)
  //         .doc(user.uid)
  //         .set({
  //           id: user.uid,
  //           firstName: formState.firstName,
  //           lastName: formState.lastName,
  //           status: formState.status,
  //           gravatar: createGravatarHash(formState.email),
  //           school: {
  //             ref: firebaseFirestore
  //               .collection(COLLECTIONS.SCHOOLS)
  //               .doc(formState.school),
  //             id: formState.school
  //           }
  //         });
  //       firebaseAuth.currentUser.sendEmailVerification().then(
  //         () => {
  //           toast({
  //             title: "Verification email sent.",
  //             description: `A verification email has been sent to ${formState.email}. Please check your inbox and follow the instructions in the email.`,
  //             status: "success",
  //             isClosable: true
  //           });
  //         },
  //         error => {
  //           console.error(error);
  //         }
  //       );
  //       setIsSubmitting(false);
  //       navigate("/");
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setError(error.message);
  //       setIsSubmitting(false);
  //       window.scrollTo(0, 0);
  //     });
  // };

  return (
    <Layout>
      <Box pb={8}>
        <Heading>Create User</Heading>
      </Box>
      {hasErrors ? (
        <Alert status="error" mb={4} rounded="lg">
          <AlertIcon />
          <AlertDescription>
            There are errors in the form below. Please review and correct before
            submitting again.
          </AlertDescription>
        </Alert>
      ) : null}
      <Box as="form" maxW="2xl" bg="white" rounded="lg" borderWidth={1} p={8}>
        <DetailSection
          handleFieldChange={handleFieldChange}
          errors={errors}
          firstName={formState.firstName}
          lastName={formState.lastName}
          email={formState.email}
          password={formState.password}
        />
        <SchoolSection
          handleFieldChange={handleFieldChange}
          errors={errors}
          status={formState.status}
          onSchoolSelect={onSchoolSelect}
        />
      </Box>
    </Layout>
  );
};

const DetailSection = React.memo(props => {
  const [isShowingPassword, setIsShowingPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setIsShowingPassword(!isShowingPassword);
  };

  return (
    <Stack spacing={6}>
      <FormControl isRequired isInvalid={props.errors.firstName}>
        <FormLabel htmlFor="firstName" fontSize="lg" fontWeight="bold">
          First Name
        </FormLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Jane"
          onChange={props.handleFieldChange}
          value={props.firstName}
          size="lg"
        />
        <FormErrorMessage>{props.errors.firstName}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={props.errors.lastName}>
        <FormLabel htmlFor="lastName" fontSize="lg" fontWeight="bold">
          Last Name
        </FormLabel>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Doe"
          onChange={props.handleFieldChange}
          value={props.lastName}
          size="lg"
        />
        <FormErrorMessage>{props.errors.lastName}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={props.errors.email}>
        <FormLabel htmlFor="email" fontSize="lg" fontWeight="bold">
          Email
        </FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jdoe@gmail.com"
          onChange={props.handleFieldChange}
          value={props.email}
          size="lg"
        />
        <FormErrorMessage>{props.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={props.errors.password}>
        <FormLabel htmlFor="password" fontSize="lg" fontWeight="bold">
          Password
        </FormLabel>
        <Input
          id="password"
          name="password"
          type={isShowingPassword ? "text" : "password"}
          placeholder="******************"
          onChange={props.handleFieldChange}
          value={props.password}
          size="lg"
        />
        <Button
          onClick={togglePasswordVisibility}
          fontSize="sm"
          fontStyle="italic"
          variant="link"
          fontWeight="normal"
        >
          {isShowingPassword ? "Hide" : "Show"} password
        </Button>
        <FormErrorMessage>{props.errors.password}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
});

const SchoolSection = React.memo(props => {
  return (
    <Stack spacing={6} pt={6}>
      <FormControl isRequired isInvalid={props.errors.school}>
        <FormLabel htmlFor="school" fontSize="lg" fontWeight="bold">
          School
        </FormLabel>
        <SchoolSearch onSelect={props.onSchoolSelect} />
        <FormErrorMessage>{props.errors.school}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={props.errors.status}>
        <FormLabel htmlFor="status" fontSize="lg" fontWeight="bold">
          Status
        </FormLabel>
        <Select
          id="status"
          name="status"
          onChange={props.handleFieldChange}
          value={props.status}
          size="lg"
        >
          {STUDENT_STATUS_OPTIONS.map(status => (
            <option key={status.value} value={status.value}>
              {startCase(status.label)}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{props.errors.status}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
});

export default CreateUsers;
