import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendsList from "../FriendsList/FriendsList";
import friendsList from "../../friendsList.json";

export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendsList friends={friendsList} />
    </>
  );
}
