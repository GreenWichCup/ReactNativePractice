import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  
  FlatList,
} from "react-native";
import Theme from "../theme/Theme";
import { CATEGORIES, RECIPES } from "../data/categoryLdb";
import RecipeItem from './RecipeItem' ;

const CategoryRecipe = (props) => {
  const renderItem = itemData => {
    return (
   
      <RecipeItem 
        title={itemData.item.title} 
        duration = {itemData.item.duration} 
        complexity ={itemData.item.complexity} 
        affordability ={itemData.item.affordability} 
        image= {itemData.item.imageUrl} 
        onRecipeSelect={() => { props.navigation.navigate({routeName:'RecipeDetail', 
        params:{
          recipeId: itemData.item.id
        }
      });}}
        />
      
 
    )
  } 

  const categoryId = props.navigation.getParam('categoryId');
  const allRecipes = RECIPES.filter(meals => meals.categoryIds.indexOf(categoryId)>=0,);
  

  return (
   
      <View style={styles.mainView}>
        <FlatList
          data={allRecipes}
          renderItem={renderItem} 
          keyExtractor={(item,index) => item.id }
          style={styles.listContainer}/>
      </View>
  );
};

CategoryRecipe.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId ) 
  return {
    headerTitle : selectedCategory.title,
    headerStyle: {
      backgroundColor: Theme.primary,
    },
  }; 
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  mainView: {
    width: "100%",
   
  },

});
export default CategoryRecipe;