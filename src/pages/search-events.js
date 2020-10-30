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

const SearchEvents = () => {
  const [eventIdQuery, setEventIdQuery] = React.useState("");
  const [errors, setErrors] = React.useState({});

  return (
    <Layout>
      <Box pb={8}>
        <Heading>Search Events</Heading>
      </Box>
      <Box as="form" maxW="2xl" bg="white" rounded="lg" borderWidth={1} p={8}>
        <FormControl isRequired mb={8}>
          <FormLabel htmlFor="eventIdQuery" fontSize="lg" fontWeight="bold">
            Event ID
          </FormLabel>
          <Input
            id="eventIdQuery"
            name="eventIdQuery"
            type="text"
            placeholder="E.g. lD4qKGNGmnafq1SlhWlTj6JXK9I3"
            onChange={e => setEventIdQuery(e.target.value)}
            value={eventIdQuery}
            size="lg"
          />
          <FormErrorMessage>{errors.eventIdQuery}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Search Events</Button>
      </Box>
    </Layout>
  );
};

export default SearchEvents;
