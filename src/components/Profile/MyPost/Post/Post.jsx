import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return <div>
        <div className={s.item}>
            <div>
                <img className={s.logoImage} src="https://www.crazyhippos.in/wp-content/uploads/2018/02/logo-23.jpg"
                     alt=""/>
                <div>
                    <span>like</span>
                </div>
            </div>
            <div className={s.text}>post 1</div>
        </div>

    </div>
}
export default Post;