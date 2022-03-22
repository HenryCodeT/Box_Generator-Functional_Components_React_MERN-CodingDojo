import { useState } from 'react';
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import ColorForm from './components/ColorForm';


function App() {
  
  // //// FIELDS ///////////////////////////
  const [boxs, setBoxs] = useState([]);
  
  const setNewBox = (newBox) =>{
    setBoxs((prevBoxs)=>[...prevBoxs,newBox])
  }

  return (
    <div className="App">
      <ColorForm newBox={setNewBox}/>   
      {
        boxs.map((box,index) => {
          return(
            <BoxDisplay key={index} boxColor = {box.backgroundColor} boxWidth={box.width} boxHeight={box.height}/>
          );
        })
      } 
    </div>
  );
}

export default App;
