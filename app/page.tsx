import Image from "next/image";
import Link from "next/link";
import CharacterGrid from "@/components/ui/character-grid";
import { getCharacters } from "@/data/character";

export default async function Home(params: PageProps<"/">) {
  // Here we use destructuring to get the searchParams and if we want we can set default values too
  const {
    limit = "12",
    sortDirection = "asc",
    page = "1",
  } = await params.searchParams;

  // Type for searchParams are by default - searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  // So we need to check if it's an array or not
  // if so we only take the first value, if not we use the value as is
  const currentLimit = Number(Array.isArray(limit) ? limit[0] : limit);
  const currentPage = Number(Array.isArray(page) ? page[0] : page);
  const sortDirectionString = Array.isArray(sortDirection)
    ? sortDirection[0]
    : sortDirection;

  // instead of fetching the characters inside the component I fetch them here
  // thus eliminating passing all the props down
  // this will however remove the possibility of using suspense, so this is a downside
  // I use destructuring to get the characters and other values I want to use from the response
  const {
    items: characters,
    pages,
    total,
  } = await getCharacters(currentLimit, sortDirectionString, currentPage);

  return (
    <main>
      {/* Hero section  */}
      <section className="py-16 px-4 bg-linear-to-br from-blue-900 via-sky-600 to-sky-100 dark:to-sky-800">
        <div className="container mx-auto px-4 grid gap-6 items-center lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <span className="text-2xl italic font-bold">
              Good news, everyone!
            </span>
            <h1 className="text-5xl leading-tight text-balance font-bold">
              Futurama is back!
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/90 text-balance">
              Explore the core capabilities of Next.js through the eyes of the
              Planet Express crew. Server components, dynamic routing, and more!
            </p>
          </div>
          <Image
            src="https://ntvb.tmsimg.com/assets/p184499_b_h8_aa.jpg"
            className="border-neutral-50 border-4 rounded-lg shadow-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Philip, Bender and Leela posing for a picture"
            width={750}
            height={422}
            loading="eager"
            preload={true}
          />
        </div>
      </section>
      {/* Filter section */}
      <div className="container mx-auto flex gap-4 pt-8 px-4 ">
        Displaying {currentLimit} out of {total} items
      </div>
      {/* TODO: Fix these so they are more dynamic and modular */}
      <div className="container mx-auto flex gap-4 pt-8 px-4 ">
        <p>Limit: </p>
        <Link className="font-bold" href="/?limit=8">
          8
        </Link>
        <Link className="font-bold" href="/?limit=12">
          12
        </Link>
      </div>
      <div className="container mx-auto flex gap-4 pt-8 px-4 ">
        <p>Sort order: </p>
        <Link
          className="font-bold"
          href={`/?limit=${currentLimit}&sortDirection=asc`}
        >
          ascending
        </Link>
        <Link
          className="font-bold"
          href={`/?limit=${currentLimit}&sortDirection=desc`}
        >
          descending
        </Link>
      </div>
      {/* 
      Basic Pagination with conditional rendering if we are on first or last page
      For now the links are hard coded and doesn't take into account sorting for example
       */}
      <div className="flex justify-center gap-4">
        {currentPage - 1 >= 1 && (
          <Link href={`/?page=${currentPage - 1}&limit=${currentLimit}`}>
            &larr; Previous
          </Link>
        )}
        {currentPage + 1 <= pages && (
          <Link href={`/?page=${currentPage + 1}&limit=${currentLimit}`}>
            Next &rarr;
          </Link>
        )}
      </div>
      {/* Cards section */}
      <CharacterGrid characters={characters} />
    </main>
  );
}
