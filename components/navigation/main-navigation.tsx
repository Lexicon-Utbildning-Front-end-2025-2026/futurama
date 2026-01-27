import Link from "next/link";
import Image from "next/image";
import data from "@/data/menu.json"

const menu = [
    { title: "Home", href: "/" },
    { title: "About Futurama", href: "/about" },
    { title: "Contact us", href: "/contact" }
]

// not recommended for jsx returns
const renderMenu = () => {
    return menu.map((item, index) => <li key={index}><Link className="hover:text-sky-400 transition-colors" href={item.href}>{item.title}</Link></li>)
}

// this is ok, but too short to bother with a component
const RenderMenu = () => {
    return (
        <>{
            menu.map((item, index) => <li key={index}><Link className="hover:text-sky-400 transition-colors" href={item.href}>{item.title}</Link></li>)
        }
        </>
    )
}

export default function MainNavigation() {
    return (
        <nav className="border-b sticky top-0 bg-neutral-100/80 backdrop-blur-xs dark:bg-neutral-800/80">
            <div className="font-bold container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/"><Image src="/futurama-line.svg" width={150} height={50} alt="Futurama" /></Link>
                <ul className="flex gap-6">
                    {
                        //renderMenu()
                        data.map((item, index) => <li key={index}><Link className="hover:text-sky-400 transition-colors" href={item.href}>{item.name}</Link></li>)
                    }
                    {/* <RenderMenu /> */}
                </ul>
            </div>
        </nav>
    )
}