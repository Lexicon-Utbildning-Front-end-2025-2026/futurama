import Image from "next/image";
import Link from "next/link";
import data from "@/data/menu.json";

export default function MainNavigation() {
  return (
    <nav className="border-b sticky top-0 bg-neutral-100/80 backdrop-blur-xs dark:bg-neutral-800/80">
      <div className="font-bold container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/futurama-line.svg"
            width={150}
            height={50}
            alt="Futurama"
          />
        </Link>
        <ul className="flex gap-6">
          {
            //renderMenu()
            data.map((item, index) => (
              <li key={index}>
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
