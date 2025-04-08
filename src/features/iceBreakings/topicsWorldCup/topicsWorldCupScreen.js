import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Animated } from 'react-native';
import useWorldCup from './hooks/useWorldCup';
import ChoiceCard from './components/ChoiceCard';

export default function TopicsWorldCupScreen() {
  const {
    left,
    right,
    winner,
    scaleAnim,
    handleSelect,
    resetGame,
    getRoundLabel
  } = useWorldCup();

  if (winner) {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }], alignItems: 'center' }}>
          <Text style={styles.title}>🏆 우승자</Text>
          <Image source={winner.image} style={styles.winnerImage} />
          <Text style={styles.winner}>{winner.name}</Text>
        </Animated.View>
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetText}>🔄 다시 하기</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.maintitle}>이상형 월드컵</Text>
      <Text style={styles.title}>{getRoundLabel()}</Text>
      <View style={choicesContainer}>
        <ChoiceCard namstylese={left.name} image={left.image} onPress={() => handleSelect(left)} />
        <Text style={styles.vsText}>VS</Text>
        <ChoiceCard name={right.name} image={right.image} onPress={() => handleSelect(right)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  maintitle: { fontSize: 35, fontWeight: 'bold', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  choicesContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '90%' },
  vsText: { fontSize: 24, fontWeight: 'bold', marginHorizontal: 10, alignSelf: 'center', color: '#888' },
  winner: { fontSize: 36, marginTop: 20, color: '#ff6b81' },
  winnerImage: { width: 250, height: 250, borderRadius: 20, resizeMode: 'cover', marginBottom: 20 },
  resetButton: {
    position: 'absolute', bottom: 30, right: 30, backgroundColor: '#ff6b81',
    paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, elevation: 3,
    shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 1, height: 2 }, shadowRadius: 4
  },
  resetText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});