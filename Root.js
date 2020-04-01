import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  )
}

export default Root;