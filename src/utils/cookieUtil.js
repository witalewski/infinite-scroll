export const readFavouritesCookie = () => {
    const match = document.cookie.match(/favourite-shibe-dogs=([^;]*)/);
    if (match && match.length > 0) {
        return JSON.parse(match[1]);
    }
    return null;
}
export const storeFavouritesCookie = data => document.cookie = `favourite-shibe-dogs=${JSON.stringify(data)}`;