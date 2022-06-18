import React, { useEffect, useState } from 'react';

function PostList({ post }) {
  console.log(post);
  return (
    <div>
      {post.map((item, i) => {
        return <li key={i}>{item.title}</li>;
      })}
    </div>
  );
}

export default PostList;
