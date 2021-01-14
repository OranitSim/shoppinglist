import { Component } from 'react';
import './App.scss';
import Footer from './components/Footer.jsx';
import ListActions from './pages/shoppingList/ListActions.jsx';
import Login from './pages/login/Login.jsx';
import { COMPLETED, DELETE } from './utils/enums'

export default class App extends Component {

  onAction = action => {
    console.log('Action:', action);
    switch (action) {
      case COMPLETED:
        console.log('List is completed!!');
        break;
      case DELETE:
        console.log('Deleting list....');
        break;
      default:
        console.error('Uknown action...');
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Login />
        {/* <ListActions onAction={this.onAction} /> */}
        <Footer />
      </div>
    );
  }
}
