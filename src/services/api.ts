const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "861d2db735a043a49c7cc772e9bb14c5";

export async function fetchGamesBySearch(gameSearch: string){
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&search=${gameSearch}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function fetchGameById(gameId: number) {
    try {
        const response = await fetch(`${BASE_URL}/${gameId}?key=${API_KEY}`);
        console.log(`${BASE_URL}/games/${gameId}?key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}