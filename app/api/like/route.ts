// NextResponse är Next.js sätt att skicka HTTP-svar från en API-route

import { NextResponse } from "next/server";
import { getLikes, setLikes } from "@/data/likes";

// POST /api/like
// Anropas när användaren klickar på "like" eller "unlike"
export async function POST(request: Request) {
  // Vi läser body från requesten (skickad från fetch i klienten)
  const { name } = await request.json();

  // Hämta nuvarande antal likes för Pokémonen
  // Finns den inte än -> börja från 0
  const currentLikes = getLikes(name);

  // Bestäm nytt antal likes beroende på action
  //   const newLikes =
  //     action === "like"
  //       ? currentLikes + 1 // like -> +1
  //       : Math.max(currentLikes - 1, 0); // unlike -> -1 (men aldrig under 0)
  const newLikes = currentLikes + 1;

  // Spara det nya värdet i Mapen
  setLikes(name, newLikes);

  // Skicka tillbaka ett JSON-svar till klienten
  return NextResponse.json({
    name,
    likes: newLikes,
  });
}
// GET /api/like?pokemonName=Pikachu
// Anropas när sidan laddas för att hämta aktuellt antal likes
export async function GET(request: Request) {
  // Vi plockar ut query-parametrar från URL:en
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  // Om ingen Pokémon skickades -> fel
  if (!name) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }
  // Hämta antal likes från Mapen
  const currentLikes = getLikes(name);

  // Skicka tillbaka datan till klienten
  return NextResponse.json({ name, currentLikes });
}
