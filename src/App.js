import './App.css';
import React, {useState} from 'react';
import Topnavbar from './components/Topnavbar';
import About from './components/about';
import Main from './components/Main';
function App() {
  const [mode, setMode] = useState('light');
 const toggleMode = ()=> {
  if(mode === 'light'){
    console.log('light')
      setMode('dark');
      document.body.style.backgroundColor = 'dark';
  }
  else{
    console.log('dark')
    setMode('light');
    document.body.style.backgroundColor = 'light';
  }
  }
  return (
    <>
     <Topnavbar mode={mode} toggleMode={toggleMode}/>
     <About mode={mode}/>
     <Main/>
    </>
  );
}

export default App;
