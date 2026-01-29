import CharacterCard from "@/components/ui/character-card";
import type { Character } from "@/types/futurama";

//our type for the props in this case  : { characters: Character[] }
export default function CharacterGrid({
  characters,
}: {
  characters: Character[];
}) {
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
