import { useState, useRef, useEffect, } from 'react';
import { Animated } from 'react-native';
import shuffleArray from '@/utils/shuffleArray';
import candidates from '../constants/foodCandinates';

export default function useWorldCup() {
  const [round, setRound] = useState(8);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [candidatesList, setCandidates] = useState(shuffleArray(candidates));
  const [nextRound, setNextRound] = useState([]);
  const [winner, setWinner] = useState(null);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (winner) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
      }).start();
    }
  }, [winner]);

  const resetGame = () => {
    setRound(8);
    setCandidates(shuffleArray(candidates));
    setNextRound([]);
    setCurrentIdx(0);
    setWinner(null);
    scaleAnim.setValue(0);
  };

  const handleSelect = (selected) => {
    const updatedNext = [...nextRound, selected];
    if (currentIdx + 2 >= candidatesList.length) {
      if (updatedNext.length === 1) {
        setWinner(updatedNext[0]);
      } else {
        setCandidates(updatedNext);
        setNextRound([]);
        setCurrentIdx(0);
        setRound(round / 2);
      }
    } else {
      setNextRound(updatedNext);
      setCurrentIdx(currentIdx + 2);
    }
  };

  const left = candidatesList[currentIdx];
  const right = candidatesList[currentIdx + 1];
  const totalMatches = candidatesList.length / 2;
  const currentMatch = Math.floor(currentIdx / 2) + 1;

  const getRoundLabel = () => {
    const baseLabel =
      round === 2 ? '결승' : round === 4 ? '준결승' : `${round}강`;
    return `${baseLabel} (${currentMatch}/${totalMatches})`;
  };

  return {
    round,
    left,
    right,
    winner,
    scaleAnim,
    handleSelect,
    resetGame,
    getRoundLabel,
  };
}