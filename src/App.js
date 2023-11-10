import './App.css';
import Input from './components/Input';
import { useState,useEffect } from 'react';
function App() {

  
  return (

  
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png" className='messenger-logo' alt='messenger logo' />
     <div>
      <Input />
      </div>
    </div>
  );
}

export default App;
