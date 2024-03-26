export function saveArrayToCookies(arrayName: string, array: unknown) {
    const encodedArray = btoa(JSON.stringify(array));

    document.cookie = `${arrayName}=${encodedArray}`;
}

export function getArrayFromCookies(arrayName: string) {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${arrayName}=`))!
        .split('=')[1];

    const decodedArray = JSON.parse(atob(cookieValue));
    
    return decodedArray;
}