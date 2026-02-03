import { Character } from "@/types/futurama";

export async function getCharacters(): Promise<
  Character[] | { message: string }
> {
  // sometimes we want to check if the user is authenticated before returning any data
  //if (!admin) return null

  // we can do a try catch here if we want to, but it's not always preferred
  // if we don't do a try catch we need to handle the errors manually be comparing data or such
  // try catch is often used for uncaught exceptions - https://nextjs.org/docs/app/getting-started/error-handling
  try {
    const response = await fetch(
      `https://futuramaapi.com/api/characters`,
      // a couple of cache options for fetch, default is no cache
      // this one forces the fetch to be cached
      //{ cache: "force-cache" },
      // this clears the cache every 3600 seconds (1 hour)
      //{ next: { revalidate: 3600 } }
    );

    // if we don't get a clear ok we return an error for the calling component to handle
    if (!response.ok)
      return {
        message: "there was an error",
      };

    // if not we proces the body as json
    const data = await response.json();

    //TODO: maybe make some more checks here...
    const characters = data.items as Character[];

    // and return the data
    return characters;
  } catch {
    // here we can throw an error for the error boundry
    throw new Error("API is down...");
    // or return a message
    // return {
    //     message: "there was an error",
    //   };
  }
}

export async function getCharacter() {
  //auth
  //if (!admin) return null

  const response = await fetch(
    `https://futuramaapi.com/api/characters`,
    //{ cache: "force-cache" },
    //{ next: { revalidate: 3600 } }
  );

  if (!response.ok) return { message: "there was an error" };

  const data = await response.json();

  //TODO: maybe make some more checks here...
  const characters = data.items as Character[];

  return characters;
}
