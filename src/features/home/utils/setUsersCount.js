import useUserStore from "../../../stores/useUserStore";

const setUsersCount = (count)=>{
    const {users, setUsers} = useUserStore();
    setUsers(users + count);
}

export default setUsersCount;