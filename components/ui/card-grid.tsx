import Image from "next/image";
import { Character } from "@/types/futurama";

//export default function CardGrid(props: { characters: Character[] }) {
//const characters = props.characters
//const { characters } = props

//our type for the props in this case  : { characters: Character[] }
export default function CardGrid({ characters }: { characters: Character[] }) {
    return (
        <section>
            <h2>Characters</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-4">
                {
                    characters.map((character) => (
                        <li key={character.id}>
                            <h3>{character.name}</h3>
                            <Image className="w-full" src={character.image ?? "/placeholder.png"} width={100} height={100} alt={character.name} />
                        </li>))
                }

            </ul>
        </section>
    )
}