import React,{ useReducer } from "react";
import { Text,View, StyleSheet, Button, ImageBackground,TouchableOpacity } from "react-native";
import Boards from "../components/Boards";

const reducer = function(state,action){
        //state : {squares : array(9), currentTure: bool}
        //action : {index : 1/2/3..., resetSystem: bool}
        
        if(action.resetSystem === true)
            {
                 //console.log('===Inside Reset Action ======')     
                //console.log(state)
                return {...state,  
                        history : [{squares: Array(9).fill(null)}],
                        currentTurn: true,
                        historyLength: 1,
                        activeStep:0
                       };
            }

        
    if(action.undoSystem === true )
        {
            const history = state.history.slice(0,state.activeStep);
            const currentTurn = !state.currentTurn;
            return {...state, history:history, currentTurn: currentTurn, historyLength: history.length,activeStep:state.activeStep-1};
        }
    
    if(action.jumpToSystem != null)
        {
            const turn = (action.jumpToSystem % 2)?false:true;
           // console.log('=======obj======')
           // console.log(state);
    
            // console.log(state.history)
            //console.log(state.activeStep)
            
            let obj = {...state, history:state.history, currentTurn: turn, historyLength: state.history.length , activeStep:action.jumpToSystem};
            
        //    console.log(obj);
            
            return obj;
        }
    
    if(checkwinner(state.history[state.activeStep].squares)  != null)
            return state;
    
        let history = state.history.slice(0, state.activeStep+1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
    
     // console.log('====Printing history before update=========')
       //         console.log(history)    
    
        const index = action.index;
        const value = state.currentTurn ? 'X' :'O';
        
     //   console.log(squares) 
    //base condition
        if(squares[index] == null)
            {
                squares[index] = value;
              
                history = history.concat([{squares: squares}]);
               // console.log('====Printing history after update=========')
                //    console.log(history)
                const winner = checkwinner(squares);
                
                return { ...state,history: history, currentTurn: !state.currentTurn, historyLength: history.length, activeStep:state.activeStep+1 };
            }
        else{
            return state;
            }
        
    }

const checkwinner= function(square){
    const lines = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
     ];
    
    for(let i=0;i<lines.length;i++)
        {
            const [a,b,c] = lines[i];
            
            if(square[a] && square[a] === square[b]&& square[b] === square[c])
                {
                    return {value: square[a],
                            positions:[a,b,c]};
                }

        }
    return null;
    
}

const initialState = {
        history : [{squares: Array(9).fill(null)}],
        currentTurn: true,
        historyLength: 0,
        activeStep:0
    }

const GameScreen = (props) => {
  // console.log('=========GameScreen props ==============')
 //console.log(props);

    
    const [state, dispatch] = useReducer(reducer,initialState);
    const next_player = state.currentTurn ? 'X' : 'O';
    const status = 'Next Player :' +  next_player;
    
    
    //console.log(props.navigation.state.params);
    
    
    
    if(props.navigation.state.params != null)
        {
            const stepNo = props.navigation.state.params.stepNo;
          //  console.log('stepNo')
            
            props.navigation.state.params = null;
            dispatch({index:null,resetSystem: null,undoSystem:false,jumpToSystem:stepNo});

        }
    
   //console.log('=======state======')
  // console.log(state);
    
   // console.log(state.history)
    console.log(state.activeStep)
    
   // console.log(state.history[state.activeStep].squares)\
    let winner = checkwinner(state.history[state.activeStep].squares);
  return (
      <ImageBackground source= {require('../../assets/Image_bg.jpg')} style={styles.imageBackground}>
      <View style={styles.gameBox}>
      
      
      <Boards 
        squares = {state.history[state.activeStep].squares}
        currentTurn = {state.currentTurn}
        onUpdate = {(index)=>dispatch({index:index,resetSystem: false,undoSystem:false,jumpToSystem:null})}
        winner = {winner}
      />
            {winner ? <Text style={styles.text}>Winner : {winner.value}</Text>
        : (state.activeStep===9 ? <Text style={styles.text}> Draw !</Text> :<Text style={styles.text}>{status}</Text>)  }
           
          {state.historyLength>1 ?
            <>
           <TouchableOpacity 
                onPress = {()=>dispatch({index:null,resetSystem: true,undoSystem:false,jumpToSystem:null})}>
            <Text style={styles.text}>Reset</Text></TouchableOpacity>
            </>:<></>}
        
        {state.activeStep>0 ?
            <>
            <TouchableOpacity 
               onPress = {()=>dispatch({index:null,resetSystem: false,undoSystem:true})}>
            <Text style={styles.text}>Undo</Text></TouchableOpacity>
            </>:<></>}
            {state.historyLength>1 ?
            <>
            <TouchableOpacity 
               onPress = {()=>props.navigation.navigate('Move', state)}>
            <Text style={styles.text}>History</Text></TouchableOpacity>
            </>:<></>
        }
        
      </View>
</ImageBackground>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
      fontWeight:'bold',
      color:'#235191',
      
  },
    gameBox :{
        alignItems: 'center',
        paddingTop:70
    },
    imageBackground: {
        flex: 1,
    resizeMode: 'cover',
    },
     container:{
        marginTop:15,
        borderColor:'white',
            borderWidth:5,
         flexDirection:'row',
            justifyContent:'center',
    }
    
});

export default GameScreen;