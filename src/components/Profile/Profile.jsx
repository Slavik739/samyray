import React from 'react'
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";

const Profile = (p) => {
	return (
		<div className={s.profile}>
			<ProfileInfo/>
			<MyPost postData={p.postData}/>
		</div>
	);
}

export default Profile;