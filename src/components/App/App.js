import React from 'react';
import styles from './App.scss';
import List from '../List/List.js'; // Pobiera właściwości z folderu wyżej, potem wchodzi do folderu List i pobiera plik List.js

const App = () => (
  <main className={styles.component}>

    <h1 className={styles.title}>My first React app</h1>
    <h2 className={styles.subtitle}>Hello world!</h2>
    
    <List title={['Hi, how are you ', <sup key='1'>Michael?</sup>]} image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} >
      <p>I,m fine, and you?</p>
    </List>

  </main>
)

//Zaczynamy od nawiasów klamrowych { }, ponieważ przechodzimy z kodu JSX do zwykłego JS. W tych nawiasach umieszczamy tablicę, której pierwszym elementem jest tekst, a drugim – kod JSX!

// <List title='Things to do' /> Właśnie w ten sposób ustawia się propsy komponentu.

// const App = () => (Jak widzisz, różnią się tylko tym, co jest dookoła kodu JSX. Jeśli to wszystko, czego będzie potrzebował nasz komponent, możemy śmiało używać komponentu funkcyjnego.

// defaul - Dzięki niemu, importując App w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from '...';, tak jak do tej pory to robiliśmy

export default App;