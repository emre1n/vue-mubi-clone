import { ref, onMounted } from 'vue';
import axiosInstance from '@/api/axios';

export function useFetchFilms(listName) {
  const films = ref([]);

  // https://api.mubi.com/v3/collections/new-on-mubi

  onMounted(async () => {
    try {
      const response = await axiosInstance.get(
        `/lists/${listName}/list_films`,
        {
          params: {
            page: 1,
            per_page: 28,
          },
        }
      );
      films.value = response.data.list_films;
      console.log('films', films.value);
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  });

  return { films };
}
