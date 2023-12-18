import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import AnotherComponent from './AnotherComponent';







//console.log(store)



/* store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch({type:'A'})
store.dispatch({type:'B'}) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
<AnotherComponent/>
    </Provider>
  </React.StrictMode>
);

