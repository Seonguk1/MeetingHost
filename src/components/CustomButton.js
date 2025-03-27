import { TouchableOpacity, Text } from "react-native"
import styles from "./CustomButton.style"

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}> {title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;