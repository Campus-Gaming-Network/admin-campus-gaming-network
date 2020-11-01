import React from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select
} from "@chakra-ui/core";
import ReactJson from "react-json-view";
import isEmpty from "lodash.isempty";
import Layout from "../components/Layout";
import JSONView from "../components/JSONView";
import { firebase } from "../firebase";
import { JSON_VIEW_THEMES } from "../constants";

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SearchUsers = () => {
  const [userQuery, setUserQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const isEmailQuery = React.useMemo(
    () => (userQuery && userQuery.trim() ? isValidEmail(userQuery) : false),
    [userQuery]
  );
  const [user, setUser] = React.useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSearching(true);
    const query = userQuery ? userQuery.trim() : "";

    if (query && query !== "") {
      const searchUsers = firebase.functions().httpsCallable("searchUsers");
      try {
        const response = await searchUsers({ query });
        setUser(response.data);
        setIsSearching(false);
      } catch (error) {
        setIsSearching(false);
      }
    }
  };

  return (
    <Layout>
      <Box pb={8}>
        <Heading>Search Users</Heading>
      </Box>
      <Box
        as="form"
        onSubmit={handleSubmit}
        maxW="2xl"
        bg="white"
        rounded="lg"
        borderWidth={1}
        p={8}
        mb={8}
      >
        <FormControl isRequired mb={8}>
          <FormLabel htmlFor="userQuery" fontSize="lg" fontWeight="bold">
            User Email or User ID
          </FormLabel>
          <Input
            id="userQuery"
            name="userQuery"
            type="text"
            placeholder="E.g. brandon@campusgamingnetwork.com or lD4qKGNGmnafq1SlhWlTj6JXK9I3"
            onChange={e => setUserQuery(e.target.value)}
            value={userQuery}
            size="lg"
          />
          <FormErrorMessage>{errors.userQuery}</FormErrorMessage>
        </FormControl>
        <Button type="submit" disabled={isSearching}>
          {isSearching ? "Searching..." : "Search Users"}
        </Button>
      </Box>
      <JSONView src={user} />
    </Layout>
  );
};

export default SearchUsers;
