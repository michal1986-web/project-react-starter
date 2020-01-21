import React from 'react';
import styles from './List.scss'; 
import Hero from '../Hero/Hero.js'; 
import PropTypes from 'prop-types'; 
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {

  state = {
    columns: this.props.columns || [],
  }

  static propTypes = { // statyczną właściwość tej klasy - List.propTypes
    title: PropTypes.node.isRequired,
    //children: PropTypes.node, // delated 11.5
    imageUrl: PropTypes.string, // string = tekst
    description: PropTypes.node,
    columns: PropTypes.array,
  }  

  static defaultProps = {
    // children: <p>I can do all the things!!!</p>, // delated 11.5
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>

        <Hero titleText={this.props.title} imageUrl={this.props.image} />

        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>

        <div className={styles.columns}>

          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
          
        </div>

      </section>
    )
  }
}
 
// defaul - Dzięki niemu, importując List w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {List} from '...';, tak jak do tej pory to robiliśmy

export default List;