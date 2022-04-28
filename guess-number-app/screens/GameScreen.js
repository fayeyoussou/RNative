import {Text,View,StyleSheet,} from 'react-native';
import Title from '../components/Title';
const GameScreen = ()=>{
    return (
        <View style = {styles.screen}>
            <Title children = {"GameScreen"}></Title>
            {/* Guess */}
            <View>
                <Text>Higher or lower</Text>
                {/* + -  */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding : 24,

    }
})
export default GameScreen