import { Text,StyleSheet } from "react-native"
const Title = ({children}) => <Text style = {styles.title}>{children}</Text>
const styles = StyleSheet.create({
    title : {
        fontSize : 25,
        fontWeight : 'bold',
        color : '#ddb52f',
        textAlign : 'center',
        borderWidth : 2,
        borderColor : '#ddb52f',
        padding : 12
    }
})
export default Title