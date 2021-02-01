import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const Move=(props)=>{
    
  return(
      <Button 
        title = {`move to ${props.stepNo}`}
        onPress = {() => {props.onCall(props.stepNo)}}
      />
  ); 
    
};

const styles = StyleSheet.create({

});

export default Move;