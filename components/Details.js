import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, ActivityIndicator, ScrollView } from 'react-native';
import { getAllFlatListData, getPageFlatListData } from '../services/FlatListDataService';
import { Card, CardItem, Thumbnail, Button, Left, Body, Icon } from 'native-base';
import { Carousel, WhiteSpace, List } from "@ant-design/react-native";

const Item = List.Item;



export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    addCart(){
        console.log(111)
    }

    
    render() {
        return <ScrollView style={styles.container}>
            <View style={{ marginTop: 30 }}>
              <View>
                <Carousel style={styles.wrapper} selectedIndex={2} autoplay infinite dotStyle={{ width: 5, height: 5 }}>
                  <Image style={[styles.containerHorizontal]} source={{ uri: "https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg" }} />
                  <Image style={[styles.containerHorizontal]} source={{ uri: "https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg" }} />
                  <Image style={[styles.containerHorizontal]} source={{ uri: "https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg" }} />
                </Carousel>
              </View>
            </View>
            <View style={{ padding: 10, backgroundColor: '#fefefe', borderTopColor: '#ccc', borderTopWidth: 2 }}>
                <Text style={{ color: '#00BFFF', fontSize: 24 }}>￥3839.00</Text>
                <Text style={{ color: '#080808', fontSize: 14 }}>华为 HUAWEI Mate 20 麒麟980AI智能芯片超微距影像超大广角徕卡三摄全网通4G手机</Text>
            </View>
            <WhiteSpace size="md" />
            <View>
                <List>
                    <Item extra={<Image source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }} style={{ width: 20, height: 20}} />}>
                        <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center' }}>
                            <Text style={{color:'#ccc',fontSize:11}}>已选规格</Text>
                            <Text style={{color:'#080808',fontSize:13,marginLeft:8}}>6GB+64GB,翡翠冷,全网通双4G,1件</Text>
                        </View>
                    </Item>
                </List>
            </View>
            <WhiteSpace size="md" />
            <View>
                <List>
                    <Item>
                        <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center' }}>
                            <Text style={{color:'#ccc',fontSize:11}}>运　　费</Text>
                            <Text style={{color:'#080808',fontSize:13,marginLeft:8}}>包邮</Text>
                        </View>
                    </Item>
                    <Item>
                        <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center' }}>
                            <Text style={{color:'#ccc',fontSize:11}}>服　　务</Text>
                            <Text style={{color:'#080808',fontSize:13,marginLeft:8}}>所有商品均由'由你购平台'提供</Text>
                        </View>
                    </Item>
                </List>
            </View>
            <View>
                <List>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <View style={[styles.btn]}>
                                <Button icon style={{display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'white'}}>
                                    <Icon name='mic' style={{fontSize:10,color:'black'}}/>
                                    <Text style={{fontSize:10,marginTop:-20}}>客服</Text>
                                </Button>
                                <Button icon style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Icon name='star' style={{ fontSize: 10, color: 'black' }} />
                                    <Text style={{ fontSize: 10, marginTop: -20 }}>收藏</Text>
                                </Button>
                                <Button icon style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Icon name='cart' style={{ fontSize: 10, color: 'black' }} />
                                    <Text style={{ fontSize: 10, marginTop: -20 }}>购物车</Text>
                                </Button>
                            </View>
                            <Button style={{ backgroundColor: '#FFA500', width: Dimensions.get('window').width/4, height: 40, fontSize: 20, lineHeight: 40,flex:1,justifyContent: 'center',alignItems:'center'}} onPress={()=>this.addCart()}>
                                <Text style={{color:'white'}}>加入购物车</Text>
                            </Button>
                            <Button style={{ backgroundColor: '#3399ff', width: Dimensions.get('window').width/4, height: 40, fontSize: 20, lineHeight: 40,flex:1,justifyContent: 'center',alignItems:'center'}}>
                                <Text style={{color:'white'}}>立即购买</Text>
                            </Button>
                        </View>
                </List>
            </View>
          </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5'
    },
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
        resizeMode: 'stretch'
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
    btn:{
        width:Dimensions.get('window').width/2,
        backgroundColor: 'white', height:40, fontSize: 12, lineHeight: 40,flex:1, justifyContent: 'center', alignItems: 'center',
        display: 'flex', flexDirection: 'row',marginRight:5
    },
    txts:{
        fontSize:12
    },
    btns:{
        width: Dimensions.get('window').width / 6
    }
});



