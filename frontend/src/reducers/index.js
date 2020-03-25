import { friendInfoReducer } from './AddFriendReducer';
import { friendReducer } from './FriendReducer';

const reducer = {
  friend: friendInfoReducer,
  friendList: friendReducer,
};
export default reducer;
