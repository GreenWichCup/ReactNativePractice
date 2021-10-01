import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../UI/HeaderButton";
import { RECIPES } from "../data/categoryLdb";

const RecipeDetail = (props) => {

  const recipeItemId = props.navigation.getParam('recipeId');
const selectedRecipeItem = RECIPES.find(recipe => recipe.id === recipeItemId)

  return (
      <View style={styles.mainView}>
          <Text>{selectedRecipeItem.title}</Text> 
          <Button title="Back to first page" onPress={() => {
            props.navigation.popToTop()
          }}/>      
      </View>
  );
};

RecipeDetail.navigationOptions = (navigationData) => {
  const recipeItemId = navigationData.navigation.getParam('recipeId');
  const selectedRecipeItem = RECIPES.find(recipe => recipe.id === recipeItemId);
  return {
    headerTitle: selectedRecipeItem.title,
    headerRight: ()=><HeaderButtons HeaderButtonComponent= {CustomHeaderButton}>
      <Item  iconName="search" title='edit' onPress= { ()=>console.log('Favorites!!!') } />
    </HeaderButtons>
  };

}

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },

});
export default RecipeDetail;