import {Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import useNavigateHome from "./hooks/useNavigateHome";

const HomeScreen = ()=>{
  const {goToIceBreakingsMenu,goToDrinkingGamesMenu} = useNavigateHome();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <CustomButton title="아이스 브레이킹" onPress={goToIceBreakingsMenu}></CustomButton>
      <CustomButton title="술게임" onPress={()=>{goToDrinkingGamesMenu}}></CustomButton>
    </View>
  );
}

export default HomeScreen;