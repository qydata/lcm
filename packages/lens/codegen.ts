import type { CodegenConfig } from "@graphql-codegen/cli";

import LensEndpoint from "@lcm/data/lens-endpoints";

const config: CodegenConfig = {
  config: {
    inlineFragmentTypes: "combine"
  },
  customFetch: "node-fetch",
  documents: "./documents/**/*.graphql",
  generates: {
    "generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "fragment-matcher"
      ]
    }
  },
  hooks: {
    afterAllFileWrite: ["biome format --write ."]
  },
  overwrite: true,
  schema: LensEndpoint.Ctchain
};

export default config;
