import axiosInstance from '@/api/axios';

export const filmRepository = {
  getFilms() {
    return axiosInstance.get('/films');
  },
  getFilmById(id) {
    return axiosInstance.get(`/films/${id}`);
  },
};
