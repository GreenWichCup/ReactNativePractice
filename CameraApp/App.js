import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import TextList from "./components/TextList";
import TextEntry from "./components/TextEntry";
export default function App() {
  const [listText, setListText] = useState([]);
  const [isVisible, setVisible] = useState(false);
  // button click event
  const addListTextHandler = (userText) => {
    // setListText([...listText, enteredText]);

    setListText([
      ...listText,
      { id: Math.random().toString(), value: userText },
    ]);
    setVisible(false)
  };
  // Delete Function
  const deleteTextHandler = (textId) => {
    setListText((currentText) => {
      return currentText.filter((selectedText) => selectedText.id != textId);
    });
  };
  const modalHandler=()=>{
    setVisible(true)
  }
  const closeModalHandler=()=>{
    setVisible(false)
  }
  return (
    <View style={style.mainView}>
      {/* Modal Button */}
      <View>
        <Button title="Add New Todo" onPress={modalHandler}/>
      {/* Button, textinput view */}
        <TextEntry addText={addListTextHandler} visible={isVisible} onClose={closeModalHandler}/>
      {/* List (todo list -> user entered) */}
      </View>
      <View>
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={listText}
        renderItem={(itemData) => (
        <TextList
            title={itemData.item.value}
            deleteText={deleteTextHandler}
            textid={itemData.item.id}/>
            )}>

        </FlatList>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainView: { padding: 30 },
});


// 1.Separate flatlist and button in same screen
//2.Add Close button and the function
//3.Add style to close button