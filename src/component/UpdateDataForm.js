import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { withAuth0 } from "@auth0/auth0-react";

class UpdateDataForm extends React.Component {
  render() {
    return (
      <>
        <Modal flag={this.props.flag} onHide={this.props.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title> Feel free to add a new book! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updateValues(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book's name</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Add a book name"
                  defaultValue={this.props.titleForm}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Add a book description"
                  defaultValue={this.props.descriptionForm}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Status</Form.Label>
                <Form.Control
                  name="status"
                  type="text"
                  placeholder="Add a book status"
                  defaultValue={this.props.statusForm}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add a book!
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateDataForm;
