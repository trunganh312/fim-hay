import { Link } from 'react-router-dom';
import './useritem.scss';
UserItem.propTypes = {};

function UserItem(props) {
  const { user } = props;
  return (
    <div className="col l-3 md-4 c-12">
      <div className="item">
        <div className="item__avatar">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="item__content">
          <h3>{user.login}</h3>
          <Link to={`/users/${user.login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
