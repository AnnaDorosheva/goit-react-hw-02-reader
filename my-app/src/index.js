import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import publications from './components/Publication/publications.json';
import Reader from './components/Reader/Reader';

ReactDOM.render(
  <Reader items={publications} />,
  document.getElementById('root'),
);
