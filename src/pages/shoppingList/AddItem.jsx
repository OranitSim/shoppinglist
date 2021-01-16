import React, {useState} from 'react'
import '../../style/style.scss'
import { MdAddShoppingCart } from 'react-icons/md'


function AddItem(props) {
    const newProduct = {
        name: "",
        count: 1,
        category: 'others',
        checked: false
    }
    const [newItem, setNewItem] = useState(newProduct);
    const handleKeyDown = (e) => {
        if ( e.key === 'Enter') {
            handlClick();
        }

    }
   

    const handelChange = e => {
      setNewItem({name: e.target.value, count: 1});  
    }
    const handlClick = () => {
        props.onClick(newItem);
        setNewItem(newProduct);

    };


    return (
        <div className="add-item-box" >
          <input onKeyDown={handleKeyDown}
           type="text" 
            placeholder="Add proudect"
            value={newItem.name}
            className="new-item"
            onChange={handelChange}
          />  
            <div >
                <MdAddShoppingCart onClick={handlClick} className="icon-shopping-cart"/> 
            </div>    
        </div>
    )
}

export default AddItem