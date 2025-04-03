import { useRouter } from "expo-router";

const useNavigateIceBreakingsMenu = () => {
    const basePath = "/iceBreakings";

    const router = useRouter();

    const goToShowTopics = () => {
        router.push(basePath + "/showTopics");
    }

    const goToTopicWorldCup = () => {
        router.push(basePath + "/topicWorldCup");
    }

    const goToLiarGame = () => {
        router.push(basePath + "/liarGame");
    }

    const goToBack = () => {
        router.back();
    }

    return {
        goToShowTopics,
        goToTopicWorldCup,
        goToLiarGame,
        goToBack
    };

}

export default useNavigateIceBreakingsMenu;