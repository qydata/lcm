import type { Post, PublicationNotInterestedRequest } from "@lcm/lens";
import type { ApolloCache } from "@lcm/lens/apollo";
import type { FC } from "react";

import { MenuItem } from "@headlessui/react";
import errorToast from "@helpers/errorToast";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { PUBLICATION } from "@lcm/data/tracking";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import {
  useAddPublicationNotInterestedMutation,
  useUndoPublicationNotInterestedMutation
} from "@lcm/lens";
import cn from "@lcm/ui/cn";
import { toast } from "react-hot-toast";

interface NotInterestedProps {
  publication: Post;
}

const NotInterested: FC<NotInterestedProps> = ({ publication }) => {
  const notInterested = publication.operations.isNotInterested;

  const request: PublicationNotInterestedRequest = {
    on: publication.id
  };

  const updateCache = (cache: ApolloCache<any>, notInterested: boolean) => {
    cache.modify({
      fields: {
        operations: (existingValue) => {
          return { ...existingValue, isNotInterested: notInterested };
        }
      },
      id: cache.identify(publication)
    });
  };

  const onError = (error: any) => {
    errorToast(error);
  };

  const [addPublicationNotInterested] = useAddPublicationNotInterestedMutation({
    onCompleted: () => {
      toast.success("Marked as not Interested");
      console.log(PUBLICATION.NOT_INTERESTED, {
        publication_id: publication.id
      });
    },
    onError,
    update: (cache) => updateCache(cache, true),
    variables: { request }
  });

  const [undoPublicationNotInterested] =
    useUndoPublicationNotInterestedMutation({
      onCompleted: () => {
        toast.success("Undo Not interested");
        console.log(PUBLICATION.UNDO_NOT_INTERESTED, {
          publication_id: publication.id
        });
      },
      onError,
      update: (cache) => updateCache(cache, false),
      variables: { request }
    });

  const togglePublicationProfileNotInterested = async () => {
    if (notInterested) {
      return await undoPublicationNotInterested();
    }

    return await addPublicationNotInterested();
  };

  return (
    <MenuItem
      as="div"
      className={({ focus }) =>
        cn(
          { "dropdown-active": focus },
          "m-2 block cursor-pointer rounded-lg px-2 py-1.5 text-sm"
        )
      }
      onClick={(event) => {
        stopEventPropagation(event);
        togglePublicationProfileNotInterested();
      }}
    >
      <div className="flex items-center space-x-2">
        {notInterested ? (
          <>
            <EyeIcon className="size-4" />
            <div>撤销 不感兴趣</div>
          </>
        ) : (
          <>
            <EyeSlashIcon className="size-4" />
            <div>不感兴趣</div>
          </>
        )}
      </div>
    </MenuItem>
  );
};

export default NotInterested;
