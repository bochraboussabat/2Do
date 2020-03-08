import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, TouchableHighlight } from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class Note extends React.Component {

    render(){
  return (
      <View key={this.props.keyval1} style={styles.note}>
          <CheckBox  title='' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={true} containerStyle={{backgroundColor:'transparent'}} /> 
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>
          <TouchableHighlight style={styles.noteDelete} onLongPress={this.props.deleteMethod}>
              <Text style={styles.noteDeleteText}>D</Text>
          </TouchableHighlight>

      </View>
    
  );
}
}


const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63',
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10,
    },
    noteDeleteText:{
        color:'white',
    }

});