import React from 'react';
import ReactDOM from 'react-dom';
import './css/custom.css';
import { GuidePageShell } from './guide-shell';
import { FullPage } from './full-page';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuidePageShell />, document.getElementById('root'));
// ReactDOM.render(<FullPage />, document.getElementById('root'));
registerServiceWorker();
