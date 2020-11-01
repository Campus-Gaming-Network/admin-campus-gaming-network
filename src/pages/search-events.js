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

const SearchEvents = () => {
  const toast = useToast();
  const [eventQuery, setEventQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [event, setEvent] = React.useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSearching(true);
    const query = eventQuery ? eventQuery.trim() : "";

    if (query && query !== "") {
      try {
        const doc = await firebaseFirestore
          .collection(COLLECTIONS.EVENTS)
          .doc(query)
          .get();

        if (doc.exists) {
          setEvent(doc.data());
        }

        setIsSearching(false);
        toast({
          title: "Event found.",
          description: `Event found matching ${query}`,
          status: "success",
          duration: 9000,
          isClosable: true
        });
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: "Unable to search events.",
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
        <Heading>Search Events</Heading>
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
          <FormLabel htmlFor="eventQuery" fontSize="lg" fontWeight="bold">
            Event ID
          </FormLabel>
          <Input
            id="eventQuery"
            name="eventQuery"
            type="text"
            placeholder="E.g. lD4qKGNGmnafq1SlhWlTj6JXK9I3"
            onChange={e => setEventQuery(e.target.value)}
            value={eventQuery}
            size="lg"
          />
        </FormControl>
        <Button type="submit" disabled={isSearching}>
          {isSearching ? "Searching..." : "Search Events"}
        </Button>
      </Box>
      <JSONView src={event} />
    </Layout>
  );
};

export default SearchEvents;
