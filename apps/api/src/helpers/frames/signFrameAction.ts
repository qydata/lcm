import LensEndpoint from "@hey/data/lens-endpoints";
import axios from "axios";

import { LCM_USER_AGENT } from "../constants";

/**
 * Middleware to validate Lens access token for connections
 * @param accessToken Incoming access token
 * @param network Incoming network
 * @returns Response
 */
const signFrameAction = async (
  request: {
    actionResponse: string;
    buttonIndex: number;
    inputText: string;
    profileId: string;
    pubId: string;
    specVersion: string;
    state: string;
    url: string;
  },
  accessToken: string,
  network: string
): Promise<{
  signature: string;
  signedTypedData: { value: any };
} | null> => {
  const allowedNetworks = ["ctchain", "testnet"];

  if (!network || !allowedNetworks.includes(network)) {
    return null;
  }

  const isMainnet = network === "ctchain";
  try {
    const { data } = await axios.post(
      isMainnet ? LensEndpoint.Ctchain : LensEndpoint.Testnet,
      {
        query: `
          mutation SignFrameAction($request: FrameLensManagerEIP712Request!) {
            signFrameAction(request: $request) {
              signature
              signedTypedData {
                value {
                  actionResponse
                  buttonIndex
                  deadline
                  inputText
                  profileId
                  pubId
                  specVersion
                  state
                  url
                }
              }
            }
          }
        `,
        variables: {
          request: {
            actionResponse: request.actionResponse,
            buttonIndex: request.buttonIndex,
            inputText: request.inputText,
            profileId: request.profileId,
            pubId: request.pubId,
            specVersion: request.specVersion,
            state: request.state,
            url: request.url
          }
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "User-agent": LCM_USER_AGENT
          // "X-Access-Token": accessToken
        }
      }
    );

    return data.data.signFrameAction;
  } catch {
    return null;
  }
};

export default signFrameAction;
