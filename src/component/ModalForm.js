import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ModalForm extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Feel free to add a new book! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(event) => this.props.handleSubmittingForm(event)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book's name</Form.Label>
                <Form.Control
                  name="titleF"
                  type="text"
                  placeholder="Add a book name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="descriptionF"
                  type="text"
                  placeholder="Add a book description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Status</Form.Label>
                <Form.Control
                  name="statusF"
                  type="text"
                  placeholder="Add a book status"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add a book!
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
