
import { useState } from 'react';
import MenuButton from '../shared/menu-button/menu-button';
import './header.css';

const Header = (props) => {
    const [selectedButton, selectButton] = useState('');
    const buttonValues = {
        supplier: 'Supplier',
        customer: 'Customer',
        sales:'Sales',
        billOfMaterials: 'Bill of material'
    }

    const handleButtonClick = (buttonText) => {
        console.log("handleButtonClick", buttonText);
        selectButton(buttonText)
    }
    return (
      <header className="header-container">
        <div className='logo show-pointer'>LOGO</div>
        <div className="menu-container">
            <MenuButton 
                buttonText={buttonValues.supplier} 
                onButtonClick={handleButtonClick} 
                showMenu={selectedButton === buttonValues.supplier} 
                menuComponent={<div>Supplier MENU</div>}/>
            
            <MenuButton 
                buttonText={buttonValues.customer}  
                showMenu={selectedButton === buttonValues.customer} 
                onButtonClick={handleButtonClick} 
                menuComponent={<div>Customer MENU</div>}/>

            <MenuButton 
                buttonText={buttonValues.sales}  
                showMenu={selectedButton === buttonValues.sales} 
                onButtonClick={handleButtonClick} 
                menuComponent={<div>Sales MENU</div>}/>
            
            <MenuButton 
                buttonText={buttonValues.billOfMaterials}  
                showMenu={selectedButton === buttonValues.billOfMaterials} 
                onButtonClick={handleButtonClick} 
                menuComponent={<div>Bill of material MENU</div>}/>
        </div>
      </header>
    )
  }
  
  export default Header