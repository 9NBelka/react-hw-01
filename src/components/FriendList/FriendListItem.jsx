import css from './FriendListItem.module.css';

const FriendListItem =({name,isOnline,avatar}) =>{
  return (
    <div className={css.containerFriends}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48"/>
      <p className={css.name}>{name}</p>
      <p>{isOnline ? "Online" : "Offline"} </p>
    </div>
  )
}

export default FriendListItem