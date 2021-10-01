import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Theme from "../shared/Theme";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    borderColor: Theme.secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Theme.primary,
    fontSize: 30,
  },
});
export default NumberContainer;
