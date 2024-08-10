import { ref } from 'vue';
import { getFilms } from '../api/filmRepository';

export function useFilms() {
  const films = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchFilms = async (
    page = 1,
    perPage = 28,
    sort = 'title',
    playable = true
  ) => {
    isLoading.value = true;
    error.value = null;
    try {
      films.value = await getFilms(page, perPage, sort, playable);
    } catch (err) {
      error.value = 'Failed to fetch films';
    } finally {
      isLoading.value = false;
    }
  };

  return {
    films,
    isLoading,
    error,
    fetchFilms,
  };
}
