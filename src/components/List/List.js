/* eslint-disable react/prop-types */
import React from 'react';
import styles from './List.scss'; 
import Hero from '../Hero/Hero.js'; 
import PropTypes from 'prop-types'; 
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

class List extends React.Component {

  /*state = {
    columns: this.props.columns || [],
  }*/

  static propTypes = { // statyczną właściwość tej klasy - List.propTypes
    title: PropTypes.node.isRequired,
    //children: PropTypes.node, // delated 11.5
    imageUrl: PropTypes.string, // string = tekst
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }  

  static defaultProps = {
    // children: <p>I can do all the things!!!</p>, // delated 11.5
    description: settings.defaultListDescription,
  }

  /*addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }*/

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Container>

          <Hero titleText={title} imageUrl={image} />

          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>

          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>

        </Container>
      </section>
    );
    // console.log('addColumn:', addColumn);
  }
}
 
// defaul - Dzięki niemu, importując List w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {List} from '...';, tak jak do tej pory to robiliśmy

export default List;