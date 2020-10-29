import React from "react";
import { Flex, Stack } from "@chakra-ui/core";
import Link from "./Link";
import Card from "./Card";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSchool,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Layout>
      <Flex>
        <Card>
          <Stack h="100%" justify="center" align="center">
            <FontAwesomeIcon icon={faUserAlt} />
            <Link to="users" fontWeight="bold" pt={2}>
              Users
            </Link>
          </Stack>
        </Card>
        <Card>
          <Stack h="100%" justify="center" align="center">
            <FontAwesomeIcon icon={faSchool} />
            <Link to="schools" fontWeight="bold" pt={2}>
              Schools
            </Link>
          </Stack>
        </Card>
        <Card>
          <Stack h="100%" justify="center" align="center">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Link to="events" fontWeight="bold" pt={2}>
              Events
            </Link>
          </Stack>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Home;
