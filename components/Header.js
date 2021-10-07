import React from "react";
import { View, Text, StyleSheet } from "react-native"


const Header = ({title,...props}) =>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#B33771",
        padding:30,
    },

    headerTitle:{
        color:"#2C3A47",
        fontSize:18,
        marginTop:10,
        fontWeight:"bold",
    }
})



export default Header;