import React from 'react';
import ReactDOM from 'react-dom';
import publications from './components/Publication/publications.json';
import Reader from './components/Reader/Reader';

ReactDOM.render(
  <Reader items={publications} />,
  document.getElementById('root'),
);
