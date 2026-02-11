
// Parse search params to string
export function getSearchParamsAsString(
    param: string | string[] | undefined
): string | undefined {
    if (Array.isArray(param)) {
        return param[0];
    }
    return param;
}

// Parse search params to number
export function getSearchParamsAsNumber(
    param: string | string[] | undefined
): number | undefined {
    const value = getSearchParamsAsString(param);
    if (!value) return undefined;
    const num = Number(value);
    // additional check to ensure the number is not NaN
    return isNaN(num) ? undefined : num;
}
