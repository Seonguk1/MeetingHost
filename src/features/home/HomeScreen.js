import {Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

const HomeScreen = ()=>{
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <CustomButton title="아이스 브레이킹" onPress={()=>{console.log("눌렸습니다.1")}}></CustomButton>
      <CustomButton title="술게임" onPress={()=>{console.log("눌렸습니다.2")}}></CustomButton>
    </View>
  );
}

export default HomeScreen;