import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import Move from '../components/Move'

const MoveScreen = (props) =>{
    const state = props.navigation.state.params;
    
    const renderButton = function(index){
        
        return (<Move stepNo = {index} onCall = {() => {props.navigation.navigate('Game',{stepNo:index})}}/>);
    }
    
    const generateButtons= function()
    {
        const arrayButton = [];
        const numberOfButtons = state.historyLength;
        let i;
        for(i=0;i<numberOfButtons;i++)
            {
                arrayButton.push(renderButton(i));
            }
        return arrayButton; 
    }
    return (
        <View>
{  generateButtons() }</View>
    );
};


const styles = StyleSheet.create({
    
});

export default MoveScreen;

