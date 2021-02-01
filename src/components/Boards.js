import React,{ useReducer, useState }from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Square from './Square';

const Boards = function ({squares,currentTurn,winner,onUpdate}){

const renderSquare=function(i){
    let colorTag = null;
    if(winner != null)
        {
             colorTag = winner.positions.find(element => element===i);
            console.log(colorTag);
        }
    return (
    <Square  value={squares[i]} setValue={() => onUpdate(i)} colorTag = {colorTag}  />
        );
    }

const generateRow= function(index){
    let row = [];
    let i;
    for(i=0;i<3;i++)
        {
         row.push(renderSquare(3*index+i));   
        }
    return row;
    }

const generateBoard= function(rowNo){
    let board = [];
    let row;
    for(row = 0;row<rowNo;row++)
        {
            board.push(
            <View style={styles.row_style}>
                       {generateRow(row)}
                       </View>
            );
        }
    return board;
}

    return (
        <View>
            {generateBoard(3)}
        </View>
    );
}

const styles = StyleSheet.create({
    row_style:{
        flexDirection: 'row',
    }
});

export default Boards;