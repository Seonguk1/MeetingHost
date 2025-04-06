import { Text, View, Button, StyleSheet } from "react-native";
import useBalanceGame from "./hooks/useSelectForVoting";

const BalanceGameScreen = () => {
  const {
    selected,
    setSelected,
    countA,
    countB,
    total,
    handleChoose,
  } = useBalanceGame();

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button
          title="일주일에 한번 만나자는 애인"
          color={selected === "A" ? "skyblue" : "gray"}
          onPress={() => setSelected("A")}
        />
        <Text> VS </Text>
        <Button
          title="매일 만나자는 애인"
          color={selected === "B" ? "skyblue" : "gray"}
          onPress={() => setSelected("B")}
        />
      </View>

      <View style={styles.buttonRow}>
        <Text style={styles.counter}>{countA}명</Text>
        <Text style={styles.counter}>{countB}명</Text>
      </View>

      <View style={styles.selectButton}>
        <Button
          title="선택"
          onPress={handleChoose}
          disabled={!selected || total >= 6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 20,
  },
  selectButton: {
    marginTop: 20,
    height: 50,
    justifyContent: "center",
    width: 200,
  },
});

export default BalanceGameScreen;
