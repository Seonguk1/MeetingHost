import { useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Animated, Dimensions, StyleSheet, SafeAreaView, Button } from 'react-native';

const ITEM_HEIGHT = 200;
const baseData = [1,2,3,4,5,6,7,8,9,10];
const repeatedData = Array(50).fill(baseData).flat(); // 총 200개쯤
const centerIndex = Math.floor(repeatedData.length / 2);

const LiarGameScreen = () => {
    const rouletteRef = useRef();

    const spinToRandom = () => {
        const val = 1;
        let currentIndex = centerIndex+val;
        setInterval(() => {
            rouletteRef.current.scrollToIndex({
                index: currentIndex,
                animated: true
            });
            currentIndex +=val;
        }, 200);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Animated.FlatList
                scrollEventThrottle={16}
                ref={rouletteRef}
                data={repeatedData}
                getItemLayout={(data, index) => ({
                    length: ITEM_HEIGHT,
                    offset: ITEM_HEIGHT * index,
                    index,
                })}
                renderItem={({ item }) =>
                    <View style={{ width: 100, height: ITEM_HEIGHT, borderColor: "black", borderWidth: 1 }}>
                        <Text>아이템: {item}</Text>
                    </View>
                }
                initialScrollIndex={centerIndex}
                // snapToInterval={ITEM_HEIGHT}
                // decelerationRate="fast"
                // onScroll={Animated.event(
                //     [{ nativeEvent: { velocity: { y: 1 } } }]
                // )}
            />
            <Button title="룰렛 돌리기" onPress={spinToRandom} />
        </SafeAreaView>
    )
}

export default LiarGameScreen;