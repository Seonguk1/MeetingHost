import {Text, View, Button } from "react-native";
import navigateNextTopic from "./utils/navigateNextTopic";
import { useState } from "react";
import useUserStore from "../../../stores/useUserStore";

const IBShowtopicsScreen = ()=>{
  const {currentTopic} = useUserStore();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <text> {currentTopic}</text>
      <Button title="다음 주제 보기" onPress={navigateNextTopic}></Button>
    </View>
  );
}

export default IBShowtopicsScreen;