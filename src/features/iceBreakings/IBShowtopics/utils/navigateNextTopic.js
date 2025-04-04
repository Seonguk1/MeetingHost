import topicsList from "../../../../constants/topicsList";
import useUserStore from "../../../../stores/useUserStore";

const navigateNextTopic = () => {
    let currentIndex = useUserStore.getState().currentIndex;
    
    useUserStore.getState().setCurrentTopic(topicsList[currentIndex+1]);
    useUserStore.getState().setCurrentIndex(currentIndex+1)
}

export default navigateNextTopic;