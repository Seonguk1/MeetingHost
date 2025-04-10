import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      resizeMode: 'cover',
    },
    cardText: {
      fontSize: 20,
      fontWeight: '500',
    },
});

export default styles;