import Footer from "@components/Shared/Footer";
import type { FC } from "react";
import { memo } from "react";
import { useProfileStore } from "src/store/persisted/useProfileStore";

import EnableLensManager from "./EnableLensManager";
import SetProfile from "./SetProfile";

const Sidebar: FC = () => {
  const { currentProfile } = useProfileStore();
  const loggedInWithProfile = Boolean(currentProfile);
  const loggedOut = !loggedInWithProfile;

  return (
    <>
      {/* <Gitcoin /> */}
      {/*{loggedOut && <NotLoggedIn />}*/}
      {/* Onboarding steps */}
      {loggedInWithProfile && (
        <>
          <EnableLensManager />
          <SetProfile />
        </>
      )}
      {/* Recommendations */}
      {/* {loggedInWithProfile && <WhoToFollow />} */}
      <Footer />
    </>
  );
};

export default memo(Sidebar);
