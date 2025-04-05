import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView, Button } from 'react-native';
import useRoulettePicker from "../../../hooks/useRoulettePicker";
import useUserStore from "../../../stores/useUserStore";

const ITEM_HEIGHT = 80;
const baseData = ['동물', '직업', '음식', '영화', '스포츠', '노래', '장소', '가전제품'];
const repeatedData = Array(50).fill(baseData).flat();
const centerIndex = Math.floor(repeatedData.length / 2);

const LiarGameScreen = () => {
    const {rouletteRef} = useUserStore();
    const [selected, setSelected] = useState(null);
    useRoulettePicker();

    const handleScrollEnd = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        
        const item = repeatedData[index+2];
        setSelected(item);
        //console.log(`index: ${index}`);
    };

    

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: ITEM_HEIGHT * 5, overflow: 'hidden' }}>
                <FlatList
                    ref={rouletteRef}
                    data={repeatedData}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    getItemLayout={(_, index) => ({
                        length: ITEM_HEIGHT,
                        offset: ITEM_HEIGHT * index,
                        index,
                    })}
                    initialScrollIndex={centerIndex}
                    snapToInterval={ITEM_HEIGHT}
                    onMomentumScrollEnd={handleScrollEnd}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )}
                />
                {/* 중앙 가이드라인 */}
                <View style={styles.guideLine}>
                    <Text style={styles.guideText}>🎯</Text>
                </View>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    선택된 주제: {selected ?? '없음'}
                </Text>
            </View>
            <Button title="룰렛 돌리기" onPress={()=>{}} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
    item: {
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    text: { fontSize: 20 },
    guideLine: {
        position: 'absolute',
        top: ITEM_HEIGHT * 2.5 - ITEM_HEIGHT / 2,
        height: ITEM_HEIGHT,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'tomato',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    guideText: {
        fontSize: 16,
        color: 'tomato',
    },
});

export default LiarGameScreen;




