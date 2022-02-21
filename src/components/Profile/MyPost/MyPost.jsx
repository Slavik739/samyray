import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
	let postData = [
		{id: 1, message: "hi, how are you?", likesCount: 4},
		{id: 2, message: "It's my first post", likesCount: 45},
		{id: 3, message: "I'm in work now", likesCount: 12},
		{id: 4, message: "Lorem", likesCount: 0},
	]
	return <div className={s.myPostAll}>
		<div className={s.myPost}>
			<h2 className={s.myPost__header}>My posts</h2>
			<textarea className={s.myPost__input} cols="50" rows="10" placeholder="Введите сообщение"></textarea>
			<button className={s.myPost__btn}>Add post</button>
		</div>
		<div className={s.posts}>
			<Post massage={postData[0].message} likesCount={postData[0].likesCount}/>
			<Post massage={postData[1].message} likesCount={postData[1].likesCount}/>
			<Post massage="It's my first post" likesCount="23"/>
			<Post massage="I'm in work now" likesCount="14"/>
			<Post massage="Lorem" likesCount="0"/>
		</div>
	</div>

}
export default MyPost;