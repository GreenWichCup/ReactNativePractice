import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../UI/Card";
import NumberContainer from "../UI/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomnumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomnumber === parseInt(exclude)) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomnumber;
  }
};

const GameScreen = (props) => {
  //Computer ->11 , user ->88
  // Computer ->89 , user ->88
  //Computer ->11, user ->88
  //5-20
  //6-15
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 99, props.userchoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(99);
  const { userchoice, guessRounds } = props;
  useEffect(() => {
    //logic
    if (currentGuess === props.userchoice) {
      props.guessRounds(rounds);
    }
  }, [currentGuess,userchoice,guessRounds]);

  const nextNumberHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userchoice) ||
      (direction === "higher" && currentGuess > props.userchoice)
    ) {
      Alert.alert("Think Again !", "You know this is wrong..", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRound) => currentRound + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Computer's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttoncontainer}>
        <Button title="LOWER" onPress={nextNumberHandler.bind(this, "lower")} />
        <Button
          title="HIGHER"
          onPress={nextNumberHandler.bind(this, "higher")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
