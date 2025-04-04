import {Text, View, Button } from "react-native";
import showNextTopic from "./utils/showNextTopic";
import { useState } from "react";
import useUserStore from "../../../stores/useUserStore";

const TopicsSelectionScreen = ()=>{
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
      <Button title="다음 주제 보기" onPress={showNextTopic}></Button>
    </View>
  );
}

export default TopicsSelectionScreen;