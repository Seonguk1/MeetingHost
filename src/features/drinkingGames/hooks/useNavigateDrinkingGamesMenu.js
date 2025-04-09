import { useRouter } from "expo-router";

const useNavigateDrinkingGamesMenu = ()=>{

    const basePath = "/drinkingGames";

    const router = useRouter();

    const goToBalanceGame = () => {
        router.push(basePath + "/balanceGame");
    }

    const goToBack = ()=>{
        router.back();
    }

    return{
        goToBack,
        goToBalanceGame,
    }
}

export default useNavigateDrinkingGamesMenu;