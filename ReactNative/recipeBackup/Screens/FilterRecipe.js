import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const FilterRecipe = (props) => {
  const [enteredValue, setEnteredValue] = useState("");


  return (
   
      <View style={styles.mainView}>
          <Text>Select Number</Text>      
      </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },

});
export default FilterRecipe;