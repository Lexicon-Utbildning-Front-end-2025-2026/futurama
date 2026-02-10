import Image from "next/image";
import Link from "next/link";
import data from "@/data/menu.json";

export default function MainNavigation() {
  return (
    <nav className="border-b sticky top-0 bg-neutral-100/80 backdrop-blur-xs dark:bg-neutral-800/80">
      <div className="font-bold container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            className="w-[150px]"
            src="/futurama-line.svg"
            width={1024}
            height={181}
            alt="Futurama"
          />
        </Link>
        <ul className="flex gap-6">
          {
            //renderMenu()
            data.map((item) => (
              <li key={item.href}>
                <Link
                  className="hover:text-sky-400 transition-colors"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
