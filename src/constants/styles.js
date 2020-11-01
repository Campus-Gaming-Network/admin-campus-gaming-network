////////////////////////////////////////////////////////////////////////////////
// Style Constants

export const DROPZONE_STYLES = {
  BASE: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
  },
  ACTIVE: {
    borderColor: "#2196f3"
  },
  ACCEPT: {
    borderColor: "#00e676"
  },
  REJECT: {
    borderColor: "#ff1744"
  }
};
export const JSON_VIEW_THEMES = [
  { value: "apathy", label: "apathy" },
  { value: "apathy:inverted", label: "apathy:inverted" },
  { value: "ashes", label: "ashes" },
  { value: "bespin", label: "bespin" },
  { value: "brewer", label: "brewer" },
  { value: "bright:inverted", label: "bright:inverted" },
  { value: "bright", label: "bright" },
  { value: "chalk", label: "chalk" },
  { value: "codeschool", label: "codeschool" },
  { value: "colors", label: "colors" },
  { value: "eighties", label: "eighties" },
  { value: "embers", label: "embers" },
  { value: "flat", label: "flat" },
  { value: "google", label: "google" },
  { value: "grayscale", label: "grayscale" },
  { value: "grayscale:inverted", label: "grayscale:inverted" },
  { value: "greenscreen", label: "greenscreen" },
  { value: "harmonic", label: "harmonic" },
  { value: "hopscotch", label: "hopscotch" },
  { value: "isotope", label: "isotope" },
  { value: "marrakesh", label: "marrakesh" },
  { value: "mocha", label: "mocha" },
  { value: "monokai", label: "monokai" },
  { value: "ocean", label: "ocean" },
  { value: "paraiso", label: "paraiso" },
  { value: "pop", label: "pop" },
  { value: "railscasts", label: "railscasts" },
  { value: "rjv-default", label: "rjv-default" },
  { value: "shapeshifter", label: "shapeshifter" },
  { value: "shapeshifter:inverted", label: "shapeshifter:inverted" },
  { value: "solarized", label: "solarized" },
  { value: "summerfruit", label: "summerfruit" },
  { value: "summerfruit:inverted", label: "summerfruit:inverted" },
  { value: "threezerotwofour", label: "threezerotwofour" },
  { value: "tomorrow", label: "tomorrow" },
  { value: "tube", label: "tube" },
  { value: "twilight", label: "twilight" }
];
export const DEFAULT_JSON_VIEW_THEME = "rjv-default";
