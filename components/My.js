import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {Button,Modal,WhiteSpace,WingBlank,Provider,} from '@ant-design/react-native';
export class My extends React.Component {
  constructor(props) {
    super(props);

    this.onClose2 = () => {
      this.setState({
        visible2: false,
      });
    };
    
    this.state = {
      visible2: false,
    };
  }
  render() {
    return (
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
    );
  }
}
export default () => (
  <Provider>
    <My />
  </Provider>
);