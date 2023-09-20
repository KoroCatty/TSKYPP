// Bootstrap
import { Accordion } from "react-bootstrap";

// component
import LeftMenu from "./LeftMenu";

function MenuSp() {
  return (
    <Accordion className="custom-accordion__header " 
    style={{background:"black", backgroundColor: "black"}} >
      
      <Accordion.Item eventKey="0" className="custom-accordion">

        <Accordion.Header className="custom-accordion__header">Docs Menus</Accordion.Header>
        <Accordion.Body>

          {/* Menu Component */}
          <LeftMenu />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MenuSp;
