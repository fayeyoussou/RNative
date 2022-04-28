import { TextInput, StyleSheet, View,Alert } from "react-native";
import { useState } from 'react'
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber , setEnteredNumber] = useState('')
    const numberInputHandler = (enteredText)=> {
        setEnteredNumber(enteredText)
    }
    const resetInput = ()=>{
        setEnteredNumber('')
    } 
    const confirm = () => {
        const choosenNumber = parseInt(enteredNumber)
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99)
        {
            Alert.alert('Invalid Number','Have to be between 0 & 99',
            [
                {text : 'Okay',style : 'destructive',onPress : resetInput}
            ])
            return
        } 
        onPickNumber(choosenNumber)
    }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value= {enteredNumber}
        style={styles.numberInput}
        maxLength={2}
        onChangeText = {numberInputHandler}
        keyboardType="numeric"
        autoCapitalize="none" // this 2 are uselless here but can be usefull for input
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress = {confirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 25,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#333333",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowOpacity: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer : {
      flex : 1
  }
});

export default StartGameScreen;
