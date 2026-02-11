import CharacterCard from "@/components/ui/character-card";
import LimitSelect from "@/components/ui/limit-select";
import Pagination from "@/components/ui/pagination";
import SortSelect from "@/components/ui/sort-select";
import { getCharacters } from "@/data/character";

// in this example I pass down the searchParams to the component and I let it handle everything from render the cards to pagination and so on
// usually the pagination would be moved into another component, but this is outside scope of this exemple
export default async function CharacterGrid({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Here we use destructuring to get the searchParams and if we want we can set default values too
  const {
    limit = "12",
    sortDirection = "asc",
    page = "1",
    query,
  } = await searchParams;

  // Type for searchParams are by default - searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  // So we need to check if it's an array or not
  // if so we only take the first value, if not we use the value as is
  const currentLimit = Number(Array.isArray(limit) ? limit[0] : limit);
  const currentPage = Number(Array.isArray(page) ? page[0] : page);
  const sortDirectionString = Array.isArray(sortDirection)
    ? sortDirection[0]
    : sortDirection;
  const queryString = Array.isArray(query)
    ? query[0]
    : query;

  // We can now fetch the data inside here with all of the parameters we want without passing them around from page to component
  const {
    items: characters,
    total,
    pages,
  } = await getCharacters(currentLimit, sortDirectionString, currentPage, queryString);

  return (
    <section className="container mx-auto px-4 py-16 space-y-4">
      <h2 className="text-3xl font-bold font-josefin">Characters</h2>
      {/* Filter section */}
      <div className="container mx-auto flex gap-4 pt-8 px-4 ">
        Displaying <LimitSelect /> out of {total} items
      </div>
      {/* TODO: Fix these so they are more dynamic and modular */}

      <div className="container mx-auto pt-8 px-4">
        <SortSelect />
      </div>
      {/* Pagination component handling navigation */}
      <Pagination totalPages={pages} />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-4">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}
