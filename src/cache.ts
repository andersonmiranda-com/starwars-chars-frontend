import { InMemoryCache, Reference } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        charactersList: {
          keyArgs: false,
          merge(existing, incoming) {
            let characters: Reference[] = [];
            if (existing && existing.launches) {
              characters = characters.concat(existing.characters);
            }
            if (incoming && incoming.characters) {
              characters = characters.concat(incoming.characters);
            }
            return {
              ...incoming,
              characters,
            };
          },
        },
      },
    },
  },
});
