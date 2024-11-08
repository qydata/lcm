import type {Post} from "@hey/lens";
import type {FC} from "react";

import {MenuItem} from "@headlessui/react";
import {ClipboardDocumentIcon} from "@heroicons/react/24/outline";
import cn from "@hey/ui/cn";

interface ShareProps {
    publication: Post;
}

const Share: FC<ShareProps> = ({publication, setShowSearch}) => {

    return (
        <MenuItem
            as="div"
            className={({focus}) =>
                cn(
                    {"dropdown-active": focus},
                    "m-2 block cursor-pointer rounded-lg px-2 py-1.5 text-sm"
                )
            }
            onClick={(event) => {
                setShowSearch(true)
            }}
        >

            <div className="flex items-center space-x-2">
                <ClipboardDocumentIcon className="size-4"/>
                <div>分享</div>
            </div>
        </MenuItem>
    );
};

export default Share;
