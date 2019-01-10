import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class DetailsScene extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increase=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentWillMount(){
        this.props.navigation.setParams({   //如果要在导航中使用，需要将方法设置成属性参数
            _increase:this.increase
        })
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <Text>DetailsScene</Text>
                <Text>id:{this.props.id}</Text>
                <Text>otherParams:{this.props.otherParams}</Text>
                <Text>Count:{this.state.count}</Text>
                <Button onPress={()=>{
                    this.increase()
                }} title="counter++"/>

                <Button onPress={() => {
                    Actions.pop();
                }} title="返回" />
            </View>
        )
    }
}