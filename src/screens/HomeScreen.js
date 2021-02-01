import React from "react";
import { Text, StyleSheet,View ,TouchableOpacity ,ImageBackground} from "react-native";

const HomeScreen = function(props){

  return (
      <ImageBackground source= {require('../../assets/Image_bg.jpg')} style={styles.imageBackground}>
      <View style={styles.container}>
            <TouchableOpacity 
                onPress ={()=>props.navigation.navigate('Game')}
                title="Start Game"
                ><Text style={styles.text}>Let's Play</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight:'bold',
      color:'white',
  },
    imageBackground: {
        flex: 1,
    resizeMode: 'cover',
    },
    container:{
        marginTop:100,
        borderColor:'white',
            borderWidth:1,
         flexDirection:'row',
            justifyContent:'center',
    }
    
});

export default HomeScreen;
