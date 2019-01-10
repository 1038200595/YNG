import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon =props=>{
    return (
        <Icon
            name={props.iconName || 'circle'}
            size={18}
            style={{color:props.focused ? 'red' : 'black'}}
        />
    )
}

export default TabIcon;

