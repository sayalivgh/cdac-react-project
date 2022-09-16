
import { useEffect, useState } from 'react';
import MenuButton from '../Shared/MenuButton/MenuButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { customerMenuLinks, supplierMenuLink } from '../../utilities/constants'
import './Header.css';

const Header = (props) => {
    const [selectedButton, selectButton] = useState('');
    const navigateTo = useNavigate();
    const buttonValues = {
        supplier: 'Supplier',
        customer: 'Customer',
        sales:'Sales',
        billOfMaterials: 'Bill of material'
    }

    const navigateToPage = (pageName) => {
        selectButton(pageName);
        const { sales, billOfMaterials } = buttonValues;
        switch (pageName) {
            case sales:
                navigateTo('/sales')
                break;
            case billOfMaterials:
                navigateTo('/material-bills')
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const resetMenuSelection = (e) => {
            const getElement = document.getElementById('popover-positioned-bottom');
            console.log('check: ', getElement, e.target);
        }
        document.addEventListener('mousedown', resetMenuSelection);
    },[])
    return (
      <header className="header-container">
        <div onClick={() => navigateTo('/')} className='logo show-pointer'>LOGO</div>
        <div className="menu-container">
            <MenuButton 
                buttonText={buttonValues.supplier} 
                onButtonClick={(buttonText) => selectButton(buttonText)} 
                showMenu={selectedButton === buttonValues.supplier} 
                menu={supplierMenuLink}/>
            
            <MenuButton 
                buttonText={buttonValues.customer}  
                showMenu={selectedButton === buttonValues.customer} 
                onButtonClick={(buttonText) => selectButton(buttonText)} 
                menu={customerMenuLinks}/>

            <button 
                onClick={() => navigateToPage(buttonValues.sales)} 
                className="item show-pointer">
                    {buttonValues.sales}
            </button>
            
            <button 
                onClick={() => navigateToPage(buttonValues.billOfMaterials)} 
                className="item show-pointer">
                    {buttonValues.billOfMaterials}
            </button>
        </div>
        <div className='hamburger-menu-container'>
            <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    )
  }
  
  export default Header