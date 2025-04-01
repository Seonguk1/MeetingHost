import { useRouter } from "expo-router";

const useNavigateIceBreakingsMenu = ()=>{
    const router = useRouter();

    const goToShowTopics = ()=>{
        router.push("/showTopics");
    }

    const goToTopicWorldCup = ()=>{
        router.push("/topicWorldCup");
    }

    const goToLiarGame = ()=>{
        router.push("/liarGame");
    }

    const goToBack = ()=>{
        router.back();
    }

    return{
        goToShowTopics,
        goToTopicWorldCup,
        goToLiarGame,
        goToBack
    };

}

export default useNavigateIceBreakingsMenu;