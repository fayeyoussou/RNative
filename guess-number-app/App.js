// import { StatusBar } from "expo-status-bar";
import { useState } from 'react'
import { StyleSheet, ImageBackground,SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from './constants/colors';
// import { SafeAreaView } from 'react-native-web';
const App = () => {
  const [number,setNumber] = useState()
  const pickedNumberHandler = (pickedNumber)=>{
    setNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>
  if(number) {
    screen = <GameScreen/>
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500, Colors.accent600, Colors.secondaryAccent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style = {styles.rootScreen}
        imageStyle = { styles.backgroundImage}
      >
      
        <SafeAreaView style = {styles.rootScreen}>

        {screen}
        </SafeAreaView>
      
      </ImageBackground>
    </LinearGradient>
  );
}

export default App
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage : {
    opacity : 0.15
  }
});
