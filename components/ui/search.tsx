import Form from 'next/form'

// This component is a form that will search for a character in the API
// It uses the Form component from next/form to handle the form submission
// It uses the searchParams to get the query from the URL
// It uses the getCharacters function from data/character to get the characters

//TODO: make it possible to pick up the query from the URL and use it in the search and also make it possible to clear the search

export default function SearchForm() {
    return (
        <Form action="/" className="flex gap-2">
            <label className="sr-only" htmlFor="search">Search:</label>
            <input className="border text-inherit dark:bg-neutral-900" id="search" name="query" placeholder="Search..." />
            <button className="border text-inherit dark:bg-neutral-900 cursor-pointer px-4 py-1" type="submit">Search</button>
        </Form>
    )
}