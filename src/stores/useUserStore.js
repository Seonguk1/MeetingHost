import { create } from 'zustand';
import topicsList from '../constants/topicsList';

const useUserStore = create((set) => ({
    users: 0,
    currentTopic: topicsList[0],
    currentIndex: 0,

    setUsers: (users) => set({ users }),
    setCurrentTopic: (currentTopic) => set({ currentTopic }),
    setCurrentIndex: (currentIndex) => set({ currentIndex }),

}))

export default useUserStore;