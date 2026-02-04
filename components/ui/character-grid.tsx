import CharacterCard from "@/components/ui/character-card";
import type { Character } from "@/types/futurama";

export default async function CharacterGrid({
  promise,
}: {
  promise: Promise<Character[] | { message: string }>;
}) {
  // here we await our promise with the characters/message for error handling
  const data = await promise;

  //we check if there is a message part in our data, if so handle the message
  if ("message" in data || !data) {
    // we can log it with console.error()
    console.error(data.message);
    // we can return a string or jsx that is displayed directly on the page
    return "API is down...";
    // OR we can redirect the user to a custom page that gives more information
    //redirect("/ksjdflskj");
    // OR we can throw an error.
    // the thrown error can be handled by a error boundry (error.tsx) https://nextjs.org/docs/app/getting-started/error-handling#nested-error-boundaries
    // if no such file exist the error will bubble up and if nothing catches it it will crash the app
    //throw new Error("API is down...");
  }

  //if we have no message we assume we have the correct data
  const characters = data;

  return (
    <section className="container mx-auto px-4 py-16 space-y-4">
      <h2 className="text-3xl font-bold font-josefin">Characters</h2>
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
