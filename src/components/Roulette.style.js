import { StyleSheet } from "react-native";
const itemHeight = 80;
export default StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
    item: {
        height: itemHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    text: { fontSize: 20 },
    guideLine: {
        position: 'absolute',
        top: itemHeight * 2.5 - itemHeight / 2,
        height: itemHeight,
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
})