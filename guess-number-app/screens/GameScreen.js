import { useState } from 'react';
import {Text,View,StyleSheet,} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
const generateRandomBetween = (min, max, exclude) =>{
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
const GameScreen = ({chooseNumber})=>{
    const initialGuess = generateRandomBetween(1,100,chooseNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    return (
        <View style = {styles.screen}>
            <Title children = {"GameScreen"}></Title>
            <NumberContainer>{currentGuess}</NumberContainer>
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