import type { Character } from "@/types/futurama";

const URL_API = "https://futuramaapi.com/api";

interface CharactersResponse {
  items: Character[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export async function getCharacters(
  limit = 12,
  sortDirection = "asc",
  page = 1,
  query?: string,
): Promise<CharactersResponse> {
  // sometimes we want to check if the user is authenticated before returning any data
  //if (!admin) return null

  // make the query string dynamically with the params
  const params = new URLSearchParams({
    size: limit.toString(),
    orderByDirection: sortDirection,
    page: page.toString(),
  });

  // if there is a query, add it to the params
  if (query) {
    params.set("query", query);
  }

  try {
    const response = await fetch(
      `${URL_API}/characters/?${params}`,
      // a couple of cache options for fetch, default is no cache
      // this one forces the fetch to be cached
      //{ cache: "force-cache" },
      // this clears the cache every 3600 seconds (1 hour)
      //{ next: { revalidate: 3600 } }
    );

    return await response.json();
  } catch {
    // here we can throw an error for the error boundry
    throw new Error("API is down...");
  }
}

export const getCharacter = async (id: number): Promise<Character> => {
  //auth
  //if (!admin) return null

  const response = await fetch(
    `${URL_API}/characters/${id}`,
    //{ cache: "force-cache" },
    //{ next: { revalidate: 3600 } }
  );

  //TODO: error handling
  return await response.json();
};

// export async function getCharacter(id: number): Promise<Character> {
//   //auth
//   //if (!admin) return null

//   const response = await fetch(
//     `${URL_API}/characters/${id}`,
//     //{ cache: "force-cache" },
//     //{ next: { revalidate: 3600 } }
//   );

//   //TODO: error handling
//   return await response.json();
// }
