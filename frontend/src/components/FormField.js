import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import {
  addFirstName,
  addLastName,
  addAge,
} from '../actions/AddFriendAction';
import { submitFriend } from '../actions/submitFriendAction';

class FormField extends React.Component {

  addFriendToDB = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends/add', this.props.friend)
      .then(res => console.log(res.data));
    //window.location.reload();

  }

  render() {

    const { addFirstName,
      addLastName,
      addAge,
      submitFriend, onClick } = this.props

    return (
      <div>
        <fieldset>
          <legend>Add a friend</legend>
          <form action="" onSubmit={submitFriend, this.addFriendToDB}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="Enter Firstname"
                onChange={addFirstName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Enter Lastname"
                onChange={addLastName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="age"
                placeholder="Enter Age"
                onChange={addAge}
                data-test="ageComponent"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={onClick}
              data-test="AddButton"
            >Add</Button>
          </form>
        </fieldset>
      </div >
    )
  }
}


const mapStateToProps = ({ friend }) => ({
  friend: friend
})

const mapDispatchToProps = dispatch => ({
  addFirstName: (e: *) => {
    dispatch(addFirstName(e.target.value));
  },
  addLastName: (e: *) => {
    dispatch(addLastName(e.target.value));
  },
  addAge: (e: *) => {
    dispatch(addAge(parseInt(e.target.value, 10)));
  },
  submitFriend: (e) => {
    e.preventDefault();
    const id = uuidv1();
    dispatch(submitFriend(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormField);
