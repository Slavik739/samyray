import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (p) => {
	let postsElements = p.postData.map(p => <Post key={p.id} massage={p.message} likesCount={p.likesCount}/>)

	let newPostEl = React.createRef();

	const addPost = () => {
		let textInput = newPostEl.current.value;
		p.addPost(textInput);
		console.log(textInput);
	}

	return <div className={s.myPostAll}>
		<div className={s.myPost}>
			<h2 className={s.myPost__header}>My posts</h2>
			<textarea ref={newPostEl} className={s.myPost__input} cols="50" rows="10"
								placeholder="Введите сообщение"/>
			<button className={s.myPost__btn} onClick={addPost}>Add post</button>
		</div>
		<div className={s.posts}>
			{postsElements}
		</div>
	</div>
}

export default MyPost;