import React,{Component} from 'react';
import {View,Text,Button}from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class HomeScene extends Component{
    render(){
        return(
            <View>
                <Text>HomeScene</Text>

                <Button title="跳转至详情页" onPress={()=>{
                    Actions.details({id:123,otherParams:'other params'});
                }}/>
            </View>
        )
    }
}