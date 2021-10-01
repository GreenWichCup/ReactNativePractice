import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

// Touchables -> Touchopacity , TouchWithoutFeedback,TouchWithFeedback
const TextList = (props) => {
  // const [pressed,setPressed] =useState(false)
  // const [textColor,setColor] =useState('red')
  // const changeColor=()=>{
  //   setColor('green')
  //   setPressed(tue)
  //   props.deleteText()
  // }
  //      <Text style={{backgroundColor: textColor}}>{props.title}</Text>

  return (
    <TouchableOpacity onPress={()=>props.deleteText(props.textid)} activeOpacity={0.7}>
      <View style={style.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default TextList;
