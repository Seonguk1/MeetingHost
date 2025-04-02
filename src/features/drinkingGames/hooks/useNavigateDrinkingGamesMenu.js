import { useRouter } from "expo-router";

const useNavigateDrinkingGamesMenu = ()=>{
    const router = useRouter();

    const goToBack = ()=>{
        router.back();
    }

    return{
        goToBack,
    }
}

export default useNavigateDrinkingGamesMenu;