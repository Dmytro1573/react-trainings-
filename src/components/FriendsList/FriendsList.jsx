import FriendsItem from "../FriendsItem/FriendsItem";

export default function FriendsList({ friends }) {
  return (
    <>
      <div>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              <FriendsItem friend={friend} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
