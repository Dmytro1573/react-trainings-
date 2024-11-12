import css from "./Profile.module.css";

export default function Profile({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <>
      <div className={css.container}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <div className={css.info}>
          <p className={css.nameText}>{username}</p>
          <p>{tag}</p>
          <p>{location}</p>
        </div>
        <ul className={css.userInfo}>
          <li>
            <span>Followers</span>
            <span className={css.userItem}>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={css.userItem}>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={css.userItem}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
