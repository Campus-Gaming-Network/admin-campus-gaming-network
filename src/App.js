import React from "react";
import { Router } from "@reach/router";
import { Box } from "@chakra-ui/core";
import ScrollToTop from "./ScrollToTop";

import Home from "./home";

import Users from "./users";
import UsersHome from "./users-home";
import SearchUser from "./search-users";
import CreateUsers from "./create-users";
import EditUsers from "./edit-users";

import Schools from "./schools";
import SchoolsHome from "./schools-home";
import SearchSchools from "./search-schools";
import CreateSchools from "./create-schools";
import EditSchools from "./edit-schools";

import Events from "./events";
import EventsHome from "./events-home";
import SearchEvents from "./search-events";
import CreateEvents from "./create-events";
import EditEvents from "./edit-events";

const App = () => {
  return (
    <Box as="main" pb={12} bg="#fdfdfd" minH="100vh" h="100%">
      <Router>
        <ScrollToTop default>
          <Home path="/" />
          <Users path="users">
            <UsersHome path="/" />
            <SearchUser path="search" />
            <CreateUsers path="create" />
            <EditUsers path="edit" />
          </Users>
          <Schools path="schools">
            <SchoolsHome path="/" />
            <SearchSchools path="search" />
            <CreateSchools path="create" />
            <EditSchools path="edit" />
          </Schools>
          <Events path="events">
            <EventsHome path="/" />
            <SearchEvents path="search" />
            <CreateEvents path="create" />
            <EditEvents path="edit" />
          </Events>
        </ScrollToTop>
      </Router>
    </Box>
  );
};

export default App;
