import Image from "next/image";
import data from "@/data/characters.json"
import CardGrid from "@/components/ui/card-grid";
import Wrapper from "@/components/ui/wrapper";
import CharacterGrid from "@/components/ui/character-grid";

export default function Home() {
  //const characters = data.items
  //const total = data.total

  //desctructuring av samma som ovan
  const { items: characters, total } = data

  return (
    <main>

      {/* Hero section  */}
      <section className="py-16 px-4 bg-linear-to-br from-blue-900 via-sky-600 to-sky-100 dark:to-sky-800">
        <div className="container mx-auto px-4 grid gap-6 items-center lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <span className="text-2xl italic font-bold">Good news, everyone!</span>
            <h1 className="text-5xl leading-tight text-balance font-bold">Futurama is back!</h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/90 text-balance">
              Explore the core capabilities of Next.js through the eyes of the Planet Express crew. Server
              components, dynamic routing, and more!
            </p>
          </div>
          <Image src="https://ntvb.tmsimg.com/assets/p184499_b_h8_aa.jpg"
            className="border-neutral-50 border-4 rounded-lg shadow-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Philip, Bender and Leela posing for a picture" width={750} height={422} loading="eager" preload={true} />
        </div>
      </section>

      { /*** Here we render our grid without any components, good for simple cases like this ***/}
      {/* <section>
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
      </section> */}

      {/*** This is not the correct way of doing a component, but intead makes a function with an argument that return jsx ***/}
      {/* {CardGrid(characters)} */}

      {/*** This is the correct way of doing a component, it takes props - in this case characters and looks like a HTML tag ***/}
      <CharacterGrid characters={characters} />


      { /*** Example use for a wrapper component with children ***/}
      <Wrapper>
        Hej
        <div>apa</div>
      </Wrapper>

      { /*** Example use of a grid that uses children and doesn't care about what data it recieves above that ***/}
      {/* <CardGrid title="Characters">
        {
          characters.map((character) => (
            <li key={character.id}>
              <h3>{character.name}</h3>
              <Image className="w-full" src={character.image ?? "/placeholder.png"} width={100} height={100} alt={character.name} />
            </li>))
        }
      </CardGrid> */}

    </main>
  );
}
