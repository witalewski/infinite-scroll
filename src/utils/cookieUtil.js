export const readFavouritesCookie = () => {
    const match = document.cookie.match(/shibe-dogs-elite=([^;]*)/);
    if (match !== null && match.length > 0) {
        return JSON.parse(match[1]);
    }
    return [];
}
export const storeFavouritesCookie = data => document.cookie = `shibe-dogs-elite=${JSON.stringify(data)}`;