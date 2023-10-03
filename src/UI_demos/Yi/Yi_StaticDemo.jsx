import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Yi_StaticDemo = () => {
  const jsxCode = `
    <div className='modal show' style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary'>Close</Button>
          <Button variant='primary'>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  `;

  return (
    <div style={{color: "black"}}>
      <div>
        {/* Render the modal */}
        <div
          className='modal show'
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary'>Close</Button>
              <Button variant='primary'>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>

      <div>
        {/* Render the syntax-highlighted JSX code */}
        <SyntaxHighlighter language='jsx' style={dark}>
          {jsxCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Yi_StaticDemo;
