import Image from "next/image";
import { Character } from "@/types/futurama";
import CharacterCard from "@/components/ui/character-card";

//export default function CardGrid(props: { characters: Character[] }) {
//const characters = props.characters
//const { characters } = props

//our type for the props in this case  : { characters: Character[] }
export default function CardGrid({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section className="container mx-auto px-4 py-16 space-y-4">
            <h2 className="text-3xl font-bold font-josefin">{title}</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-4">
                {
                    children
                }

            </ul>
        </section>
    )
}