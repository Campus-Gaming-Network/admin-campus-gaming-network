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
import Layout from "./Layout";

const SearchUsers = () => {
  const [userIdQuery, setUserIdQuery] = React.useState("");
  const [errors, setErrors] = React.useState({});

  return (
    <Layout>
      <Box pb={8}>
        <Heading>Search Users</Heading>
      </Box>
      <Box as="form" maxW="2xl" bg="white" rounded="lg" borderWidth={1} p={8}>
        <FormControl isRequired mb={8}>
          <FormLabel htmlFor="userIdQuery" fontSize="lg" fontWeight="bold">
            User ID
          </FormLabel>
          <Input
            id="userIdQuery"
            name="userIdQuery"
            type="text"
            placeholder="E.g. lD4qKGNGmnafq1SlhWlTj6JXK9I3"
            onChange={e => setUserIdQuery(e.target.value)}
            value={userIdQuery}
            size="lg"
          />
          <FormErrorMessage>{errors.userIdQuery}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Search Users</Button>
      </Box>
    </Layout>
  );
};

export default SearchUsers;
