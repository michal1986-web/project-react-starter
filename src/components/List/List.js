import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero />
      </section>
    )
  }
}

//defaul - Dzięki niemu, importując List w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {List} from '...';, tak jak do tej pory to robiliśmy
export default List;
