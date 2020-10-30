import React from "react";
import { Flex } from "@chakra-ui/core";
import Link from "../components/Link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPlus,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Schools = () => {
  return (
    <Layout>
      <Flex>
        <Card>
          <Flex
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <FontAwesomeIcon icon={faSearch} />
            <Link to="search" fontWeight="bold" pt={2}>
              Search Schools
            </Link>
          </Flex>
        </Card>
        <Card>
          <Flex
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <FontAwesomeIcon icon={faPlus} />
            <Link to="create" fontWeight="bold" pt={2}>
              Create School
            </Link>
          </Flex>
        </Card>
        <Card>
          <Flex
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
            <Link to="edit" fontWeight="bold" pt={2}>
              Edit School
            </Link>
          </Flex>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Schools;
