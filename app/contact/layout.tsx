export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav>
                <a href="/contact-2">Contact support</a>
            </nav>
            {children}
        </>
    );
}
