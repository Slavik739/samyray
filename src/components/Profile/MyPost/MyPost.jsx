import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {

	return <div className={s.myPostAll}>
		<div className={s.myPost}>
			<h2 className={s.myPost__header}>My posts</h2>
			<textarea className={s.myPost__input} cols="50" rows="10" placeholder="Введите сообщение"></textarea>
			<button className={s.myPost__btn}>Add post</button>
		</div>
		<div className={s.posts}>
			<Post massage="hi, how are you?" likesCount="4"/>
			<Post massage="It's my first post" likesCount="23"/>
			<Post massage="I'm in work now" likesCount="14"/>
			<Post massage="Lorem" likesCount="0"/>
		</div>
	</div>

}
export default MyPost;