import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
	let postsElements = props.postData.map(p => <Post key={p.id} massage={p.message} likesCount={p.likesCount}/>)

	return <div className={s.myPostAll}>
		<div className={s.myPost}>
			<h2 className={s.myPost__header}>My posts</h2>
			<textarea className={s.myPost__input} cols="50" rows="10" placeholder="Введите сообщение"></textarea>
			<button className={s.myPost__btn}>Add post</button>
		</div>
		<div className={s.posts}>
			{postsElements}
		</div>
	</div>
}

export default MyPost;