import React from "react";
import { Router } from "@reach/router";
import { Box } from "@chakra-ui/core";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home";

import Users from "./pages/users";
import UsersHome from "./pages/users-home";
import SearchUser from "./pages/search-users";
import CreateUsers from "./pages/create-users";
import EditUsers from "./pages/edit-users";

import Schools from "./pages/schools";
import SchoolsHome from "./pages/schools-home";
import SearchSchools from "./pages/search-schools";
import CreateSchools from "./pages/create-schools";
import EditSchools from "./pages/edit-schools";

import Events from "./pages/events";
import EventsHome from "./pages/events-home";
import SearchEvents from "./pages/search-events";
import CreateEvents from "./pages/create-events";
import EditEvents from "./pages/edit-events";

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
