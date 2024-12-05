import { ApolloLink } from "@apollo/client";
import { hydrateAuthSky, signOut } from "src/store/persisted/useAuthStore";

const REFRESH_AUTHENTICATION_MUTATION = `
  mutation Refresh($request: RefreshRequest!) {
    refresh(request: $request) {
      accessToken
      refreshToken
      identityToken
    }
  }
`;

const authLink = new ApolloLink((operation, forward) => {
  const { profile } = hydrateAuthSky();

  if (!profile) {
    console.log('no profile lagout 18')
    signOut();
    return forward(operation);
  }

  // operation.setContext({
  //   headers: { "X-Access-Token": profile?.id || "" }
  // });

  return forward(operation);
});

export default authLink;
