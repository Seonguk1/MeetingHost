import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Animated } from 'react-native';
import useWorldCup from './hooks/useWorldCup';
import ChoiceCard from './components/ChoiceCard';
import styles from './styles/TopicsWorldCupScreen.styles';

export default function TopicsWorldCupScreen() {
  const {left, right, winner, scaleAnim, handleSelect, resetGame, getRoundLabel} = useWorldCup();

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