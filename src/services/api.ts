const BASE_URL = " https://api.rawg.io/api/games?key=861d2db735a043a49c7cc772e9bb14c5&search="

export async function rawgApi(gameSearch: string){
    try {
        const response = await fetch(`${BASE_URL}${gameSearch}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
