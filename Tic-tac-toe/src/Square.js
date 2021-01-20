import React from 'react';
/*
.button {
  background-color: white;
  border-color: black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
*/
const button_styling= {
    backgroundColor : 'white',
    borderColor: 'black',
    color: 'black',
    textAlign:'center',
    margin: '0px 10px 0px 10px',
    
    
}

function Square(prop){
		return (
			<button className="square" style={button_styling} onClick={() => prop.onClick()}>
			{prop.value}
			</button>
		)
}
export default Square;