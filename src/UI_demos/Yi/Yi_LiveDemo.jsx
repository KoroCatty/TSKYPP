import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Yi_LiveDemo = () => {
  const jsxCode = ` 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  <Button variant='primary' onClick={handleShow}>
    Launch demo modal
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={handleClose}>
        Close
      </Button>
      <Button variant='primary' onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>`;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{color: "black", textAlign:"center", margin:"3rem 0 5rem 0"}}>
        <Button variant='primary' onClick={handleShow} style={{width: "300px", height: "100px"}}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} style={{color: "black"}}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <SyntaxHighlighter language='jsx' style={dark}>
          {jsxCode}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Yi_LiveDemo;
