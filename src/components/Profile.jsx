import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://thumbs.dreamstime.com/b/butterfly-flower-23417093.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}
export default Profile;