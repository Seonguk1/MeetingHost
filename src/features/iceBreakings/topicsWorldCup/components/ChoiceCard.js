import React from 'react';
import styles from '../styles/ChoiceCard.styles';
import { TouchableOpacity, Text, Image } from 'react-native';

export default function ChoiceCard({ name, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
}