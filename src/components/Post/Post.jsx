import React from 'react';
import style from './Post.module.css';

function Post({post}) {
  return (
    <div className={style.post}>
      <span>{post}</span>
    </div>
  );
}

export default Post;
