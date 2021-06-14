import React from 'react'
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__content}>
                <img className={s.profile__logo} src="https://thumbs.dreamstime.com/b/butterfly-flower-23417093.jpg"
                     alt=""/>
            </div>
            <div className={s.profile__des}>
                ava+description
            </div>
            <MyPost/>
        </div>
    );
}
export default Profile;