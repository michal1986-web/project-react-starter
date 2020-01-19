import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Hero section image</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>
      </header>
    )
  }
}

//defaul - Dzięki niemu, importując Hero w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {Hero} from '...';, tak jak do tej pory to robiliśmy
export default Hero;
