import topicsList from "../../../../constants/topicsList";
import useUserStore from "../../../../stores/useUserStore";



const navigateNextTopic = (index) => {
    const{
        setCurrentTopic
    }=useUserStore()
    setCurrentTopic(topicsList[index]);
}

export default navigateNextTopic;