import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return <div className={s.myPostAll}>

        <div className={s.myPost}>
            <p className={s.myPost__header}>My posts</p>
            <textarea className={s.myPost__input} name=""  cols="50" rows="10"></textarea>
            <button className={s.myPost__btn}>Add post</button>
        </div>
        <div className={s.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    </div>

}
export default MyPost;