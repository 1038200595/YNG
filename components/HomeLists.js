import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { WhiteSpace } from "@ant-design/react-native";
import { Actions } from "react-native-router-flux";

const mapStateToProps = (state) => {
    return {
        lists: state.goods.lists
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


    showHomeLists() {
        var jsx = [];
        for (let i = 0; i < 9; i++) {
            jsx.push(
                <Row style={[styles.commonViewBorder]} key={i}>
                    <TouchableOpacity onPress={()=>{
                        Actions.details();
                    }}>
                        <Image source={{ uri: 'https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg' }} style={{ width: 70, height: 70, marginTop: -10 }} />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, lineHeight: 14 }} columnNum={2}>R17|立减￥300</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 8, marginRight: 3 }}>￥2799</Text>
                                <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab', marginTop: 1 }} >2999</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Row>
            )
        }
        return jsx;
    }


    showALLLists() {
        var jsxs = [];
        for (let i = 0; i < 16; i+=2) {
            jsxs.push(
                <View key={i}>
                    <WhiteSpace size="sm" />
                    <View>
                        <Image source={this.state.data[i]} style={{ width: Dimensions.get('window').width, height: 40, resizeMode: 'stretch' }} />
                        <Image source={this.state.data[i+1]} style={{ width: Dimensions.get('window').width, height: 100, resizeMode: 'stretch' }} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.showHomeLists()}
                        </ScrollView>
                    </View>
                </View>
            )
        }
        return jsxs;
    }

    render() {
        return this.showALLLists()
    }
}


const styles = StyleSheet.create({
    commonViewBorder: {
        backgroundColor: 'white',width:100, height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5
    }
});

const CounterContainer = connect(mapStateToProps)(HomeLists);
export default CounterContainer;
