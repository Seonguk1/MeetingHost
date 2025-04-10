import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    maintitle: {
        fontSize: 35, fontWeight: 'bold', marginBottom: 20
    },
    title: {
        fontSize: 28, fontWeight: 'bold', marginBottom: 30
    },
    choicesContainer: {
        flexDirection: 'row', justifyContent: 'space-around', width: '90%'
    },
    vsText: {
        fontSize: 24, fontWeight: 'bold', marginHorizontal: 10,
        alignSelf: 'center', color: '#888'
    },
    winner: {
        fontSize: 36, marginTop: 20, color: '#ff6b81'
    },
    winnerImage: {
        width: 250, height: 250, borderRadius: 20,
        resizeMode: 'cover', marginBottom: 20
    },
    resetButton: {
        position: 'absolute', bottom: 30, right: 30,
        backgroundColor: '#ff6b81', paddingHorizontal: 20, paddingVertical: 10,
        borderRadius: 25, elevation: 3,
        shadowColor: '#000', shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 2 }, shadowRadius: 4
    },
    resetText: {
        color: 'white', fontWeight: 'bold', fontSize: 16
    }
});

export default styles;