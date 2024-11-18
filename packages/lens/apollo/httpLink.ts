import { HttpLink } from "@apollo/client";
import { LENS_API_URL } from "@lcm/data/constants";

const httpLink = new HttpLink({
  fetch,
  fetchOptions: "no-cors",
  uri: LENS_API_URL
});

export default httpLink;
