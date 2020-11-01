////////////////////////////////////////////////////////////////////////////////
// Firebase Constants

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
export const COLLECTIONS = {
  SCHOOLS: "schools",
  USERS: "users",
  EVENTS: "events",
  EVENT_RESPONSES: "event-responses",
  GAME_QUERIES: "game-queries"
};
export const CALLABLES = {
  SEARCH_GAMES: "searchGames",
  SEARCH_SCHOOLS: "searchSchools",
  SEARCH_USERS: "searchUsers"
};
