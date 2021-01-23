import React, {useState} from 'react'
import '../../style/style.scss'
import { MdAddShoppingCart } from 'react-icons/md'
import Select from 'react-select'


function AddItem(props) {
    const newProduct = {
        name: "",
        count: 1,
        category: 'others',
        checked: false
    }

    const newOptions = {
        value: null,
        label: "SelectCategorey..."
    }
    
    const options = [
        { value: 'dairy', label: 'dairy' },
        { value: 'fruits', label: 'fruits' },
        { value: 'meat&fish', label: 'meat&fish' },
        { value: 'vegtables', label: 'vegtables'},
        { value: 'alchol', label: 'alchol'},
        { value: 'pharm', label: 'pharm'},
        { value: 'hygiene', label: 'hygiene'},
        { value: 'beauty and cosmetics', label: 'beauty and cosmetics'},
        { value: 'others', label: 'others'}

    ]

    const [selectedCategory, setSelectedCategory] = useState({value:null, label:"SelectCategory..."})
  
    const [newItem, setNewItem] = useState(newProduct);

    const handleKeyDown = (e) => {
        if ( e.key === 'Enter') {
            handlClick();
        }

    }
   

    const handelChange = e => {
      setNewItem({name: e.target.value, count: 1});  
    }

    const handleInputChange = selectedCategory => {
        setSelectedCategory(selectedCategory)
        setNewItem({...newItem, category: selectedCategory.value})
    }

    


    const handlClick = () => {
        props.onClick(newItem);
        setNewItem(newProduct);
        setSelectedCategory(newOptions);

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
          <Select className="select-categories-box" options={options}
          value={selectedCategory} 
           onChange={handleInputChange} />
            <div >
                <MdAddShoppingCart onClick={handlClick} className="icon-shopping-cart"/> 
            </div>    
        </div>
    )
}

export default AddItem