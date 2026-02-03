import Image from "next/image";
import Link from "next/link";
import CharacterGrid from "@/components/ui/character-grid";
//import data from "@/data/characters.json";

export default async function Home(params: PageProps<"/">) {
  // export default async function Home({
  //   searchParams,
  // }: {
  //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  // }) {
  // get whatever the limit is now, could be string, string[] or undefined.
  // If undefined we instead set a default value, in this case 12
  // (we type it as string since we will convert it anyway, but this isn't important since both "12" and 12 becomes 12)
  const { limit = "12" } = await params.searchParams;

  console.log(limit);

  // Now we check if it's an array, if so we only take the first number, if not we use the limit value
  // this is then converted to a number with Number()
  const limitNumber = Number(Array.isArray(limit) ? limit[0] : limit);

  const response = await fetch(
    `https://futuramaapi.com/api/characters?size=${limitNumber}`,
    //{ cache: "force-cache" },
    //{ next: { revalidate: 3600 } }
  );

  if (!response.ok) return "there was an error";

  const data = await response.json();

  const characters = data.items;

  if (!characters) return "no characters";

  // we slice the list from zero to our limit
  //const characters = data.items.slice(0, limitNumber);

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

      <div className="flex gap-4 pt-8 px-4 ">
        <p>Limit: </p>
        <Link className="font-bold" href="/?limit=8">
          8
        </Link>
        <Link className="font-bold" href="/?limit=12">
          12
        </Link>
      </div>
      {/*** This is the correct way of doing a component, it takes props - in this case characters and looks like a HTML tag ***/}
      <CharacterGrid characters={characters} />
    </main>
  );
}
