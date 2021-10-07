import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const NumberContainer = (props) =>{
    return(
        <View style={styles.numberContainer}>
            <Text style={styles.numberColor}>{props.children}</Text>
        </View>
    )
}

export default NumberContainer;


const styles = StyleSheet.create({
    numberContainer:{
        padding:10,
        borderColor:"#B33771",
        borderWidth:2,
        justifyContent:"center",
        alignItems:"center", 
        marginVertical:10
    },

    numberColor:{
        color:"#B33771",
    }
})