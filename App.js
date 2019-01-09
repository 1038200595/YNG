import React from 'react';
import Home from './components/Home'
import List from './components/List';
import {AppLoading} from 'expo' ;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading:true  //加载字体的开关
        }
    }

    //异步加载字体
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('./Fonts/Roboto.ttf'),
            'Roboto_medium': require('./Fonts/Roboto_medium.ttf'),
        });
        this.setState({
            loading:false
        })
    }

    render() {
        if(this.state.loading){
            return(
                <AppLoading/>
            )
        }
        return (
            <List/>
        );
    }
}