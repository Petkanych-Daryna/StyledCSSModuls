import "./FriendList.css";

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span className={isOnline ? "status online" : "status offline"}></span>

      <img className="avatar" src={avatar} alt={name} />

      <p className="name">{name}</p>
    </li>
  );
};
