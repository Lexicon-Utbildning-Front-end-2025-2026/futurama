import Image from "next/image";
import { Character } from "@/types/futurama";
import CharacterCard from "@/components/ui/character-card";

//export default function CardGrid(props: { characters: Character[] }) {
//const characters = props.characters
//const { characters } = props

//our type for the props in this case  : { characters: Character[] }
export default function CharacterGrid({ characters }: { characters: Character[] }) {
    return (
        <section className="container mx-auto px-4 py-16 space-y-4">
            <h2 className="text-3xl font-bold font-josefin">Characters</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-4">
                {
                    characters.map((character) => (
                        <li key={character.id}>
                            {/* <div className={character.status === "DEAD" ? "border border-red-400 border-4" : ""}>
                                <h3 className="text-2xl font-josefin font-bold text-center">{character.name}</h3>
                                {character.image ?
                                    <Image className="w-full" src={character.image} width={100} height={100} alt={character.name} />
                                    : <span>No image found</span>
                                }
                            </div> */}

                            <CharacterCard character={character} />

                        </li>))
                }

            </ul>
        </section>
    )
}