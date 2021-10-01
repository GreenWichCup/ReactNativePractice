import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../UI/Card";
import Theme from "../shared/Theme";
import Input from "../UI/Input";
import NumberContainer from "../UI/NumberContainer";
const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setNumber] = useState();
  const numberHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetButtonHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmButtonHandler = () => {
    const usernumber = parseInt(enteredValue);
    if (isNaN(usernumber) || usernumber <= 0 || usernumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetButtonHandler },
      ]);
      return;
    }

    setNumber(usernumber);
    setConfirmed(true);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmOutput;
  if (confirmed) {
    //confirmOutput=<Text>Your Number: {selectedNumber}</Text>

    confirmOutput = (
      <ScrollView>
        <Card style={styles.confirmConatiner}>
          <Text style={styles.selectedText}>You Selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button
            title="Start"
            color={Theme.secondary}
            onPress={() => props.onStart(selectedNumber)}
          />
        </Card>
      </ScrollView>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.mainView}>
        <Card style={styles.inputContainer}>
          <Text>Select Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonProp}>
              <Button
                title="Reset"
                color={Theme.secondary}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.buttonProp}>
              <Button
                title="Confirm"
                color={Theme.secondary}
                onPress={confirmButtonHandler}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonProp: {
    width: 80,
    margin: 10,
  },
  input: {
    width: 50,
  },
  confirmConatiner: {
    marginTop: 20,
    elevation: 3,
  },
  selectedText: {
    alignItems: "center",
  },
});
export default StartScreen;
