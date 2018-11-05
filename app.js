import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View,TextInput,Button,TouchableOpacity,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  constructor(props){
      super(props);
      this.state = { val1: '0', val2: '0',result: '' };
  }

  onPressButton=()=>{

    const{val1, val2} = this.state;
    this.setState({
        result: val1+val2
    })

        const{result} = this.state;
        Alert.alert("value "+ result);
   }
  render() {
    var f1 = this.state.val1;
    var f2 = this.state.val2 ;



    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Enter First Number : </Text>
          <TextInput keyboardType ='numeric'
          defaultValue={this.state.val1}
           onChangeText={(text) => this.setState({val1: parseInt(text)})}
           style={[ {fontSize: 30} ]}
           />
          <Text style={styles.welcome}>Enter Second Number :</Text>
          <TextInput keyboardType ='numeric'
          defaultValue={this.state.val2}
           onChangeText={(text) => this.setState({val2: parseInt(text)})}
           style={[ {fontSize: 30} ]}
           />


         <View style={[{  width: "90%", margin: 20 }]}>
          <Button
         onPress={this.onPressButton}
         title="SUM"
         color="#841584"

          />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: 'yellow',
  },
  btn:{
    color:'red',
    },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
