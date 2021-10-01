import React from "react";
import { StyleSheet,TextInput } from "react-native";
import Theme from "../shared/Theme";

const Input=(props)=>{
    return(
        <TextInput  {...props} style={{...styles.inputprop,...props.style}} autoFocus />
    )
}

const styles=StyleSheet.create({
    inputprop:{
        height:40,
        borderBottomColor:Theme.primaryColor,
        borderBottomWidth:1,
        marginVertical:10,
        color:Theme.primaryColor,
        textAlign:'center'
    }
})

export default Input;