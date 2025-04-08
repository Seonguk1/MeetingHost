import { useRef } from "react";
import { create } from "zustand";

const useRouletteStore = create((set)=>({
    rouletteRef: useRef(null),
    itemHeight: 80,
    isPressed: false,
    selectedItem: '',
    resultItem: '',

    setIsPressed: (isPressed) => set({ isPressed }),
    setResultItem: (resultItem)=>set({resultItem}),
    setSelectedItem: (selectedItem)=>set({selectedItem  }),
}))

export default useRouletteStore;