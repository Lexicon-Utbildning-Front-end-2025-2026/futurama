import Link from "next/link";

export default function MainNavigation() {
    return (
        <nav>
            <ul className="flex gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Futurama</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
            </ul>
        </nav>
    )
}