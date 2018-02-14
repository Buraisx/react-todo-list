import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import registerServiceWorker from './registerServiceWorker';

let toDos = ['get up','make breakfast','buy groceries','work']

ReactDOM.render(<MyList theList={toDos}/>, document.getElementById('root'));
registerServiceWorker();
