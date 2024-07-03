import css from './Profile.module.css';
// import css from "./App.module.css";
// import userData from "../../userData.json";

const Profile = ({userInfo: {userName, tag,avatar,location,stats: {followers,views,likes},}}) => {
  return (
      <div className={css.containerProfile}>
        <div className={css.ProfileContentBlock}>
          <img className={css.imageProfile} src={avatar} alt=""/>
          <p className={css.userName}>{userName}</p>
          <p className={css.textLight}>@{tag}</p>
          <p className={css.textLight}>{location}</p>
        </div>
        <ul className={css.listStaticsBlock}>
          <li>
            <span>Followers</span>
            <span className={css.listStaticsBlockNumbers}>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={css.listStaticsBlockNumbers}>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={css.listStaticsBlockNumbers}>{likes}</span>
          </li>
        </ul>
      </div>
  )
}

export default Profile
