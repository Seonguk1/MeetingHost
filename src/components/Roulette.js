import useRoulettePicker from "../hooks/useRoulettePicker";
import useRouletteStore from "../stores/useRouletteStore";
import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView, Button } from 'react-native';
import topicsList from "../constants/topicsList";
import styles from "./Roulette.style";

const Roulette = () => {
    const { rouletteRef, itemHeight, isPressed, setIsPressed, selectedItem, resultItem } = useRouletteStore();
    const { handleScrollEnd} = useRoulettePicker('liarGame');
    const itemList = topicsList;
    const repeatedData = Array(50).fill(itemList).flat();

    return (
        <>
            <View style={{ height: itemHeight * 5, overflow: 'hidden' }}>
                <FlatList
                    ref={rouletteRef}
                    data={repeatedData}
                    showsVerticalScrollIndicator={false}
                    getItemLayout={(_, index) => ({
                        length: itemHeight,
                        offset: itemHeight * index,
                        index,
                    })}
                    initialScrollIndex={0}
                    snapToInterval={itemHeight}
                    onMomentumScrollEnd={handleScrollEnd}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )}
                />
                {/* 중앙 가이드라인 */}
                <View style={styles.guideLine}>
                    <Text style={styles.guideText}></Text>
                </View>
            </View>

            <View style={{ marginTop: 30 }}>
                {resultItem && <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    {resultItem ?? '없음'}
                </Text>}
            </View>
            <Button title="룰렛 돌리기" onPress={() => { setIsPressed(true) }} />
        </>
    )
}

export default Roulette;