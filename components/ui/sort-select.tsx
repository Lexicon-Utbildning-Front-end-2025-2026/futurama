"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SortSelect() {
    const searchParams = useSearchParams();
    const currentSort = searchParams.get("sortDirection") || "asc";

    const createSortURL = (direction: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sortDirection", direction);
        return `?${params.toString()}`;
    };

    return (
        <div className="flex gap-4">
            <p>Sort order: </p>
            <Link
                href={createSortURL("asc")}
                className={currentSort === "asc" ? "font-bold" : ""}
            >
                ascending
            </Link>
            <Link
                href={createSortURL("desc")}
                className={currentSort === "desc" ? "font-bold" : ""}
            >
                descending
            </Link>
        </div>
    );
}
