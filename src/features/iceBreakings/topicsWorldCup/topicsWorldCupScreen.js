import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Animated } from 'react-native';

const initialCandidates = [
    { id: 1, name: '김치찌개', image: require('../../../assets/images/topicsWorldCupImages/kimchi.jpeg') },
    { id: 2, name: '된장찌개', image: require('../../../assets/images/topicsWorldCupImages/doenjang.jpeg') },
    { id: 3, name: '불고기', image: require('../../../assets/images/topicsWorldCupImages/bulgogi.jpeg') },
    { id: 4, name: '삼겹살', image: require('../../../assets/images/topicsWorldCupImages/samgyeopsal.jpeg') },
    { id: 5, name: '치킨', image: require('../../../assets/images/topicsWorldCupImages/chicken.jpeg') },
    { id: 6, name: '피자', image: require('../../../assets/images/topicsWorldCupImages/pizza.jpeg') },
    { id: 7, name: '냉면', image: require('../../../assets/images/topicsWorldCupImages/naengmyeon.jpeg') },
    { id: 8, name: '떡볶이', image: require('../../../assets/images/topicsWorldCupImages/tteokbokki.jpeg') }
];

const TopicsWorldCupScreen = ()=>{
    const [round, setRound] = useState(8); // 현재 라운드 (8강, 4강, 2강, 결승)
    const [candidates, setCandidates] = useState(shuffle(initialCandidates)); // 현재 후보 목록
    const [nextRound, setNextRound] = useState([]); // 다음 라운드로 진출할 목록
    const [currentIdx, setCurrentIdx] = useState(0); // 현재 비교 중인 후보 인덱스
    const [winner, setWinner] = useState(null); // 우승자가 결정되면 이 상태에 저장
    
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (winner) {
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          friction: 5
        }).start();
      }
    }, [winner]);
  
    const resetGame = () => {
      setRound(8);
      setCandidates(shuffle(initialCandidates));
      setNextRound([]);
      setCurrentIdx(0);
      setWinner(null);
      scaleAnim.setValue(0); // 애니메이션 초기화
    };

    const getRoundLabel = () => {
        const baseLabel =
          round === 2 ? '결승' : round === 4 ? '준결승' : `${round}강`;
      
        const totalMatches = candidates.length / 2;
        const currentMatch = Math.floor(currentIdx / 2) + 1;
      
        return `${baseLabel} (${currentMatch}/${totalMatches})`;
    };
  
    const handleSelect = (selected) => {
      const updatedNext = [...nextRound, selected];
  
      if (currentIdx + 2 >= candidates.length) {
        if (updatedNext.length === 1) {
          setWinner(updatedNext[0]); // 최종 우승자
        } else {
          setCandidates(updatedNext); // 다음 라운드로 넘어감
          setNextRound([]);
          setCurrentIdx(0);
          setRound(round / 2);
        }
      } else {
        setNextRound(updatedNext); // 다음 라운드 진출 후보 쌓기
        setCurrentIdx(currentIdx + 2); // 다음 비교 쌍으로 이동
      }
    };
  
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
  
    const left = candidates[currentIdx];
    const right = candidates[currentIdx + 1];
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.maintitle}>이상형 월드컵</Text>
        <Text style={styles.title}>{getRoundLabel()}</Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard name={left.name} image={left.image} onPress={() => handleSelect(left)} />
          <Text style={styles.vsText}>VS</Text>
          <ChoiceCard name={right.name} image={right.image} onPress={() => handleSelect(right)} />
        </View>
      </SafeAreaView>
    );
  }

  function ChoiceCard({ name, image, onPress }) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.cardText}>{name}</Text>
      </TouchableOpacity>
    );
  }

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maintitle: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30
    },
    choicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%'
    },
    card: {
        width: 200,
        height: 300,
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 6,
        elevation: 5
    },
    cardText: {
        fontSize: 20,
        fontWeight: '500'
    },
    winner: {
        fontSize: 36,
        marginTop: 20,
        color: '#ff6b81'
    },
    vsText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
        alignSelf: 'center',
        color: '#888'
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        resizeMode: 'cover'
    },
    resetButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#ff6b81',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4
    },
    resetText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});


export default TopicsWorldCupScreen;