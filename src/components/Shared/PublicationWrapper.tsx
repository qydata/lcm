import type { FC, ReactNode } from "react";

import cn from "@lcm/ui/cn";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface PublicationWrapperProps {
  children: ReactNode | ReactNode[];
  className?: string;
  publication: Post;
}

const PublicationWrapper: FC<PublicationWrapperProps> = ({
  children,
  className = "",
  publication
}) => {
  const { pathname, push } = useRouter();

  const handleClick = () => {
    if (pathname === "/mod") {
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      push(`/posts/${publication.id}`);
    }
  };

  return (
    <motion.article
      animate={{ opacity: 1 }}
      className={cn(className)}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={handleClick}
    >
      {children}
    </motion.article>
  );
};

export default PublicationWrapper;
