import React from 'react';
import Home from './components/Home'
import List from './components/List';
import HomeScene from './components/HomeScene';
import DetailsScene from "./components/DetailsScene";
import SettingsScene from "./components/SettingsScene";
import SettingsDetailsScene from "./components/SettingsDetailsScene";
import TabIcon from './components/Tabicon';
import {AppLoading} from 'expo' ;
import {View,Text,Image,Dimensions}from 'react-native';
import {Router,Stack,Scene,Tabs} from 'react-native-router-flux';

const HomeNavBar=(props)=>{
    return(
        <View style={{
            height:80,
            backgroundColor:'transparent',
            justifyContent:'center',
            alignItems:'center',
            paddingTop:20
        }}>
            <Image 
                source={require('./assets/bg.jpg')} 
                style={{
                    height:80,
                    width:Dimensions.get('window').width,
                    position:'absolute'}}
                />
            <Text style={{color:'#000',fontWeight:'bold'}}>
                首页
            </Text>
        </View>
    )
}

const RightButton=props=>{
    return(
        <View>
            <Text onPress={()=>{props._increase()}}>右边按钮</Text>
        </View>
    )
}

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
            <Router>
                <Tabs key="tabbar" activeBackgroundColor='#e5e5e5' inactiveBackgroundColor="white">
                    <Stack key="root" navigationBarStyle={{ backgroundColor: 'pink' }} title="首页" icon={TabIcon} iconName="home">
                        <Scene 
                            key="home" 
                            component={HomeScene} 
                            title="首页" initial 
                            navBar={HomeNavBar}
                        />
                        <Scene 
                            key="details" 
                            component={DetailsScene} 
                            title="详情页" 
                            back={true}
                            backTitle="返回标题"
                            backButtonTintColor='red'
                            backButtonTextStyle={{fontSize:30,color:'yellow'}}
                            navBarButtonColor="blue"
                            titleStyle={{color:'orange',fontSize:40}}
                            navigationBarStyle={{backgroundColor:'gray'}}
                            renderRightButton={RightButton}
                        />
                    </Stack>
                    <Stack key="settings" title="设置页" icon={TabIcon} iconName="cog">
                        <Scene 
                            key="settings" 
                            component={SettingsScene} 
                            title="设置页" initial 
                        />
                        <Scene 
                            key="settingsdetails" 
                            component={SettingsDetailsScene} 
                            title="设置详情页" 
                        />
                    </Stack>
                    <Stack key="product" title="产品页" icon={TabIcon} iconName="cog">
                        <Scene
                        key="product"
                        component={List}
                        title="产品列表" initial
                    />
                    </Stack>
                </Tabs>
            </Router>
        );
    }
}