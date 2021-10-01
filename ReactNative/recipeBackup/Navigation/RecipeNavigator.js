import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import CategoryScreen from '../Screens/CategoryScreen';
import CategoryRecipe from '../Screens/CategoryRecipe';
import RecipeDetail from '../Screens/RecipeDetail';
import Theme from '../theme/Theme';

const RecipeNavigator = createStackNavigator({
    CategoryScreen: CategoryScreen,
    CategoryRecipe: CategoryRecipe,
    RecipeDetail: RecipeDetail
},{ 
    // mode:'card',
    // initialRouteName:'RecipeDetail',
    defaultNavigationOptions:{
    headerStyle: {
        backgroundColor: Theme.primary, 
    }
} 
})

export default createAppContainer(RecipeNavigator);