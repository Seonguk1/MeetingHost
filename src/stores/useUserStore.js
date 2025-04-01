import { create } from 'zustand';
const useUserStore = create((set)=>({
    users: 0,
    currentTopic : "",

    setUsers: (users)=>set({users}),
    setCurrentTopic : (topic)=>set({topic}),
    
}))

export default useUserStore;