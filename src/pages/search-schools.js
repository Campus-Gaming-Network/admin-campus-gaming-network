import React from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast
} from "@chakra-ui/core";
import Layout from "../components/Layout";
import JSONView from "../components/JSONView";
import { firebaseFirestore } from "../firebase";
import { COLLECTIONS } from "../constants";

const SearchSchools = () => {
  const toast = useToast();
  const [schoolQuery, setSchoolQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [school, setSchool] = React.useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSearching(true);
    const query = schoolQuery ? schoolQuery.trim() : "";

    if (query && query !== "") {
      try {
        const doc = await firebaseFirestore
          .collection(COLLECTIONS.SCHOOLS)
          .doc(query)
          .get();

        if (doc.exists) {
          setSchool(doc.data());
        }
        setIsSearching(false);
        toast({
          title: "School found.",
          description: `School found matching ${query}`,
          status: "success",
          duration: 9000,
          isClosable: true
        });
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: "Unable to search schools.",
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
        <Heading>Search Schools</Heading>
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
          <FormLabel htmlFor="schoolQuery" fontSize="lg" fontWeight="bold">
            School ID
          </FormLabel>
          <Input
            id="schoolQuery"
            name="schoolQuery"
            type="text"
            placeholder="E.g. lD4qKGNGmnafq1SlhWlTj6JXK9I3"
            onChange={e => setSchoolQuery(e.target.value)}
            value={schoolQuery}
            size="lg"
          />
        </FormControl>
        <Button type="submit" disabled={isSearching}>
          {isSearching ? "Searching..." : "Search Schools"}
        </Button>
      </Box>
      <JSONView src={school} />
    </Layout>
  );
};

export default SearchSchools;
