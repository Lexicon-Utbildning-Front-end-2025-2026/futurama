import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LikeButton } from "@/components/ui/like-button";
import { getCharacter } from "@/data/character";
import { getLikes } from "@/data/likes";

export const dynamic = "force-dynamic";
//If you want to make the page rendered statically (not sure how useful this is with json right now, but anyway)
// export async function generateStaticParams() {
//    const characters = await getCharacters();
//    if ("message" in characters || !characters) {
//     // we can log it with console.error()
//     console.error(characters.message);
//   return null
//   }

//   return characters.map((character) => ({
//     id: character.id.toString(),
//   }));
// }

export async function generateMetadata({
  params,
}: PageProps<"/character/[id]">): Promise<Metadata> {
  // read route params
  const { id } = await params;
  const idNumber = Number(id);

  // fetch data
  const character = await getCharacter(idNumber);

  return {
    title: `Futurama - ${character.name}`,
  };
}

//export default async function CharacterPage({params}:{params: Promise<{id:string}>}){
//export default async function CharacterPage(props:PageProps<"/character/[id]">){
export default async function CharacterPage({
  params,
}: PageProps<"/character/[id]">) {
  const { id } = await params;
  const idNumber = Number(id);
  //const {id} = await props.params
  //const character = data.items.find((character) => character.id === Number(id));
  const character = await getCharacter(idNumber);

  if (!character) notFound();

  //const name = encodeURIComponent(character.name);
  const likes = getLikes(character.name);

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link className="block mb-8 text-sm font-bold" href="/">
        &larr; Back to characters
      </Link>

      <article className="grid md:grid-cols-2 gap-8">
        <Image
          src={character.image ?? "/placeholder.png"}
          alt={character.name}
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />

        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-2 font-josefin">
            {character.name}
          </h1>
          <LikeButton name={character.name} initialLikes={likes} />

          <section>
            <header>
              <h2 className="font-josefin font-bold text-2xl">Details</h2>
            </header>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-foreground/60">Status</div>
                <div className="font-medium">{character.status}</div>
              </div>
              <div>
                <div className="text-sm text-foreground/60">Species</div>
                <div className="font-medium">{character.species}</div>
              </div>
              <div>
                <div className="text-sm text-foreground/60">Gender</div>
                <div className="font-medium">{character.gender}</div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
