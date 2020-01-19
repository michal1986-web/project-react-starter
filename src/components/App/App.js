import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>My first React app</h1>
        <h2>Hello world!</h2>
      </main>
    )
  }
}

//defaul - Dzięki niemu, importując App w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from '...';, tak jak do tej pory to robiliśmy
export default App;
