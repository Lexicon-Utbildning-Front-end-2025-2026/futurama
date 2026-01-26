import Link from "next/link";
import Image from "next/image";

export default function MainNavigation() {
    return (
        <nav className="border-b sticky top-0 bg-neutral-100/80 backdrop-blur-xs dark:bg-neutral-800/80">
            <div className="font-bold container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/"><Image src="/futurama-line.svg" width={150} height={50} alt="Futurama" /></Link>
                <ul className="flex gap-6">
                    <li><Link className="hover:text-sky-400 transition-colors" href="/">Home</Link></li>
                    <li><Link className="hover:text-sky-400 transition-colors" href="/about">About Futurama</Link></li>
                    <li><Link className="hover:text-sky-400 transition-colors" href="/contact">Contact us</Link></li>
                </ul>
            </div>
        </nav>
    )
}