// import { StatusBar } from "expo-status-bar";
import { useState } from 'react'
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
const App = () => {
  const [number,setNumber] = useState()
  const pickedNumberHandler = (pickedNumber)=>{
    setNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>
  if(userNumber) {
    screen = <GameScreen/>
  }
  return (
    <LinearGradient
      colors={["#5e0329", "#ddb52f", "#eeb45f", "#11ff55"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style = {styles.rootScreen}
        imageStyle = { styles.backgroundImage}
      >
        <StartGameScreen />
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