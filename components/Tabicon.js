import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon =props=>{
    return (
        <Icon
            name={props.iconName || 'circle'}
            size={18}
            style={{color:props.focused ? '#1E90FF' : '#C0C0C0'}}
        />
    )
}

export default TabIcon;