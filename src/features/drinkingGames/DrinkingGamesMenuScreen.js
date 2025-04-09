import { Button, SafeAreaView, Text } from "react-native";
import useNavigateDrinkingGamesMenu from "./hooks/useNavigateDrinkingGamesMenu";
import { Link } from "expo-router";

const DrinkingGamesMenuScreen = ()=>{
    const {goToBalanceGame} = useNavigateDrinkingGamesMenu();
    return(
        <SafeAreaView>

            
            <Link href="/">
            <Button title="밸런스 게임" onPress={goToBalanceGame}></Button>
            </Link>
        </SafeAreaView>
    )
}

export default DrinkingGamesMenuScreen;