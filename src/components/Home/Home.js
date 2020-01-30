import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js'; // Pobiera właściwości z folderu wyżej, potem wchodzi do folderu List i pobiera plik List.js
//import {listData} from '../../data/dataStore'; // ..jeden folder ..drugi folder do góry, a potem folder data i plik data
//import Search from '../Search/SearchContainer.js';

class Home extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {/*<Search />*/}

        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}

      </main>
    );
  }
}

export default Home;