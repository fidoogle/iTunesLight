import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import LocalForage from "localforage";
import Favorites from "@/store/modules/favorites.js";

// Configure localforage
LocalForage.config({
  driver: LocalForage.INDEXEDDB,
  name: "iTunesFavs",
  version: 1.0,
  storeName: "iFavs-store"
});

const vuexLocal = new VuexPersistence({
  key: "iFavsStore",
  storage: window.sessionStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    favorites: Favorites
  },
  plugins: [vuexLocal.plugin]
});
