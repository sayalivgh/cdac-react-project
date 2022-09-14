import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const MenuButton = ({ buttonText='', menuComponent, placement='bottom', showMenu=false, onButtonClick}) => {
  return (
    <>
       {menuComponent ?<OverlayTrigger
            show={showMenu}
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
            <Popover id="popover-positioned-bottom">
                <Popover.Body>
                {menuComponent}
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