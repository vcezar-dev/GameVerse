const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "861d2db735a043a49c7cc772e9bb14c5";

// const API_KEY = process.env.API_KEY;

export async function fetchGamesBySearch(gameSearch: string){
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&search=${gameSearch}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function fetchGameById(gameId: string) {
    try {
        const response = await fetch(`${BASE_URL}/${gameId}?key=${API_KEY}`);
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function fetchUpcomingGames() {
  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  const startDate = today.toISOString().split("T")[0];
  const endDate = nextMonth.toISOString().split("T")[0];

  const response = await fetch(
    //https://api.rawg.io/api/games?key=861d2db735a043a49c7cc772e9bb14c5&dates=2025-10-20,2025-11-20&ordering=released&page_size=10
    `${BASE_URL}?key=${API_KEY}&dates=${startDate},${endDate}&ordering=released&page_size=10`
  );
  return response.json();
}

export async function fetchPopularGames() {
  const response = await fetch(
    // https://api.rawg.io/api/games?key=861d2db735a043a49c7cc772e9bb14c5&dates=&ordering=-rating&page_size=10
    `${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=10`
  );
  return response.json();
}