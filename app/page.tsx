import Image from "next/image";

export default function Home() {
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

      <section>Card...</section>
    </main>
  );
}
