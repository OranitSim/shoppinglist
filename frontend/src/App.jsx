import './style/App.scss';
import Login from './pages/login/Login';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';
import './style/App.scss';
import Header from './components/Headet.jsx'
import Footer from './components/Footer.jsx';
import ShoppingStore from './pages/shoppingList/shoppingNote/ShoppingStore.jsx';
import { COMPLETED, DELETE } from './utils/enums'

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const getCatigories = async () => {
    try {
    const dataDefCategories = await axios.get("http://localhost:8080/categories")
    setCategories(dataDefCategories.data);
      console.log(dataDefCategories.data);
    
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(()=>{
    console.log(categories)
      
    getCatigories()
  }, [])



  
  const getItems = async () => {
    try {
    const dataItems = await axios.get("http://localhost:8080/items")
    console.log(items)
    setItems(dataItems.data);
    console.log("items after:", items)
      
      console.log(dataItems.data);
    
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(()=>{
    console.log(items)
      
    getItems()
  }, [])



    return (
    <div className="App">
      {/* <div class="image-background" style={{backgroundImage:`url(${background})`}} > */}
      {/* <ul>
       {items.map(item=>(
         <li key={item.name}>{item.count}</li>
       ))}
     </ul> */}

        {/* <Login/> */}
        <Header/>
        <ShoppingStore items={items} setItems={setItems} categories={categories} setCategories={setCategories} />
        <Footer />
    </div>
  );
  
}
export default App
