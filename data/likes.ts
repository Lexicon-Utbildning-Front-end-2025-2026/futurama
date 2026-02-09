// Ett enkelt minne på servern
// Mapen sparar: Pokémon-namn -> antal likes
// OBS: Detta lever så länge servern körs

// use globalThis to store the likes. Otherwise we will have different maps in different processes (server/client)
const globalForLikes = globalThis as unknown as {
  likesStore: Map<string, number>;
};

// check if the store already exists, if not create a new one
export const likesStore =
  globalForLikes.likesStore || new Map<string, number>();


// if in development, the store will be reset on every reload, so we need to store it in globalThis
if (process.env.NODE_ENV !== "production") {
  globalForLikes.likesStore = likesStore;
}

export function getLikes(name: string) {
  console.log("Current store:", likesStore);
  // Ensure we check for the decoded name if needed, but we unified on raw name
  return likesStore.get(name) || 0;
}

export function setLikes(name: string, likes: number) {
  likesStore.set(name, likes);
}
