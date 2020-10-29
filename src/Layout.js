import React from "react";
import { Box } from "@chakra-ui/core";

const Layout = ({ children, ...rest }) => {
  return (
    <Box as="article" p={8} {...rest}>
      {children}
    </Box>
  );
};

export default Layout;
