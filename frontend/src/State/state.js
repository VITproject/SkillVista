// state.js
import {create} from "zustand";

const usebearStore = create((set) => ({

  Id: "null",
  setId: (arg) => set({ id: arg }),

  selectedCourse: "MCA", 
  setSelectedCourse: (arg) => set({ selectedCourse: arg }), 
}));

export default usebearStore;