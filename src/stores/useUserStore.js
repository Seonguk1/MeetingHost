import { create } from 'zustand';
const useUserStore = create((set)=>({
    users: 0,

    setUsers: (users)=>set({users}),
}))

export default useUserStore;