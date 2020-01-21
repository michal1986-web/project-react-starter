import React from 'react';
import styles from './Hero.scss'; // Pobiera style ze swojego katalogu
import PropTypes from 'prop-types'; // Zanim będziemy mogli wdrożyć sprawdzanie typów wartości, musimy zainstalować paczkę prop-types – wykonaj w terminalu komendę: npm install --save prop-types

const Hero = props => (
  
  <header className={styles.component}>

    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} src={props.imageUrl}></img> 
    
  </header>
)

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageUrl: PropTypes.string.isRequired, // image zmiana w kodzie
}

// defaul - Dzięki niemu, importując Hero w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {Hero} from '...';, tak jak do tej pory to robiliśmy

export default Hero;