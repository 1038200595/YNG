import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, View, Image, Dimensions, StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

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
                <TouchableOpacity onPress={() => {Actions.details(j)}} key={j} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 10, lineHeight: 14 }} numberOfLines={1}>{j.title}</Text>
                        <Text style={{ fontSize: 8 }}>￥{j.price}</Text>
                        <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab' }} >{j.oldprice}</Text>
                    </View>
                    <Image source={{ uri:j.img }} style={{ width: 60, height: 60, marginTop: -10 }} />
                </TouchableOpacity>
            )
        }
        return jsx;   
    }

    render() {
        if(this.props.lists<1){
            return null;
        }
        const list = this.props.lists;
        return (<Container style={{height:240}}>
                <Image source={require('../assets/goods.png')} style={{ width: Dimensions.get('window').width, height: 40, resizeMode: 'stretch' }} />
                <Grid>
                    <Col style={{ backgroundColor: 'white', height: 200, width: Dimensions.get('window').width / 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <TouchableOpacity onPress={() => {
                            Actions.details(list[4]);
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Text numberOfLines={1}>{list[4].title}</Text>
                                <Text>￥{list[4].price}</Text>
                                <Text style={{ fontSize: 10, textDecorationLine: 'line-through', color: '#ababab', marginTop: 2 }} >{list[4].oldprice}</Text>
                            </View>
                            <Image source={{ uri: list[4].img }} style={{ width: 120, height: 120 }} />
                        </TouchableOpacity>
                    </Col>
                    <Col style={{ height: 200, borderLeftColor: '#efefef', borderRightColor: '#efefef', borderLeftWidth: 0.3, borderRightWidth: 0.3 }}>
                        <Row style={[styles.commonViewBorder]}>
                            {this.showGoodThings(list[5])}
                        </Row>
                        <Row style={[styles.commonView]}>
                            {this.showGoodThings(list[6])}
                        </Row>
                    </Col>
                    <Col style={{ height: 200 }}>
                        <Row style={[styles.commonViewBorder]}>
                        {this.showGoodThings(list[7])}
                        </Row>
                        <Row style={[styles.commonView]}>
                        {this.showGoodThings(list[8])}
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





const CounterContainer = connect(mapStateToProps)(GoodThings);
export default CounterContainer;