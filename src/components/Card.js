import React from "react";
import { Box } from "@chakra-ui/core";

const Card = ({ children, ...rest }) => {
  return (
    <Box
      w={200}
      h={150}
      rounded="lg"
      borderWidth={1}
      mr={8}
      bg="white"
      overflow="hidden"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
