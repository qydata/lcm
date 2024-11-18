import type { Post } from "@lcm/lens";
import type { FC } from "react";

import QuotedPublication from "@components/Publication/QuotedPublication";

import Wrapper from "./Wrapper";

interface QuoteProps {
  publication: Post;
}

const Quote: FC<QuoteProps> = ({ publication }) => {
  if (!publication) {
    return null;
  }

  return (
    <Wrapper zeroPadding>
      <QuotedPublication publication={publication} />
    </Wrapper>
  );
};

export default Quote;
