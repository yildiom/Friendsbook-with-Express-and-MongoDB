import React from 'react';
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  updateFirstName,
  updateLastName,
  updateAge,
} from '../actions/UpdateFriendAction';
import { submitUpdate } from '../actions/SubmitUpdateAction';

class MyVerticallyCenteredModal extends React.Component {

  state = {
    friendList: [],
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/').then(res => {
      if (res.data.length > 0) {
        this.setState({
          friendList: res.data
        })
      }
    })
  }

  render() {
    const { id, submitUpdate, updateAge, updateFirstName, updateLastName, onClick } = this.props
    const friend = this.state.friendList.filter(friend => friend._id === id)
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Friend Info
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form action="" onSubmit={submitUpdate} id={id}>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Firstname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="firstname"
                  placeholder={friend.firstname}
                  onChange={updateFirstName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Lastname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="lastname"
                  placeholder={friend.lastName}
                  onChange={updateLastName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Age
            </Form.Label>
              <Col sm="10">
                <Form.Control type="lastname" placeholder={friend.age} onChange={updateAge} />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onClick}>
              Update
            </Button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="danger"
            onClick={this.props.onHide}
            style={{ fontFamily: 'Montserrat' }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ friendList }) => ({
  friendList,
});

const mapDispatchToProps = dispatch => ({
  updateFirstName: e => {
    dispatch(updateFirstName(e.target.value));
  },
  updateLastName: e => {
    dispatch(updateLastName(e.target.value));
  },
  updateAge: e => {
    dispatch(updateAge(parseInt(e.target.value, 10)));
  },
  submitUpdate: e => {
    e.preventDefault();
    e.persist();
    dispatch(submitUpdate(e.target.id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyVerticallyCenteredModal);
