"use client";

import Form from "next/form";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useRef } from "react";

// This component is a form that will search for a character in the API
// It uses the Form component from next/form to handle the form submission
// It uses the searchParams to get the query from the URL
// It uses the getCharacters function from data/character to get the characters

// Added a clear button that will clear the search and remove the query from the URL
// Added a ref to the form to be able to reset it
export default function SearchForm() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const ref = useRef<HTMLFormElement>(null);
    const query = searchParams.get("query");

    // Clear search and remove query from URL
    // We use a ref to access the form element directly to call the reset() method
    // which clears all form inputs. This is simpler than managing state for the input.
    const handleClear = () => {
        if (ref.current) {
            ref.current.reset();
        }
        const params = new URLSearchParams(searchParams);
        params.delete("query");
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Form action="/" className="flex gap-2" ref={ref}>
            <label className="sr-only" htmlFor="search">
                Search:
            </label>
            <input
                className="border text-inherit dark:bg-neutral-900"
                id="search"
                name="query"
                placeholder="Search..."
                defaultValue={query || ""}
            />
            {query && (
                <button
                    className="border text-inherit dark:bg-neutral-900 cursor-pointer px-4 py-1"
                    type="button"
                    onClick={handleClear}
                >
                    Clear
                </button>
            )}
            <button
                className="border text-inherit dark:bg-neutral-900 cursor-pointer px-4 py-1"
                type="submit"
            >
                Search
            </button>
        </Form>
    );
}