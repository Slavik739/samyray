import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    return <div className={s.myPostAll}>

        <div className={s.myPost}>
            <p className={s.myPost__header}>My posts</p>
            <textarea className={s.myPost__input} name="" cols="50" rows="10"></textarea>
            <button className={s.myPost__btn}>Add post</button>
        </div>
        <div className={s.posts}>
            <Post massage="hi, how are you?" like="4"/>
            <Post massage="It's my first post" like="23"/>
            <Post massage="I'm in work now" like="14"/>
            <Post massage="Lorem" like="0"/>

        </div>
    </div>

}
export default MyPost;