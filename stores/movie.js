export const useMovieStore = defineStore('movie', () => {
    const searchedMovies = ref([]);
    const selectedMovie = ref({});

    async function getMovies(query) {
      try {
        const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=9b2e8902&s=${query}`);
        searchedMovies.value = Search;
      } catch(e) {
        throw new Error(e);
      }     
    }

    async function getMovieById(id) {
      try {
        selectedMovie.value = await $fetch(`http://www.omdbapi.com/?apikey=9b2e8902&i=${id}`)
      } catch(e) {
        throw new Error(e);
      }
    }

    function $reset() {
      searchedMovies.value = [];
      selectedMovie.value = {};
    }
  
    return { searchedMovies, selectedMovie, getMovies, getMovieById, $reset }
  })