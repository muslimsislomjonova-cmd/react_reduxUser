import './UserCard.css';

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

export default function UserCard({ user }) {
  return (
    <div className="uc-card">
      <div className="uc-avatar">{getInitials(user.name)}</div>
      <div>
        <h3 className="uc-name">{user.name}</h3>
        <p className="uc-username">@{user.username}</p>
      </div>
      <div className="uc-info">
        <p> {user.email}</p>
        <p> {user.phone}</p>
        <p> {user.website}</p>
        <p> {user.company?.name}</p>
        <p> {user.address?.city}</p>
      </div>
    </div>
  );
}