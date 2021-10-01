import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game Is Over</Text>
      <Text>Number of Rounds : {props.rounds}</Text>
      <Text>Number Was: {props.originalNumber}</Text>
      <Button title="New Game" onPress={props.restart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOver;
