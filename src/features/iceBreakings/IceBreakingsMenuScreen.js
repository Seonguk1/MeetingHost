import { Button, SafeAreaView, Text } from "react-native";
import useNavigateIceBreakingsMenu from "./hooks/useNavigateIceBreakingsMenu";

const IceBreakingsMenuScreen = ()=>{
    const {goToLiarGame} = useNavigateIceBreakingsMenu();
    return(
        <SafeAreaView>
            <Button title="라이어 게임" onPress={goToLiarGame}></Button>
        </SafeAreaView>
    )
}

export default IceBreakingsMenuScreen;