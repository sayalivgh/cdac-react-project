import { Overlay } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';

const MenuButton = ({ buttonText='', menu = [], placement='bottom', showMenu=false, onButtonClick}) => {
  const renderMenu = () => {
   return ( <ul>
      {
        menu.map((item, index)=>{
        return <li key={index}><Link to={item.link}>{item.name}</Link></li>
      })
      }
    </ul>
   )
  }
  
  return (
    <>
       {menu.length ?<OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            rootClose={true}
            rootCloseEvent={'mousedown'}
            overlay={
            <Popover id="popover-positioned-bottom">
                <Popover.Body>
                {renderMenu()}
                </Popover.Body>
            </Popover>
            }
        >
    <button onClick={() =>  onButtonClick(buttonText)} className={`item show-pointer ${showMenu ? 'show-button-selection' : null}`}>{buttonText}</button>
    </OverlayTrigger> : null}
    </>
  )
}

export default MenuButton