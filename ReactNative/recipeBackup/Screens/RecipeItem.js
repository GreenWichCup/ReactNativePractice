import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const RecipeItem = (props) => {

  return (
      <View style={styles.viewContainer} >
          <TouchableOpacity onPress={props.onRecipeSelect }>
           <View>
               <View  style={{...styles.recipeRow,...styles.recipeTile}}>
                   <ImageBackground source={{uri: props.image}} style={styles.recipeImage}>
                    <Text numberOfLines={2} style={styles.titleStyle} >
                       {props.title}
                    </Text>
                   </ImageBackground>
               </View>
               <View  style={{...styles.recipeRow,...styles.recipeDetail}}>
                    <Text>
                       {props.duration}
                    </Text>
                    <Text>
                       {props.complexity.toUpperCase()}
                    </Text>
                     <Text>
                       {props.affordability.toUpperCase()}
                    </Text>
               </View>
           </View> 
           </TouchableOpacity>  
      </View>
  );
};

const styles = StyleSheet.create({
  recipeImage: {
    width: "100%",
    height: "100%",
  },

  viewContainer: {
    width: "100%",
    height: 200,
    backgroundColor:'#f5f5f5',
    borderRadius:10,
    overflow: 'hidden'
  },
  recipeRow: {
      flexDirection: 'row'
  },
  recipeTile:{
    height: "85%",
  },
  recipeDetail:{
    height: "15%",
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignItems:"center"
  },
  titleStyle: {
    fontSize:22,
    color:"white",
    backgroundColor:'rgba(0,0,0,0.7)',
    textAlign:"center"  }

});
export default RecipeItem;