import { defineStore } from 'pinia';

export const useFilmListsStore = defineStore('filmLists', {
  state: () => ({
    lists: {},
  }),
  actions: {
    addFilmList(listName, films) {
      this.lists[listName] = films;
    },
    getFilmList(listName) {
      return this.lists[listName] || [];
    },
    getFilmBySlug(slug) {
      for (const listName in this.lists) {
        const film = this.lists[listName].find(item => item.film.slug === slug);
        if (film) return film;
      }
      return null;
    },
  },
});
