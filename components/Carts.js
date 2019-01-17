import React, { Component } from 'react';
import { List, ListItem, Thumbnail,Left, Body, Right,CheckBox,Input} from 'native-base';
import { Stepper} from '@ant-design/react-native';
import { StyleSheet,Dimensions,TextInput,Image,PixelRatio,ScrollView,FlatList,ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Title } from 'native-base';
import { minus, changeCheck, checkAll, remove, checkAllDelete,clear} from '../actions/index';
import {  WhiteSpace } from "@ant-design/react-native";
import { Dialog, DialogContent } from "react-native-popup-dialog";
import  Icons from 'react-native-vector-icons/AntDesign';
import { Actions } from "react-native-router-flux";





const mapStateToProps = (state) => {
    console.log(state.carts,'************************************');
    return {
        carts:state.carts,
    }
}

class Carts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            id:0,
            dis:'flex',
            diss:'none',
        }
    }


    //减号
    minus(currItem){
        var num = 1;
        if (currItem.quantity<=1){
            num=1;
        }else{
            num=currItem.quantity-1;
        }
        this.props.minus(currItem._id, num);
    }

    //加号
    plus(currItem){
        var num = 1;
        if (currItem.quantity>=99){
            num=99;
        }else{
            num=currItem.quantity+1;
        }
        this.props.minus(currItem._id, num);
    }

    /* ******************商品选中按钮******************** */
    changeCheck(currItem) {
        this.props.changeCheck(currItem);
    }

    /* *********************全选按钮********************** */
    checkAll(allflag){
        this.props.checkAll(allflag);
    }

    /* *******************删除按钮********************* */
    removeOne(currId) {
        this.setState({
            visible:true,
            id: currId
        })
    }

    /**********************确认删除********************* */
    sure(id) {
        if(typeof id=='object'){
            this.props.checkAllDelete(true);

        }else if(typeof id=='string'){
            this.props.remove(id);
        }
        
        this.setState({ visible: false });
    }

    /**********************删除全部********************* */
    deleteAll(allthings) {
        this.setState({
            visible: true,
            id: allthings
        })
    }

    /* *******************结算************************** */
    Clearing=(all)=>{
        all.forEach((element)=>{
            if(element.choose==true){
                Actions.clear();
                this.props.clear(all);
            }
        })        
    }


    edit(){
        if(this.state.dis=='flex'){
            this.setState({
                dis:'none',
                diss:'flex'
            })
        }else if(this.state.dis=='none'){
            this.setState({
                dis:'flex',
                diss:'none'
            })
        }
    }

    showList() {
        const { carts } = this.props;
        var jsx = [];
        if (carts.length > 0) {
            for (let i = 0; i < carts.length; i++) {
                jsx.push(<View key={i}>
                    <WhiteSpace size="sm" style={{backgroundColor:'#F5F5F5'}}/>
                    <SwipeRow
                        rightOpenValue={-75}
                        body={
                            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "white", borderRadius: 10, marginHorizontal: 10, paddingVertical: 10, marginTop: 10 }}>
                                <CheckBox style={{ marginRight: 10, borderRadius: 50, marginTop: 30 }} onPress={() => this.changeCheck(carts[i])} checked={carts[i].choose} />
                                <Image style={{ width: 80, height: 80, marginRight: 10, borderRadius: 8 }} source={{ uri: carts[i].img }} />
                                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: 200, paddingRight: 5 }}>
                                    <Text numberOfLines={2} style={{ lineHeight: 20, fontSize: 14 }} >{carts[i].content}</Text>
                                    <Text numberOfLines={1} style={{ lineHeight: 20, fontSize: 10, color: '#A9A9A9' }}>{carts[i].title}</Text>
                                    <View style={styles.flexbox}>
                                        <Text style={{ color: '#fe463e', fontSize: 13, fontWeight: '500' }}>￥{carts[i].price}</Text>
                                        <View style={styles.flexbox}>
                                            <Text style={styles.inputbutton} onPress={() => {this.minus(carts[i])}} > — </Text>

                                            <TextInput style={{ width: 20, height: 20, textAlign: 'center', lineHeight: 20 }}
                                                value={carts[i].quantity.toString()}
                                                onChange={(text) => { }}
                                                keyboardType='numeric' />
                                            <Text></Text>
                                            <Text style={styles.inputbutton} onPress={() => {this.plus(carts[i]) }}>＋</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        }
                        right={
                            <Button danger onPress={() => this.removeOne(carts[i]._id)}>
                                <Icon active name="trash" />
                            </Button>
                        }
                    />
                    </View>
                )
            }
        }else{
            jsx.push(<Image key={-1} source={{ uri: "http://bpic.588ku.com/element_water_img/18/09/20/02020f3b0fa2b36701d5d9439e674f11.jpg" }} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height*0.795}} />);
        }
        return jsx;
    }

    render() {

        var money = 0;
        var flag = 0;   //选中的项数
        var allflag = false;   //全选按钮的状态

        this.props.carts.map((element, index) => {
            if (element.choose) {
                money += element.price * element.quantity;
                flag += 1;
            }
        });
        if (flag !== this.props.carts.length) {
            allflag = false;
        } else {
            allflag = true;
        }

        return (
            <Container>
                <View style={{ width: Dimensions.get('window').width, height: 80, backgroundColor: 'white',display: 'flex', flexDirection: 'row',justifyContent:'center',borderBottomColor:'#cdcdcd',borderBottomWidth:0.5}}>
                        <View>
                            <Text style={{fontSize:16,marginTop:40,fontWeight:'400'}} onPress={()=>{Actions.root()}}>购物车</Text>
                        </View>
                        <View icon style={{display: 'flex', flexDirection: 'row',position:'absolute',right:20,top:45}}>
                            <Text style={{fontSize:14}} onPress={()=>{this.edit()}}>编辑</Text>
                            <Icons  active name="customerservice" style={{ fontSize: 16, color: 'black',marginLeft:10,marginTop:2}}/>
                        </View>
                </View>
                <ScrollView>
                    <Content scrollEnabled={false}>
                        {this.showList()}
                    </Content></ScrollView>
                <View style={{display: 'flex', flexDirection: 'row',justifyContent:'space-between',borderTopColor:'#ccc',borderTopWidth:0.5}}>
                        <View style={{display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                            <CheckBox style={{ marginLeft:10,marginRight: 20, borderRadius: 50 }} onPress={()=>this.checkAll(allflag)} checked={allflag} />
                            <Text style={{fontSize:14,color:'#121212'}}>全选</Text>
                        </View>
                        <View  style={{display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{display: 'flex', flexDirection: 'row',marginRight:2}}>
                                <Text style={{marginRight:10,fontSize:14}}>合计:</Text>
                                <View style={{display: 'flex', flexDirection: 'column'}}>
                                    <Text style={{fontSize:14}}>￥{money}</Text>
                                    <Text style={{fontSize:10,color:'#141414',marginTop:2,marginLeft:-10}}>   不含运费</Text>
                                </View>
                            </View>
                        <Button style={{ width: 100, height: 50, backgroundColor: '#3399ff', lineHeight: 50, fontSize: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 5, display: this.state.dis }} onPress={() => { this.Clearing(this.props.carts) }}><Text style={{color:'white',fontSize:11}}>去结算</Text></Button>
                        <View style={{  width: 100, height: 50, backgroundColor: 'white', lineHeight: 50, fontSize: 20,flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 5,display:this.state.diss}}><Text style={{color:'#EE0000',fontSize:11,borderWidth:0.3,borderColor:'#ee0000',borderRadius:10,padding:3,display:this.state.diss}} onPress={()=>{this.deleteAll(this.props.carts)}}> 删　除 </Text></View>
                        </View>
                    </View>
                <Dialog
                    onDismiss={() => { if (this.state.sure) {} }}
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                >
                    <DialogContent style={{ width: 230, height: 110, padding: 0 }}>
                        <Text style={{ textAlign: 'center', fontSize: 16, height: 60, lineHeight: 60, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>你确定要删除宝贝吗</Text>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.text} onPress={() => { this.sure(this.state.id) }}
                            >确定</Text>
                            <Text style={styles.text} onPress={() => { this.setState({ visible: false}) }}>取消</Text>
                        </View>
                    </DialogContent>
                </Dialog>
            </Container>
        )
    }
}


const styles = StyleSheet.create({

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
    pop: {
        width: 100, height: 50, backgroundColor: '#3399ff', lineHeight: 50,fontSize:20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10
    }
});



export default connect(mapStateToProps, { minus, changeCheck, checkAll, remove, checkAllDelete, clear })(Carts)





   