import React from 'react';
import ReactDOM from 'react-dom';
import Sizzle from 'sizzle';
import Instagram from './components/instagram.jsx';
import Collection from './components/collection.jsx';
// import MailingList from './components/mailing-list.jsx'

ReactDOM.render(<Instagram />, document.getElementById('instagram'));
ReactDOM.render(<Collection />, document.getElementById('collection'));
// ReactDOM.render(<MailingList />, document.getElementById('mailing-list'));
