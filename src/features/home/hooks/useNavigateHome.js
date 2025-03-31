import { useRouter } from "expo-router"

const useNavigateHome = ()=>{
    const router = useRouter();

    const goToIceBreakingsMenu = ()=>{
        router.push("/iceBreakings");
    }

    const goToDrinkingGamesMenu = ()=>{
        router.push("/drinkingGames");
    }

    return {
        goToIceBreakingsMenu,
        goToDrinkingGamesMenu,
      };    
}

export default useNavigateHome;