import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail,Left, Body, Right, Button,CheckBox,Input} from 'native-base';
import { Stepper} from '@ant-design/react-native';
import { StyleSheet, Text, View,Dimensions,TextInput,Image,PixelRatio,ScrollView,FlatList,ActivityIndicator} from 'react-native';


export default class Cart extends React.Component {
    render() {
        
        return (
            <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "white", borderRadius: 10, marginHorizontal: 10, paddingVertical: 10, marginTop: 10 }}>
                <CheckBox style={{ marginRight: 20, borderRadius: 50,marginTop:30 }} onPress={() => {  }} checked={true} />
                <Image style={{ width: 80, height: 80, marginRight: 20, borderRadius: 8 }} source={{uri:'https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg'}} />
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: 150, paddingRight: 5 }}>
                    <Text numberOfLines={2} style={{ lineHeight: 20 }} >标题</Text>
                    <View style={styles.flexbox}>
                        <Text style={{ color: '#fe463e', fontSize: 14, fontWeight: '500' }}>￥价格</Text>
                        <View style={styles.flexbox}>
                            <Text style={styles.inputbutton} onPress={() => {  }} > — </Text>

                            <TextInput style={{ width: 20, height: 20, textAlign: 'center', lineHeight: 20 }}
                                value={'5'}
                                onChange={(text) => {  }}
                                keyboardType='numeric' />
                            <Text></Text>
                            <Text style={styles.inputbutton} onPress={() => {  }}>＋</Text>
                        </View>
                    </View>
                </View>
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    flexboxmoren: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexbox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputbutton: {
        height: 20, width: 20, borderRadius: 50, backgroundColor: 'red', lineHeight: 20, backgroundColor: '#f5f5f5', color: '#8d8d8d',
        fontSize: 18, textAlign: 'center'
    },
    bottomflexbox: {

        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 130,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center', height: 40, lineHeight: 40, width: 80
    }
});