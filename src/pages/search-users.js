import React from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useToast
} from "@chakra-ui/core";
import Layout from "../components/Layout";
import JSONView from "../components/JSONView";
import { firebase } from "../firebase";

const SearchUsers = () => {
  const toast = useToast();
  const [userQuery, setUserQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [errors] = React.useState({});
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
        toast({
          title: "User found.",
          description: `User found matching ${query}`,
          status: "success",
          duration: 9000,
          isClosable: true
        });
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: "Unable to search users.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
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
