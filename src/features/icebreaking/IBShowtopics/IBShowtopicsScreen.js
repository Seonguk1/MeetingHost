import {Text, View, Button } from "react-native";
import navigaeNextTopic from "./utils/navigateNextTopic";
import { useState } from "react";

const IBShowtopicsScreen = ()=>{
  const [index, setIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <text></text>
      <Button title="주제 보기" onPress={
        
        ()=>{
          let newIndex = index;
          newIndex++;
          setIndex(newIndex)
          navigaeNextTopic(index)}
        }></Button>
    </View>
  );
}

export default IBShowtopicsScreen;