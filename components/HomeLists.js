import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { WhiteSpace } from "@ant-design/react-native";
import { Actions } from "react-native-router-flux";
var _ = require("lodash");

const mapStateToProps = (state) => {
    return {
        lists: state.goods
    }
}

class HomeLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                require('../assets/active.png'),require('../assets/actives.png'),
                require('../assets/bag.png'),require('../assets/bags.png'),
                require('../assets/beauti.png'),require('../assets/beauties.png'),
                require('../assets/equip.png'),require('../assets/equips.png'),
                require('../assets/live.png'),require('../assets/lives.png'),
                require('../assets/paid.png'),require('../assets/paids.png'),
                require('../assets/phone.png'),require('../assets/phones.png'),
                require('../assets/watch.png'),require('../assets/watchs.png')]
        }
    }

    showHomeLists(list) {
        var jsx = [];
        for (let i = 0; i < 9; i++) {
            var obj = list[_.random(0, list.length-1)];    //每行分类随机加载数据
            jsx.push(
                <Row style={[styles.commonViewBorder]} key={i}>
                    <TouchableOpacity onPress={() => {
                        Actions.details(obj);
                    }}>

                        <Image source={{ uri: obj.img }} style={{ width: 70, height: 70, marginTop: -10 }} />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, lineHeight: 14 }} numberOfLines={1}>{obj.title}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 8, marginRight: 3 }}>￥{obj.price}</Text>
                                <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab', marginTop: 1 }} >{obj.oldprice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Row>
            )
        }
        return jsx;
    }


    showALLLists(list) {
        var jsxs = [];
        for (let i = 0; i < 16; i+=2) {
            jsxs.push(
                <View key={i}>
                    <WhiteSpace size="sm" />
                    <View>
                        <Image source={this.state.data[i]} style={{ width: Dimensions.get('window').width, height: 40, resizeMode: 'stretch' }} />
                        <Image source={this.state.data[i+1]} style={{ width: Dimensions.get('window').width, height: 100, resizeMode: 'stretch' }} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.showHomeLists(list)}
                        </ScrollView>
                    </View>
                </View>
            )
        }
        return jsxs;
    }

    render() {
        if (this.props.lists < 1) {
            return null;
        }
        const list = this.props.lists;
        return this.showALLLists(list);
    }
}


const styles = StyleSheet.create({
    commonViewBorder: {
        backgroundColor: 'white',width:100, height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5
    }
});

const CounterContainer = connect(mapStateToProps)(HomeLists);
export default CounterContainer;
