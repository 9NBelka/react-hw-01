import css from './FriendListItem.module.css';
import clsx from "clsx" 

const FriendListItem =({name,isOnline,avatar}) =>{

  const isOnlineCss = clsx(css.name, isOnline ? css.online : css.offline)

  return (
    <div className={css.containerFriends}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48"/>
      <p className={css.name}>{name}</p>
      <p className={isOnlineCss}>{isOnline ? "Online" : "Offline"} </p>
    </div>
  )
}

export default FriendListItem