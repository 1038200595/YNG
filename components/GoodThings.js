import React, { Component } from 'react';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, View, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { fetchList } from "../actions/";

const mapStateToProps = (state) => {
  return {
     lists:state.goods
  }
}


class GoodThings extends Component {

    showGoodThings(j){
        var jsx = [];
        for (let i = 0; i < 1; i++) {
            jsx.push(
                <View key={j}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 10, lineHeight: 14 }} columnNum={1}>R17|立减￥300</Text>
                        <Text style={{ fontSize: 8 }}>￥2799</Text>
                        <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab' }} >2999</Text>
                    </View>
                    <Image source={{ uri: 'https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg' }} style={{ width: 60, height: 60, marginTop: -10 }} />
                </View>
            )
        }
        return jsx;   
    }

    render() {
        if(this.props.lists<1){
            return null;
        }
        const list = this.props.lists;
        console.log(list, '?????????????????????????')
        return (<Container style={{height:240}}>
                <Image source={require('../assets/goods.png')} style={{ width: Dimensions.get('window').width, height: 40, resizeMode: 'stretch' }} />
                <Grid>
                    <Col style={{ backgroundColor: 'white', height: 200, width: Dimensions.get('window').width / 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Text>R17|立减￥300</Text>
                            <Text>￥2799</Text>
                            <Text style={{ fontSize: 10, textDecorationLine: 'line-through', color: '#ababab', marginTop: 2 }} >2999</Text>
                        </View>
                        <Image source={{ uri: 'https://img30.360buyimg.com/mobilecms/s180x180_jfs/t1/18523/31/2784/202890/5c218b6dEb3eb40d8/0660754d1989f14b.jpg!q70.dpg' }} style={{ width: 120, height: 120 }} />
                    </Col>
                    <Col style={{ height: 200, borderLeftColor: '#efefef', borderRightColor: '#efefef', borderLeftWidth: 0.3, borderRightWidth: 0.3 }}>
                        <Row style={[styles.commonViewBorder]}>
                            {this.showGoodThings(1)}
                        </Row>
                        <Row style={[styles.commonView]}>
                            {this.showGoodThings(2)}
                        </Row>
                    </Col>
                    <Col style={{ height: 200 }}>
                        <Row style={[styles.commonViewBorder]}>
                            {this.showGoodThings(3)}
                        </Row>
                        <Row style={[styles.commonView]}>
                            {this.showGoodThings(4)}
                        </Row>
                    </Col>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    commonView:{
        backgroundColor: 'white', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5
    },
    borderOne:{
        borderBottomColor:'#efefef',
        borderBottomWidth:1
    },
    commonViewBorder: {
        backgroundColor: 'white', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5, borderBottomColor: '#efefef', borderBottomWidth: 0.3
    }
});



const CounterContainer = connect(mapStateToProps, { fetchList })(GoodThings);
export default CounterContainer;