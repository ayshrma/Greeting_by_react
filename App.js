import React from "react";
//import { render } from "react-dom";
//import  ReactDOM  from "react";


function App () {
let curDate = new Date(12);
curDate = curDate.getHours();
let cssStyle = {};
let greeting = '';
if(curDate >=1 && curDate<=12){
  greeting = "Good Morning";
  cssStyle.color = 'green';
}
else if(curDate >=12 && curDate <= 15)
{
  greeting = "Good Afternoon";
  cssStyle.color = 'yellow';
    
}
else if(curDate >=16 && curDate <=19){
  greeting = "Good Evening";
  cssStyle.color = 'orange';
}
  else{
    greeting = "Good Night"
    cssStyle.color = 'red ';
  }
  return    (
  <>
<div className='man'>
<h1 style={cssStyle} className='main'>Hello, {greeting}</h1>
</div>
</>
);
} 
export default App;