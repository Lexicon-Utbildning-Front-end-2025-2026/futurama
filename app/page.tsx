import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
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

  // the issue now is that we can't access the fetched data this way since we await it inside the component.
  // so we can't find out how many pages there are or other things we get back from the API
  // That means we have to either we skip suspense and fetch the data in the page, or we pass on all the props downwards into the components
  // With client side code we can do this in other ways, but for now we are a bit limited.
  // There is also a third way we can do meanwhile, we pass on the searchParams instead.
  // I'll make a branch with this solution too

  // Hard coded pages which are pointless, but to get rid of error
  // this are used to see if the pagination links are active or not
  const pages = 30;

  // instead of fetching the characters inside the component I fetch them here
  // thus eliminating passing all the props down
  // I don't do await here but instead pass the promise down to the component
  // this makes it possible to stream with suspense since the await is in that component
  const fetchPromise = getCharacters(
    currentLimit,
    sortDirectionString,
    currentPage,
  );

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
      {/* Basic Pagination with conditional rendering if we are on first or last page */}
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
      <Suspense fallback={<div>Loading...</div>}>
        <CharacterGrid promise={fetchPromise} />
      </Suspense>
    </main>
  );
}
