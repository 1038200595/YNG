import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions,ScrollView } from 'react-native';
import { Carousel, Grid, WhiteSpace } from '@ant-design/react-native';
import GoodThings from "./GoodThings";
import { connect } from 'react-redux';
import { fetchList } from '../actions';
import HomeLists from "./HomeLists";

import { Button, Modal, WingBlank, Provider, } from '@ant-design/react-native';

const mapStateToProps = (state) => {
  return {
     lists:state.goods
  }
}


//十个Icon分类
const data=[
  {
    icon:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14001/24/4460/14657/5c31de6bE7316edd2/23145cae17bd9cc1.png.webp',text:'全部分类'
  },{
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png.webp', text: '每周新品' 
  },{
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp', text: '手机通讯'
  },{
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp', text: '数码影音' 
  },{
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp', text:'电脑平板'
  },{
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp', text:'家用电器'
  },{
    icon:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',text:'腕表配饰'
  },{
    icon:'https://m.360buyimg.com/mobilecms/jfs/t1/17916/24/4218/171864/5c2f1a3fE6915e1a4/f7de543c7bd113ea.gif',text:'个护美肤'
  },{
    icon:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',text:'奢品箱包'
  },{
    icon:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp',text:'生活家庭'
  }
]

var k=8;  //轮播广告需要进行遍历数组arr[0]-arr[8]

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            visible2: false,
        }
        this.onClose2 = () => {
            this.setState({
                visible2: false,
            });
        };

    }


    componentDidMount(){
        this.props.fetchList();
    }
    
    advertise(list){
        if(list.length>0){
            const arr = list;
            var views = [];
            for (let i = 1; i <= 3; i++) {
                var imgs = arr[k].img;
                var titles = arr[k].title;
                var prices = arr[k].price;
                var oldprices = arr[k].oldprice;
                k -= 1;
                views.push(<View key={i} style={{ width: Dimensions.get('window').width / 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Image source={{ uri: imgs }} style={{ width: 100, height: 100 }} />
                    <Text style={{ fontSize: 12, color: '#3C3C3C' }} numberOfLines={1}>{titles}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#272727' }} >￥{prices}   </Text>
                        <Text style={{ fontSize: 10, textDecorationLine: 'line-through', color: '#ababab', marginTop: 2 }} >{oldprices}</Text>
                    </View>
                </View>
                )
            }
            return views;
        }
    }

    advertisements(list){
        var jsx = [];
        for (let i = 0; i < 3; i++) {
            jsx.push(
                <View style={[styles.containerHorizontal]} key={i}>
                    <View >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 14 }}>
                            <Text>15 点档</Text>
                            <Text>抢购中:</Text>
                            <Text>04:38:13</Text>
                        </View>
                        <View style={{ width: Dimensions.get('window').width, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            {this.advertise(list)}
                        </View>
                    </View>
                </View>
            )
        }
        return jsx;
    }

    

    render() {
        const list=this.props.lists;
        return (
            <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
                {/* 轮播图 */}
                <View>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        autoplay
                        infinite
                    >
                        <Image style={[styles.containerHorizontal]}
                            source={{ uri: 'http:////m.360buyimg.com/mobilecms/s750x366_jfs/t1/28138/18/4527/302420/5c32f69fEc6341c13/fcea089ac6c91bdf.jpg!cr_1125x549_0_72!q70.jpg.dpg' }}
                        />
                        <Image style={[styles.containerHorizontal]}
                            source={{ uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/10749/22/8472/186042/5c36b304Ece1b0656/aef930ae4b21159e.jpg!cr_1125x549_0_72!q70.jpg.dpg' }}
                        />
                        <Image style={[styles.containerHorizontal]}
                            source={{ uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/28752/2/4494/86961/5c32cb28E19e17f6e/30266e2eb2cd106f.jpg!cr_1125x549_0_72!q70.jpg.dpg' }}
                        />
                        <Image style={[styles.containerHorizontal]}
                            source={{ uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/29458/1/4704/279267/5c35498aEbb9e4023/a89f5649427cfb04.jpg!cr_1125x549_0_72!q70.jpg.dpg' }}
                        />
                        <Image style={[styles.containerHorizontal]}
                            source={{ uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/28137/25/4604/168135/5c33ff56Ed407e22d/3988bacddcabf68b.jpg!cr_1125x549_0_72!q70.jpg.dpg' }}
                        />
                    </Carousel>
                </View>

                {/* 十个icon列表 */}
                <ScrollView style={styles.wrapper}>
                    <View style={[{ padding: 10 }]}>
                        <Grid data={data} hasLine={false} columnNum={5} />
                    </View>
                </ScrollView>
                <WhiteSpace size="sm" />

                {/* 轮播广告 */}
                <View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15, width: Dimensions.get('window').width, backgroundColor: 'white', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 16 }}>由你<Text style={{ color: 'red' }}>秒</Text>杀</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#ccc', marginLeft: 15, fontSize: 12 }}>每日三场，VIP会员专享</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ color: '#696969', fontSize: 14 }}>更多</Text>
                            </View>
                            <View>
                                <Image source={require('../assets/small.png')} style={{ width: 15, height: 15, marginTop: 2, marginLeft: 10 }} />
                            </View>
                        </View>
                    </View>

                    <Carousel style={{ backgroundColor: '#fff', height: 200 }} selectedIndex={2} selectedIndex={2} autoplay infinite autoplay={false} dotStyle={{ width: 5, height: 5 }}>
                        {this.advertisements(list)}
                    </Carousel>
                </View>
                <WhiteSpace size="sm" />

                {/* 好物推荐 */}
                <WhiteSpace size="sm" />
                <GoodThings />

                {/* 精选活动及其他列表 */}
                <WhiteSpace size="sm" />
                <HomeLists />

                <Image source={require('../assets/backTop.png')} style={{ width: 35, height: 35, position: 'absolute', right: 25, bottom: 30 }} />



                <ScrollView style={{ marginTop: 20 }}>
                    <WingBlank>
                        <Button onPress={() => this.setState({ visible2: true })}>
                            popup
                        </Button>
                        <WhiteSpace />
                    </WingBlank>

                    <Modal
                        popup
                        visible={this.state.visible2}
                        animationType="slide-up"
                        onClose={this.onClose2}
                    >
                        <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                            <Text style={{ textAlign: 'center' }}>Content...</Text>
                            <Text style={{ textAlign: 'center' }}>Content...</Text>
                        </View>
                        <Button type="primary" onPress={this.onClose2}>
                            close modal
                        </Button>
                    </Modal>
                </ScrollView>
            </ScrollView>
        );
        
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: Dimensions.get('window').width,
        resizeMode: 'stretch'
    },
    text: {
        color: '#fff',
        fontSize: 36,
    }
});



// export default () => (
//   <Provider>
//     <Home />
//   </Provider>
// );


const CounterContainer = connect(mapStateToProps, {fetchList})(Home);
// export default CounterContainer;




