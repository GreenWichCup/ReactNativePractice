import React from 'react'
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { HeaderButton } from 'react-navigation-header-buttons';
import  Theme from '../theme/Theme';


const CustomHeaderButton = (props) => {

    return (<HeaderButton
    {...props} IconComponent={MaterialIcons} iconSize={23}  color="blue"
    />)

}


  export default CustomHeaderButton;