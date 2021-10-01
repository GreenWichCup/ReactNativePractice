import React from 'react'
import { StyleSheet,View } from 'react-native'


const Card=(props)=>{
    return(
        <View style={{...styles.card,...props.style}}>{props.children}</View>
    )
}

const styles=StyleSheet.create({
    card:{
        shadowColor:'#000000',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.3,
        backgroundColor:'white',
        elevation:8,
        padding:20,
        borderRadius:20
    }
})

export default Card