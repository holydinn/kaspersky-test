import './App.css'
import Header from "./components/header/Header.js";
import Button from "./components/button/Button";
import Tabs from "./components/tabs/Tabs";
import Cards from "./components/cards/Cards";
import {useState} from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={!darkMode ? 'page' : 'page dark'}>

      <div className='container'>
        <div >
          <button className='theme' onClick={toggleTheme}>{darkMode ? 'view light' : 'view dark'}</button>
        </div>
        <Header darkMode={darkMode}/>
        <Button/>
        <p className={!darkMode ? 'title ordinary' : 'title ordinary dark'}>
          <span>Lorem ipsm </span>
          dolor sit amet
        </p>
        <p className={!darkMode ? 'title mobile' : 'title mobile dark'}>
          All your security needs in one product
        </p>

        <div className='divider'></div>
        <p className={!darkMode ? 'info-text ordinary' : 'info-text ordinary dark'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut dapibus eleifend mi eu faucibus. Aliquam erat volutpat.
          Pellentesque dui nisl, consectetur sit amet hendrerit at,
          commodo ac nunc.
        </p>
        <p className={!darkMode ? 'info-text mobile' : 'info-text mobile dark'}>
          Get the unmatched feeling of security with award-winning
          protection against hackers, viruses and malwares.
        </p>

        <Tabs darkMode={darkMode}/>
        <div className='tabs-divider'></div>
        <Cards/>
      </div>
    </div>


  );
}

export default App;
