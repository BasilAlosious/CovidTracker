import React,{useState,useEffect} from 'react';
import { FormControl, Select, MenuItem} from '@material-ui/core'
import './App.css';

function App() {
  const countries= useState(['americca'])
  return (
    <div className="app">
     <div className="app__header">
     <h1>What is Uppp!</h1>
     <FormControl className="app__dropdown">
     <Select variant="outlined" value="abc">
      <MenuItem value="abc">{countries}</MenuItem>
     </Select>
     </FormControl>
     </div>
    </div>
  );
}

export default App;
