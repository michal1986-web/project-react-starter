import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Search from '../Search/SearchContainer.js';

class Header extends React.Component {

  static propTypes = {
    logoIcon: PropTypes.node,
    toHomeUrl: PropTypes.string,
    toInfoUrl: PropTypes.string,
    toFaqUrl: PropTypes.string,
    homeHeader: PropTypes.string,
    infoHeader: PropTypes.string,
    FaqHeader: PropTypes.string,
  }

  static defaultProps = {
    logoIcon: settings.navMenu.logoIcon,
    toHomeUrl: settings.navMenu.toHomeUrl,
    toInfoUrl: settings.navMenu.toInfoUrl,
    toFaqUrl: settings.navMenu.toFaqUrl,
    homeHeader: settings.navMenu.homeHeader,
    infoHeader: settings.navMenu.infoHeader,
    FaqHeader: settings.navMenu.FaqHeader,
  }

  render(){
    const {logoIcon, toFaqUrl, toHomeUrl, toInfoUrl, homeHeader, infoHeader, FaqHeader} = this.props;
    return (

      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>

            <Link to={toHomeUrl} className={styles.logo}>
              <Icon name={logoIcon} />
            </Link>

            <Search />

            <nav>
              <NavLink exact to={toHomeUrl} activeClassName='active'>{ReactHtmlParser(homeHeader)}</NavLink>
              <NavLink exact to={toInfoUrl}activeClassName='active'>{ReactHtmlParser(infoHeader)}</NavLink>
              <NavLink exact to={toFaqUrl}activeClassName='active'>{ReactHtmlParser(FaqHeader)}</NavLink>
            </nav>

          </div>
        </Container>
      </header>
    );
  }
}

export default Header;