import './App.scss';
import Login from './pages/login/Login';
import { Component } from 'react';
import Footer from './components/Footer.jsx';
import background from './img/green.jpg'
import ShoppingListPage from './pages/shoppingList/ShoppingListPage.jsx';
import { COMPLETED, DELETE } from './utils/enums'

export default class App extends Component {

 
  // onAction = action => {
  //   console.log('Action:', action);
  //   switch (action) {
  //     case COMPLETED:
  //       console.log('List is completed!!');
  //       break;
  //     case DELETE:
  //       console.log('Deleting list....');
  //       break;
  //     default:
  //       console.error('Uknown action...');
  //       break;
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div class="image-background" style={{backgroundImage:`url(${background})`}} >

          <Login/>
          {/* <ShoppingListPage /> */}
          <Footer />
        </div>
      </div>
    );
  }
}
class Section extends Component {
  render() {
    return (
      <div className="SectionStyle"></div>
    )

  }
}
