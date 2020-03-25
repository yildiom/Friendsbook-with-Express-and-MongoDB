import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteFriend } from '../actions/DeleteFriendAction';
import { sortFriends } from '../actions/SortFriendsAction';
import Friend from './Friend';
import axios from 'axios';

class FriendsGrid extends React.Component {

  state = {
    friendList: []
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
    const { deleteFriend, sortFriends } = this.props

    return (
      <ul>
        {this.state.friendList.map(el => (
          <Friend
            id={el._id}
            key={el._id}
            name={el.firstname}
            lastName={el.lastname}
            age={el.age}
            deleteFriend={deleteFriend}
            friendList={this.state.friendList}
          />
        ))}
        <div className="sort">
          <Button variant="secondary" onClick={sortFriends}>
            Sort
          </Button>
        </div>
      </ul>
    )
  }
}

const mapStateToProps = ({ friendList }) => ({
  friendList,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFriend: e => {
    e.persist();
    e.preventDefault();
    dispatch(deleteFriend(e.target.id));
  },
  sortFriends: e => {
    e.preventDefault();
    dispatch(sortFriends());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsGrid);

