import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, ActivityIndicator } from 'react-native';
import { getAllFlatListData, getPageFlatListData } from '../services/FlatListDataService';

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flatListDataFromServer: [],
            page: 1,
            isLoadMore: false,  //判断否还有数据需要请求，用于控制页码增加
            loading: false   //判断否还有数据需要请求，用于控制加载
        }
    }

    //数据请求获取列表
    makeRemoteRequest = () => {
        this.setState({
            isLoadMore: true,
            loading: true
        })

        //延时请求
        setTimeout(() => {
            getPageFlatListData({ page: this.state.page }).then(data => {   //异步函数
                this.setState({
                    flatListDataFromServer: [...this.state.flatListDataFromServer, ...data],
                    isLoadMore: false,
                    loading: false
                })
            })
        }, 2000);
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    //下拉加载this.state.apge+1
    loadMoreHandler = () => {
        if (!this.state.isLoadMore) {
            this.setState(prevState => {
                return {
                    page: prevState.page + 1
                }
            }, () => {
                this.makeRemoteRequest();
            })
        }
    }

    //key
    _keyExtractor = (item, index) => item.id.toString();

    //头部组件
    renderHeader = () => {
        return (
            <View>
                <Text>这里是头部组件</Text>
            </View>
        )
    }

    // 底部组件--加载器
    renderFooter = () => {
        if (this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: '#e5e5e5'
                }}>
                <ActivityIndicator animating={true} size="small" color="#00ff00" />
            </View>
        )
    }



    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.flatListDataFromServer}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.loadMoreHandler}
                    onEndReachedThreshold={0.1}
                    renderItem={({ item, index }) =>
                        <View>
                            <Text>{index}</Text>
                            <Text>id:{item.id}</Text>
                            <Text style={{ fontSize: 40 }}>{item.name}</Text>
                            <Image source={{ uri: item.img }} style={{ width: Dimensions.get('window').width, height: 200 }} />
                            <Text numberOfLines={2}>{item.text}</Text>
                            <Text>{item.time}</Text>
                            <Text>{item.stars.number}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
