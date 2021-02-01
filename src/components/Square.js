import React,{ useState } from 'react';
import {Text, View, StyleSheet,TouchableOpacity } from 'react-native';


const Square = function (props){
   // const[value,setValue] = useState('');
    //prop = value , setvalue()
    //console.log(props);
    return (
       <TouchableOpacity  
            style = {(props.colorTag != null) ? styles.buttonStyleColor :styles.buttonStyleNormal}
            onPress = {()=> props.setValue()}
        ><Text style={styles.text}>{props.value}</Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
        buttonStyleNormal:{
            width:100,
            height:100,
            borderColor:'white',
            borderWidth:1,
            flexDirection:'row',
            justifyContent:'center',
            
        },
    buttonStyleColor:{
            width:100,
            height:100,
            borderColor:'black',
            borderWidth:1,
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor: '#235191'
            
},
    text:{
        color:'white',
        fontSize: 50,
    }
        });
        
export default Square;