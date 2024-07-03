import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends:{name,isOnline,avatar}}) =>{
  return(
    <ul className={css.listFriends}>
      <li>
        <FriendListItem name={name} isOnline={isOnline} avatar={avatar}/>
      </li>
    </ul>
  )
}
export default FriendList