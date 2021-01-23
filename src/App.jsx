import './style/App.scss';
import Login from './pages/login/Login';
import { Component } from 'react';
import './style/App.scss';
import Header from './components/Headet.jsx'
import Footer from './components/Footer.jsx';
import ShoppingList from './pages/shoppingList/ShoppingList.jsx';
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
        {/* <div class="image-background" style={{backgroundImage:`url(${background})`}} > */}

          {/* <Login/> */}
          <Header/>
          < ShoppingList  />
          <Footer />
      </div>
    );
  }
}
