import { defineStore } from "pinia";

export const useMapStore = defineStore("map", () => {
  return {
    map: [1, 2, 3],
  };
});
