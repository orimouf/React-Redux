import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import counterReducer from './reducers/counterReducer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(counterReducer)}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
