import topicsList from "../../../../constants/topicsList";
import useUserStore from "../../../../stores/useUserStore";

const showNextTopic = () => {
    let currentIndex = useUserStore.getState().currentIndex;
    
    useUserStore.getState().setCurrentTopic(topicsList[currentIndex+1]);
    useUserStore.getState().setCurrentIndex(currentIndex+1)
}

export default showNextTopic;