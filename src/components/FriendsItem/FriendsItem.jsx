export default function FriendsItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <div>
        <img src={avatar} alt="Friends photo" />
        <p>{name}</p>
        <p>{isOnline}</p>
      </div>
    </>
  );
}
