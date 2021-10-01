import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Theme from '../shared/Theme'
const Header=(props)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:Theme.primary,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        height:60
    },
    titleText:{
        color:Theme.primaryColor,
        fontSize:18,
        fontWeight:'bold'
    }
})
export default Header