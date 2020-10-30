import React from "react";
import startCase from "lodash.startcase";
import { Text } from "@chakra-ui/core";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import { useDebounce } from "@campus-gaming-network/tools";
import { firebase } from "../firebase";

const SchoolSearch = props => {
  const [searchTerm, setSearchTerm] = React.useState(props.schoolName || "");

  const handleChange = event => setSearchTerm(event.target.value);

  const debouncedSchoolSearch = useDebounce(searchTerm, 250);

  const useSchoolSearch = debouncedSchoolSearch => {
    const [schools, setSchools] = React.useState(null);

    React.useEffect(() => {
      const _debouncedSchoolSearch = debouncedSchoolSearch.trim();

      if (_debouncedSchoolSearch !== "" && _debouncedSchoolSearch.length > 3) {
        let isFresh = true;

        fetchSchools(debouncedSchoolSearch).then(schools => {
          if (isFresh) {
            setSchools(schools);
          }
        });
        return () => (isFresh = false);
      }
    }, [debouncedSchoolSearch]);

    return schools;
  };

  const fetchSchools = searchTerm => {
    const value = searchTerm ? searchTerm.trim().toLowerCase() : "";
    const searchSchools = firebase.functions().httpsCallable("searchSchools");

    return searchSchools({ query: value }).then(result => {
      if (result?.data?.hits?.length > 0) {
        return result.data.hits.slice(0, 10);
      }

      return [];
    });
  };

  const results = useSchoolSearch(debouncedSchoolSearch);

  const handleSchoolSelect = selectedSchool => {
    const [schoolName, location] = selectedSchool.split(" – ");
    const [city, state] = location.split(", ");
    const matchedSchool = results.find(
      school =>
        startCase(school.name.toLowerCase()) ===
          startCase(schoolName.toLowerCase()) &&
        school.city.toLowerCase() === city.toLowerCase() &&
        school.state.toLowerCase() === state.toLowerCase()
    );

    props.onSelect(matchedSchool);

    if (matchedSchool) {
      if (props.clearInputOnSelect) {
        setSearchTerm("");
      } else {
        setSearchTerm(selectedSchool);
      }
    }
  };

  return (
    <Combobox
      aria-label="School"
      name={props.name || "school"}
      onSelect={handleSchoolSelect}
    >
      <ComboboxInput
        id={props.id || "school"}
        name={props.name || "school"}
        placeholder={props.inputPlaceholder || "Search schools"}
        onChange={handleChange}
        value={searchTerm}
      />
      {results && (
        <ComboboxPopover>
          {results.length > 0 ? (
            <ComboboxList>
              {results.map(school => {
                const value = `${startCase(
                  school.name.toLowerCase()
                )} – ${startCase(school.city.toLowerCase())}, ${school.state}`;

                return <ComboboxOption key={school.objectID} value={value} />;
              })}
            </ComboboxList>
          ) : (
            <Text as="span" d="block">
              No results found
            </Text>
          )}
        </ComboboxPopover>
      )}
    </Combobox>
  );
};

export default SchoolSearch;
