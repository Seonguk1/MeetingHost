import { create } from 'zustand';
import topicsList from '../constants/topicsList';
import { useRef } from 'react';

const useUserStore = create((set) => ({
    users: 0,
    currentTopic: topicsList[0],
    currentIndex: 0,
    rouletteRef: useRef(null),

    setUsers: (users) => set({ users }),
    setCurrentTopic: (currentTopic) => set({ currentTopic }),
    setCurrentIndex: (currentIndex) => set({ currentIndex }),

}))

export default useUserStore;