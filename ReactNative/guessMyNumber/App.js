import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/UI/Header";
import StartScreen from "./components/Screens/StartScreen";
import GameScreen from "./components/Screens/GameScreen";
import GameOver from "./components/Screens/GameOver";
export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [totalGameRounds, setGuessRounds] = useState(0);
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  //if usernumber =='' -> startscreen
  //if usernumber !='' && guessRounds <=0 => gamescreen
  //if guessRounds > 0 -> gameover

  const getGuessRoundsHandler = (totalRounds) => {
    setGuessRounds(totalRounds);
  };
  const restartGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  let content = <StartScreen onStart={startGameHandler} />;

  if (userNumber && totalGameRounds === 0) {
    content = (
      <GameScreen userchoice={userNumber} guessRounds={getGuessRoundsHandler} />
    );
  } else if (totalGameRounds > 0) {
    content = (
      <GameOver
        rounds={totalGameRounds}
        originalNumber={userNumber}
        restart={restartGameHandler}
      />
    );
  }
  return (
    <View style={styles.mainView}>
      <Header title="Fun Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
