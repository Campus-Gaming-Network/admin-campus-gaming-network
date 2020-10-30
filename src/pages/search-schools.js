import React from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from "@chakra-ui/core";
import Layout from "../components/Layout";

const SearchSchools = () => {
  const [schoolIdQuery, setSchoolIdQuery] = React.useState("");
  const [errors, setErrors] = React.useState({});

  return (
    <Layout>
      <Box pb={8}>
        <Heading>Search Schools</Heading>
      </Box>
      <Box as="form" maxW="2xl" bg="white" rounded="lg" borderWidth={1} p={8}>
        <FormControl isRequired mb={8}>
          <FormLabel htmlFor="schoolIdQuery" fontSize="lg" fontWeight="bold">
            School ID
          </FormLabel>
          <Input
            id="schoolIdQuery"
            name="schoolIdQuery"
            type="text"
            placeholder="E.g. lD4qKGNGmnafq1SlhWlTj6JXK9I3"
            onChange={e => setSchoolIdQuery(e.target.value)}
            value={schoolIdQuery}
            size="lg"
          />
          <FormErrorMessage>{errors.schoolIdQuery}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Search Schools</Button>
      </Box>
    </Layout>
  );
};

export default SearchSchools;
