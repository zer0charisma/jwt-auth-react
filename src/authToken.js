import axios from 'axios';

export const authToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // axios.defaults.headers.common["Authorization"] = null;
    delete axios.defaults.headers.common["Authorization"];
  }
}
