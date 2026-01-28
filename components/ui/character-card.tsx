import { Character } from "@/types/futurama";
import Image from "next/image";

export default function CharacterCard({ character }: { character: Character }) {

    //export default function CharacterCard({ name, imageStr }: { name: string, imageStr: string }) {
    return (
        <div className={`relative border rounded-xl shadow-md overflow-hidden ${character.status === "DEAD" ? "border-red-400 border-4" : ""}`}>
            <h3 className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-20 backdrop-blur-xs mask-t-from-45% text-2xl font-josefin font-bold text-center bg-black/40 text-white">{character.name}</h3>
            <Image className="w-full aspect-square object-cover" src={character.image ?? "/placeholder.png"} width={200} height={200} alt={character.name} />
            {/* {character.image ?
                <Image className="w-full aspect-square object-cover" src={character.image} width={100} height={100} alt={character.name} />
                : <span>No image found</span>
            } */}
        </div>
    )
}