import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView, Button } from 'react-native';
import Roulette from "@/components/Roulette";


const LiarGameScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <Roulette></Roulette>
        </SafeAreaView>
    );
};

export default LiarGameScreen;