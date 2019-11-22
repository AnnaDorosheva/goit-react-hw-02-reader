import React from 'react';
import PropTypes from 'prop-types';
import s from './Publication.module.css';

const Publication = ({ items }) => (
  <article className={s.publication}>
    <h2>{items.title}</h2>
    <p>{items.text}</p>
  </article>
);

Publication.propTypes = {
  items: PropTypes.object.isRequired,
};
export default Publication;
