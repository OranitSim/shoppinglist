import { Component } from 'react';
import './App.css';
import Footer from './components/Footer.jsx';
import ListActions from './pages/shoppingList/ListActions.jsx';
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
        <h1>Good job Oranit!!</h1>
        <ListActions onAction={this.onAction} />
        <Footer />
      </div>
    );
  }
}
