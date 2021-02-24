import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';

function Posts({posts}) {
  return (
    <div className={style.posts}>
      {
        posts.map(elem => {
          return <Post
            post={elem.text}
            key={elem.text}/>
        })
      }
    </div>
  );
}

export default Posts;
