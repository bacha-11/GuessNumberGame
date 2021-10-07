import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";


const GameStartSection = (props) =>{
    const [enterNumber, setEnterNumber] = useState('')

    const numberInputHandler = e =>{
        console.log(e)
        setEnterNumber(e.replace(/[^0-9]/g, ''))
    }

    return(
        <TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss()}}>
            <View style={styles.gameContainer}>
                <Text style={styles.gameTitle}>{props.title}</Text>
                <View style={styles.CardContainer}>
                    <Text style={styles.cardTitle}>Select a Number</Text>
                    <TextInput style={styles.cardInput} onChangeText={numberInputHandler} value={enterNumber} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                    <View style={styles.cardBtn}>
                        <View style={styles.btnSize}>
                            <Button color="#27ae60" title="Reset" />
                        </View>
                        <View style={styles.btnSize}>
                            <Button color="#B33771" title="Submit" />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

)};


export default GameStartSection;


const styles = StyleSheet.create({
    gameContainer:{
        flex:1,
        padding:10,
        alignItems:"center",
    },

    gameTitle:{
        fontSize:15,
        marginVertical:10
    },

    CardContainer:{
        width:"80%",
        backgroundColor:"#EAB543",
        padding:10,
        alignItems:"center",
        shadowColor:"black",
        shadowOffset:{width:0, height:3},
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    cardTitle:{
        color:"#fff"
    },

    cardInput:{
        height:30,
        width:40,
        borderBottomWidth:1,
        borderBottomColor:"grey",
        marginVertical:10,
        textAlign:"center"
    },

    cardBtn:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginVertical:20
    },

    btnSize:{
        width:"40%"
    }
})