import type { NextPage } from "next";

import Footer from "@components/Shared/Footer";

import { APP_NAME } from "@lcm/data/constants";
import { PAGEVIEW } from "@lcm/data/tracking";
import { H2, H4 } from "@lcm/ui";
import Link from "next/link";
import { useEffect } from "react";

const Rules: NextPage = () => {
  useEffect(() => {
    console.log(PAGEVIEW, { page: "rules" });
  }, []);

  return (
    <>
      <div className="flex h-48 w-full items-center justify-center bg-gray-400">
        <div className="relative text-center">
          <H2 className="text-white">Rules</H2>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <div className="relative mx-auto max-w-3/4 rounded-lg sm:w-2/4">
            <div className="ld-text-gray-500 !p-8 max-w-none">
              <div className="space-y-5">
                <p className="leading-7">
                  To protect all users on {APP_NAME} and to prevent spam, we put
                  some rules in place. Please read them carefully and remember
                  them whenever you are posting something on {APP_NAME} or you
                  are changing your Profile.
                </p>
              </div>
              {/* Safety beings */}
              <H4 className="mt-8 mb-5">Safety</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  You are not allowed to display, share or promote any form of
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Violence</li>
                  <li>Abuse</li>
                  <li>Harassment</li>
                  <li>Hateful speech</li>
                  <li>
                    Harmful content (including self-harm and suicidal content)
                  </li>
                  <li>Illegal/unlawful content</li>
                </ul>
              </div>
              {/* Safety ends */}
              {/* Nudity beings */}
              <H4 className="mt-8 mb-5">Nudity</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  {APP_NAME} is not a place to display, share or promote any
                  form of the following types of content:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Nudity</li>
                  <li>Sexual content</li>
                </ul>
                <p className="leading-7">
                  Please try to keep {APP_NAME} family-friendly (especially
                  considering all Images, Videos, Audios and Links).
                </p>
              </div>
              {/* Nudity ends */}
              {/* Spam beings */}
              <H4 className="mt-8 mb-5">Spam</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  You are not allowed to use {APP_NAME} as a platform to
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Manipulate other users</li>
                  <li>Create a large amount of Accounts</li>
                  <li>
                    Share excessive amounts of content of any type ("Spam")
                  </li>
                  <li>Airdrop farming</li>
                </ul>
                <p className="leading-7">
                  If your account got suspended, you are not allowed to create
                  any new accounts.
                </p>
              </div>
              {/* Spam ends */}
              {/* Impersonation beings */}
              <H4 className="mt-8 mb-5">Impersonation</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  You are not allowed to impersonate other people on {APP_NAME}.
                </p>
                <p className="leading-7">
                  We understand that some of you like to create Profiles with
                  the names of popular persons as a parody. If you do something
                  like this, please use the "About me" section on your Profile
                  to inform other users that your Account is a parody account.
                  You must do this in a way which can be easily seen and
                  understood by other users.
                </p>
              </div>
              {/* Impersonation ends */}
              {/* Copyright and Trademarks beings */}
              <H4 className="mt-8 mb-5">Copyright and Trademarks</H4>
              <p className="leading-7">
                You are not allowed to violate any intellectual property rights,
                including copyright and trademark, of others.
              </p>
              {/* Copyright and Trademarks ends */}
              {/* Feedback beings */}
              <H4 className="mt-8 mb-5">Feedback</H4>
              <p className="linkify leading-7">
                If you have any feedback on these rules or if you have any
                questions, please <Link href="/support">Contact us</Link>.
              </p>
              {/* Feedback ends */}
            </div>
          </div>
        </div>
        <div className="mt-2 mb-6 flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rules;
