import React from 'react';
import ReactDOM from 'react-dom';
import './Image.css';
import './NavBar.css';
import './Wrapper.css';
import ClickyGame from './ClickyGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickyGame />, document.getElementById('root'));
registerServiceWorker();
