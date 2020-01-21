import React from 'react';
import styles from './List.scss'; // Pobiera style ze swojego katalogu
import Hero from '../Hero/Hero.js'; // Pobiera właściwości z folderu wyżej, potem wchodzi do folderu Hero i pobiera plik Hero.js
import PropTypes from 'prop-types'; // Zanim będziemy mogli wdrożyć sprawdzanie typów wartości, musimy zainstalować paczkę prop-types – wykonaj w terminalu komendę: npm install --save prop-types
import Column from '../Column/Column.js';

class List extends React.Component {

  static propTypes = { // statyczną właściwość tej klasy - List.propTypes
    title: PropTypes.node.isRequired,
    children: PropTypes.node, 
    imageUrl: PropTypes.string, // string = tekst
    titleCol: PropTypes.string, // string = tytuł column
  }  

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>

        <Hero titleText={this.props.title} imageUrl={this.props.image} />

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column titleCol={'Column 1'} />
          <Column titleCol={'Column 2'} />
          <Column titleCol={'Column 3'} />
        </div>

      </section>
    )
  }
}
 
// defaul - Dzięki niemu, importując List w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {List} from '...';, tak jak do tej pory to robiliśmy

export default List;