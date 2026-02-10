"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ITEMLIMITS } from "@/data/constants";

export default function LimitSelect() {
  // use to get a read only version of our current search params
  const searchParams = useSearchParams();
  // use to keep track of the path we are in
  const pathName = usePathname();
  // used to change our url
  const router = useRouter();

  const limit = searchParams.get("limit") || "12";

  // the function to handle our change when we use the drop down
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // get the value from the event, the option value in this case
    const newLimit = event.target.value;
    // make a new instance of URLSearchParams with the current read only version as base,
    // to make it possible to update it
    const params = new URLSearchParams(searchParams.toString());

    // set the limit to the new value and reset the pagination
    params.set("limit", newLimit);
    params.set("page", "1");

    // push the new search params with our path to the url
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <form>
      <label className="sr-only" htmlFor="limit-select">
        Limit:
      </label>
      <select
        id="limit-select"
        name="limit"
        onChange={handleChange}
        defaultValue={limit}
      >
        {ITEMLIMITS.map((item) => (
          <option key={`limit-select-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}
