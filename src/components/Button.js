import { TouchableOpacity, View, Text } from "react-native";

const Button = ({title})=>{

    return(
        <View>
            <TouchableOpacity>
                <Text> {title} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;