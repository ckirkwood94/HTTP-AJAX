import React from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';

function FriendsList(props) {
  // console.log(props.deleteFriend);
  return (
    <List>
      {props.friends.map((friend) => (
        <FriendCard
          friend={friend}
          key={friend.id}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </List>
  );
}

export default FriendsList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
