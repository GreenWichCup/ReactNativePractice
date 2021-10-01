import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { CATEGORIES,RECIPES } from "../data/categoryLdb";
import Theme from "../theme/Theme";

const CategoryScreen = (props) => {
  const renderItem = (itemData) => {
    return ( 
      <TouchableOpacity style= {styles.gridItem}
      onPress={() => { props.navigation.navigate({routeName:'CategoryRecipe', 
      params:{ 
      categoryId: itemData.item.id,
      } });}
       } >
    <View style={{...styles.container,...{backgroundColor:itemData.item.color}}} >
       <Text style={styles.textStyle} >{itemData.item.title}</Text>
     </View>
     </TouchableOpacity>)}

  return (
    <FlatList
    data= {CATEGORIES}
    renderItem= {renderItem}
    keyExtractor={(item,index) => item.id }
    numColumns = {2} />
  );
};

CategoryScreen.navigationOptions = {
  headerTitle : 'Recipe Category',
  headerStyle: {
    backgroundColor: Platform.OS==='ios' ? Theme.primary: Theme.secondary,
  }
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin:"2%",
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius:10,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset:{width:0, height:3},
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },

  textStyle: {
    fontSize:22,
  }

});
export default CategoryScreen;
