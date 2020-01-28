import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Faq = ({titleText, imageUrl, contentText}) => (
  <Container>

    <Hero titleText={titleText} imageUrl={imageUrl} />
    <p className={contentText}>{ReactHtmlParser(contentText)}</p>

  </Container>
);

Faq.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageUrl: PropTypes.node.isRequired,
  contentText: PropTypes.string.isRequired,
};

Faq.defaultProps = {
  titleText: settings.FaqContent.title,
  imageUrl: settings.FaqContent.image,
  contentText: settings.FaqContent.text,
};

export default Faq;