import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="grid justify-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-2 font-josefin">Not Found</h1>
          <p className="text-2xl">This character could not be found</p>
          <Link href="/"> &larr; Back to Characters</Link>
        </div>
      </article>
    </main>
  );
}
