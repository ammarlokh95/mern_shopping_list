import React, { Component } from 'react';
import AppNavBar from './component/navbar';
import ShoppingList from './component/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './component/itemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
