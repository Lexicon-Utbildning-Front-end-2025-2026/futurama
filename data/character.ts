import type { Character } from "@/types/futurama";

const URL_API = "https://futuramaapi.com/api";

// Interface for the full response from the API, including number of items and more
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
): Promise<CharactersResponse> {
  // this is a shortcut if we want to make the url a bit less messy
  const params = new URLSearchParams({
    size: limit.toString(),
    orderByDirection: sortDirection,
    page: page.toString(),
  });

  // in this example I skip the error handling just to keep it simple
  // it will throw an error if the api is down, so if there are no error.ts file the app will crasch
  try {
    const response = await fetch(
      // use without URLSearchParams
      // `${URL_API}/characters/?size=${limit}&orderByDirection=${sortDirection}&page=${page}`,

      // if we do the URLSearchParams trick above we can shorten this to following
      `${URL_API}/characters/?${params}`,
    );

    return await response.json();
  } catch {
    throw new Error("API is down...");
  }
}

// example with arrow function instead of function declaration
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
