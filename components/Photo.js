import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Image
} from 'react-native'
import { Camera, Permissions } from 'expo';


//定义Camera的两个属性
// interface State{
//     hasCameraPermission?:any,        
//     type?:any,
//     isShowCamera: Boolean,
//     uri:string
// }

export default class Photo extends React.Component {
    //定义一个camera来拿到Camera节点

    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,              //照相机权限
            type: Camera.Constants.Type.back,       //照相机类型
            isShowCamera: true,                    //是否开启照相机
            uri: ''
        }
    }
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    //把官网里面的render粘过来
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>没有权限打开照相机</Text>;
        } else {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    {
                        !this.state.isShowCamera ?
                            <View>
                                <View>
                                    <Image source={{ uri: this.state.uri }} style={{ width: 200, height: 200 }}></Image>
                                </View>

                            </View> :
                            <Camera
                                style={{ flex: 1 }}
                                type={this.state.type}
                                ref={ref => { this.camera = ref; }}     //参照官网的Methods
                            >

                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'transparent',
                                        flexDirection: 'row',
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => {
                                            this.setState({
                                                type: this.state.type === Camera.Constants.Type.back
                                                    ? Camera.Constants.Type.front
                                                    : Camera.Constants.Type.back,
                                            });
                                        }}>
                                        <Text
                                            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                            {' '}Flip{' '}
                                        </Text>
                                    </TouchableOpacity>
                                    {/* 复制一个开始拍照的点击按钮 */}
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,                    //flex为0.1改成flex为1
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                        //参照官网的Methods
                                        onPress={async () => {
                                            if (this.camera) {
                                                let photo = await this.camera.takePictureAsync().then(this.onPictureSaved)
                                                console.log(photo)
                                                this.setState({
                                                    isShowCamera: false,
                                                    uri: photo.uri
                                                })
                                            }
                                        }}>
                                        <Text
                                            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                            {' '}开始拍照{' '}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </Camera>
                    }
                </View>
            );
        }
    }
}
