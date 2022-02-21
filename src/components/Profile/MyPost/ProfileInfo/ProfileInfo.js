import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<>
			<div className={s.profile__content}>
				<img className={s.profile__logo} src="https://thumbs.dreamstime.com/b/butterfly-flower-23417093.jpg"
						 alt=""/>
			</div>
			<div className={s.profile__des}>
				ava+description
			</div>
		</>
	);
}

export default ProfileInfo;