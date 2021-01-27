import logo from './logo.svg';
import './App.css';
import React from 'react';
import day from './images/day.gif';
import night from './images/night.gif';

import Home from './pages/Home';

function App() {
  let storedTheme:string=localStorage.getItem('theme')!==null?localStorage.getItem('theme'):'dayTheme';
  const [theme,setTheme]=React.useState(storedTheme)

  const changeTheme=()=>{
    setTheme(theme =='dayTheme'?'nightTheme':'dayTheme')
  }
  return (
    <div className="App">
      <header className={"App-header "+theme}>
        <div className='theme'>
          <button onClick={()=>changeTheme()}><img src={theme =='dayTheme'?day:night} alt='Day Theme'/></button>
        </div>
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
