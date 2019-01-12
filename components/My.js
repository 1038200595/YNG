import React from 'react';
import { Text, View, Image, Dimensions, ScrollView} from 'react-native';


export default class My extends React.Component {
    render() {
        return (
            <Container>
                <Image source={require('../assets/好物推荐.png')} style={{ width: Dimensions.get('window').width, height: 40, resizeMode: 'stretch' }} />
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

                        <Row style={{ backgroundColor: 'white', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5, borderBottomColor: '#efefef', borderBottomWidth: 0.3 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 10, lineHeight: 14 }}>R17|立减￥300</Text>
                                <Text style={{ fontSize: 8 }}>￥2799</Text>
                                <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab' }} >2999</Text>
                            </View>
                            <Image source={{ uri: 'https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/26954/5/4765/128988/5c35bcccE16a1b2f3/e8c60762200795ed.jpg!q70.dpg' }} style={{ width: 60, height: 60, marginTop: -10 }} />
                        </Row>
                        <Row style={{ backgroundColor: 'white', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 10, lineHeight: 14 }}>R17|立减￥300</Text>
                                <Text style={{ fontSize: 8 }}>￥2799</Text>
                                <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab' }} >2999</Text>
                            </View>
                            <Image source={{ uri: 'https://img30.360buyimg.com/mobilecms/s200x200_jfs/t1/21484/29/5007/130776/5c37ff09Eee4a570a/0ba682470f64bbe1.png!q70.webp' }} style={{ width: 60, height: 60, marginTop: -10 }} />
                        </Row>
                    </Col>
                    <Col style={{ height: 200 }}>

                        <Row style={{ backgroundColor: 'white', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5, borderBottomColor: '#efefef', borderBottomWidth: 0.3 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 10, lineHeight: 14 }}>R17|立减￥300</Text>
                                <Text style={{ fontSize: 8 }}>￥2799</Text>
                                <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab' }} >2999</Text>
                            </View>
                            <Image source={{ uri: 'https://img12.360buyimg.com/mobilecms/s200x200_jfs/t1/25588/9/4867/177326/5c36aaf0Ea1e07f0e/e47f0eb788428c4b.jpg!q70.dpg' }} style={{ width: 60, height: 60, marginTop: -10 }} />
                        </Row>
                        <Row style={{ backgroundColor: 'white', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 10, lineHeight: 14 }}>R17|立减￥300</Text>
                                <Text style={{ fontSize: 8 }}>￥2799</Text>
                                <Text style={{ fontSize: 7, textDecorationLine: 'line-through', color: '#ababab' }} >2999</Text>
                            </View>
                            <Image source={{ uri: 'https://img30.360buyimg.com/mobilecms/s180x180_jfs/t1/18523/31/2784/202890/5c218b6dEb3eb40d8/0660754d1989f14b.jpg!q70.dpg' }} style={{ width: 60, height: 60, marginTop: -10 }} />
                        </Row>
                    </Col>
                </Grid>
            </Container>
        );
    }
}



