
import React from 'react';
import ReactDOM from 'react-dom';
import DecideApp from './components/Decide';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<DecideApp options={['look', 'deeze', 'some', 'proptions']} />, document.getElementById('app'));