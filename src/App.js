import React from 'react';
import { createContext, useState } from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "love" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <h1> {theme === "light" ? "Aşkımmmm Kalbime Tıklar Mısın ?" : "Sekizinci Ayımız Kutlu Olsun Bebeğimmm. Seninle Geçirdiğim Her Vakit Sana Olan Sevgim Katlanarak Arttı ve Artmaya Devam Ediyor. Seninle Olduğum İçin Kendimi Çok Mutlu ve Şanslı Hissediyorum. Beraber Nice Uzun Yıllara Sevgilim. İyi ki Varsın Hayatımın Anlamı. Seni Çoooooook Seviyorummmmm <333"}</h1>
        <FontAwesomeIcon 
        id='heart'
        icon={faHeart} 
        onClick={toggleTheme} 
        checked={theme === "love"}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
