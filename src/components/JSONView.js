import React from "react";
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/core";
import ReactJson from "react-json-view";
import { JSON_VIEW_THEMES, DEFAULT_JSON_VIEW_THEME } from "../constants";

const JSONView = props => {
  const [theme, setTheme] = React.useState(DEFAULT_JSON_VIEW_THEME);
  const changeTheme = e => {
    setTheme(e.target.value);
  };

  if (!props.src) {
    return null;
  }

  return (
    <React.Fragment>
      <Box mb={8} w={250} ml="auto">
        <FormControl>
          <FormLabel htmlFor="theme" fontWeight="bold">
            JSON Theme
          </FormLabel>
          <Select id="theme" placeholder="Select theme" onChange={changeTheme}>
            {JSON_VIEW_THEMES.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box rounded="lg">
        <ReactJson
          src={props.src}
          displayObjectSize={false}
          theme={theme}
          displayDataTypes={false}
          style={{
            padding: 12,
            overflowY: "auto",
            maxHeight: 750,
            border: "1px solid #E2E8F0",
            borderRadius: "0.5em"
          }}
          {...props.jsonConfig}
        />
      </Box>
    </React.Fragment>
  );
};

export default JSONView;
