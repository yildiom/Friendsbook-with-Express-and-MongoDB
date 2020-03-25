import React from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import axios from 'axios';

class Friend extends React.Component {
  state = { modalShow: false, friendList: this.props.friendList };

  // removeFriendFromDB = (id) => {
  //   axios.delete(`http://localhost:5000/friends/${id}`).then(res => console.log(res.data));
  // }
  render() {
    const { id, name, lastName, age, deleteFriend } = this.props
    const modalClose = () => this.setState({ modalShow: false });
    const modalOpen = () => this.setState({ modalShow: true });

    console.log(id);


    return (
      <li key={id}>
        <Card>
          <Card.Body>

            <Card.Title>
              <span className="name">
                Name: {name} {lastName}
              </span>
              <span className="age"> Age: {age}</span>
            </Card.Title>

            <div className="buttonHolder">

              <Button
                variant="danger"
                onClick={deleteFriend
                  //, this.removeFriendFromDB(id)
                }
                id={id}
                data-test="deleteButton"
              >Delete</Button>

              <ButtonToolbar>

                <Button
                  variant="primary"
                  style={{ marginLeft: '10px' }}
                  onClick={modalOpen}
                >Update</Button>

                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                  id={this.props.id}
                />

              </ButtonToolbar>

            </div>
          </Card.Body>
        </Card>
      </li>
    )
  }
}

export default Friend;
