export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (<div className="container mx-auto bg-red-100">
        {children}
    </div>)
}