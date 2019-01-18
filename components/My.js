import React from 'react'
import {View,Text,TouchableOpacity,Button,Image, Dimensions, ImageBackground,TouchableHighlight  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Carousel, Grid, WhiteSpace } from "@ant-design/react-native";
import { Actions } from 'react-native-router-flux';

const data = [
    {
        icon: 'https://img13.360buyimg.com/jdphoto/jfs/t13864/56/1334572250/1269/e3b9acfa/5a1e9ef6Nb19cc444.png!q70.webp', text: '我的预约'
    }, {
        icon: 'https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp', text: '火车中心'
    }, {
        icon: 'https://img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp', text: '应用推荐'
    }, {
        icon: 'https://img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png!q70.webp', text: '通信营业厅'
    }, {
        icon: 'https://img12.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp', text: '用户福利'
    }, {
        icon: 'https://img12.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png!q70.webp', text: '机票预订'
    }, {
        icon: 'https://img12.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png!q70.webp', text: '酒店住宿'
    }, {
        icon: 'https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png', text: '退货/售后'
    }
]


export default class My extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lineFirst:[
                ['代付款','calendar'],
                ['待发货','truck'],
                ['待收货','ambulance'],
                ['售后','umbrella'],
                ['我的订单', 'list-ul', Actions.orderlist]
            ],
            lineSecond:[
                ['额度',0],
                ['金票',300.00],
                ['优惠券',0],
                ['红包',0.00],
                ['我的钱包','suitcase']
            ]
        }
    }

    show(data){
        var arr=[]; 
        data.map((element,index)=>{
            if(element[2]){
                arr.push(<TouchableHighlight onPress={element[2]} key={index}>
                <View style={{ width: Dimensions.get('window').width / 5, alignItems: 'center', lineHeight: 25, backgroundColor: 'white', padding: 10 }}>
                    {this.chooseLine(element[1])}
                    <Text style={{ fontSize: 12, color: '#9D9D9D', height: 20 }}>{element[0]}</Text>
                </View>
                </TouchableHighlight>)
            }else{
                arr.push(<View key={index} style={{ width: Dimensions.get('window').width / 5, alignItems: 'center', lineHeight: 25, backgroundColor: 'white', padding: 10 }}>
                    {this.chooseLine(element[1])}
                    <Text style={{ fontSize: 12, color: '#9D9D9D', height: 20 }}>{element[0]}</Text>
                </View>)
            }
        })
        return arr;
    }

    chooseLine(a){
        if (typeof a=='number'){
            return <Text style={{ fontSize: 16, color: "#9D9D9D", height: 20 }}>{a}</Text>
        }else{
            return <Icon name={a} style={{ fontSize: 12, color: "#9D9D9D", height: 20 }} />;
        }
    }

    turn(ele){
        console.log(ele)
    }

    render() {
       return(
           <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor:'#FaFaFa'}}>
               <ImageBackground style={{ width: Dimensions.get('window').width, height: 180, display: 'flex', flexDirection: 'column' }} source={{ uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547788855931&di=0996708ccec123ae98c638e59554e427&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0920%2F9865f4ed66ec1829fed3fd626689c448.jpg'}}>
                   <View style={{height:80}}>
                       <Icon name={'comment'} style={{ fontSize: 14, color: 'white', position:'absolute',right:20,top:40}}></Icon>
                       <View style={{width:4,height:4,borderRadius:2,backgroundColor:'red',position:'absolute',right:18,top:40}}></View>
                   </View>
                   <View style={{ display: 'flex', flexDirection: 'row'}}>
                       <Image source={require('../assets/header.jpeg')} style={{width:80,height:80,borderRadius:50,borderWidth:3,borderColor:'#aaa'}}/>
                        <Text style={{fontSize:18,color:'#fefefe',marginTop:30,marginLeft:10}}>
                            Daykalif
                        </Text>
                        <Image source={require('../assets/vip.png')} style={{width:25,height:20,marginTop:35,marginLeft:5}}/>
                   </View>
               </ImageBackground>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    {this.show(this.state.lineFirst)}
                </View>
               <WhiteSpace size="sm" />
               <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                   {this.show(this.state.lineSecond)}
               </View>
               <WhiteSpace size="sm" />
               <Grid
                   itemStyle={{ backgroundColor: 'white'}}
                   data={data}
                   columnNum={4}
                   isCarousel
                   onPress={(_el, index) => alert(index)}
               />
           </View>
       )
    }
}











