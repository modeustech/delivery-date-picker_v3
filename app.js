import React,{useState} from 'react';
import Datepicker from 'react-datepicker'
import './App.css';
import "react-datepicker/dist/react-datepicker.css";


import './App.css';

function App() {
  const [selectedDate,setDate] = useState(null);
  return (
    <div className="App">
      <h3>Pick a delivery date</h3>
      <Datepicker 
      selected={selectedDate} 
      onChange={date=>setDate(date)}
      inline
      />
    </div>
  );
}

export default App;
