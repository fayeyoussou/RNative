import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput placeholder='Your Course goal' style = {styles.textInput}/>
        <Button title = 'Add Goal'/>
      </View>
      <View style = {styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
      <View></View>
    </View>
  );
}


styles  = StyleSheet.create({
  appContainer : {
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 16
  },
  inputContainer : {
    flex : 3,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom : 24,
    borderBottomWidth : 1,
    borderBottomColor : 'grey'

  },
  textInput : {
    borderWidth :  1,
    borderColor : '#CAA',
    width : '70%',
    marginRight : 8,
    padding : 8
  },
  goalsContainer : {
    flex : 16
  }
})