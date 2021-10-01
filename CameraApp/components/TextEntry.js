import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal, Text } from "react-native";
import {Button,} from 'react-native-paper'
const TextEntry = (props) => {
  const [enteredText, setText] = useState("");
  // Text event handler
  const textHandler = (enteredText) => {
    setText(enteredText);
  };

  const buttonClickHandler = () => {
    props.addText(enteredText);
    setText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={style.userInputView}>
        <TextInput
          placeholder="Add Todo"
          style={style.userTextInput}
          onChangeText={textHandler}
          value={enteredText}
          autoFocus
        />
        {/* Button View */}
        <View style={style.buttonStyle}>
          {/* First Button */}
          <View style={style.buttonElement}>
            <Button mode="contained" uppercase={false} onPress={props.onClose} color="red" >
              Close
            </Button>
             
          </View>
          {/* Second Button */}
          <View  style={style.buttonElement}>
            <Button mode="contained" uppercase={false} onPress={buttonClickHandler} title="Add Todo" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({

  userInputView: {
    flex: 0.5, backgroundColor: 'white',justifyContent: 'space-around', alignItems: 'center' 
  },
  userTextInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "60%",
    marginBottom: 10,
  },
 buttonStyle:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:'60%',
     borderRadius:80
 },
 buttonElement:{
     width:'40%'
 }
});
export default TextEntry;
