import React from 'react';
import List from './components/List';
import Home from "./components/Home";
import TabIcon from './components/Tabicon';
import Cart from './components/Cart';
import My from './components/My';
import {AppLoading} from 'expo' ;
import {View,Text,Image,Dimensions}from 'react-native';
import {Router,Stack,Scene,Tabs} from 'react-native-router-flux';
import { Provider } from 'react-redux'
import store from './store'

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
            <Provider store={store}>
                <Router>
                    <Tabs key="tabbar" activeTintColor="#1E90FF" inactiveTintColor="#C0C0C0"   >
                        <Stack key="root" title="商城" icon={TabIcon} iconName="home">
                            <Scene
                                key="home"
                                component={Home}
                                initial
                                hideNavBar={true}
                            />
                        </Stack>
                        <Stack key="member" title="会员" icon={TabIcon} iconName="anchor">
                            <Scene
                                key="member"
                                component={List}
                                initial
                                hideNavBar={true}
                            />
                        </Stack>
                        <Stack key="cart" title="购物车" icon={TabIcon} iconName="shopping-cart">
                            <Scene
                                key="cart"
                                component={Cart}
                                initial
                                hideNavBar={true}
                            />
                        </Stack>
                        <Stack key="my" title="我的" icon={TabIcon} iconName="user">
                            <Scene
                                key="my"
                                component={My}
                                initial
                                hideNavBar={true}
                            />
                        </Stack>
                    </Tabs>
                </Router>
            </Provider>
        );
    }
}