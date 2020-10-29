import React from "react";
import { Flex, Stack } from "@chakra-ui/core";
import Link from "./Link";
import Card from "./Card";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPlus,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Users = () => {
  return (
    <Layout>
      <Flex>
        <Card>
          <Stack h="100%" justify="center" align="center">
            <FontAwesomeIcon icon={faSearch} />
            <Link to="search" fontWeight="bold">
              Search Users
            </Link>
          </Stack>
        </Card>
        <Card>
          <Stack h="100%" justify="center" align="center">
            <FontAwesomeIcon icon={faPlus} />
            <Link to="create" fontWeight="bold">
              Create User
            </Link>
          </Stack>
        </Card>
        <Card>
          <Stack h="100%" justify="center" align="center">
            <FontAwesomeIcon icon={faPencilAlt} />
            <Link to="edit" fontWeight="bold">
              Edit User
            </Link>
          </Stack>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Users;
