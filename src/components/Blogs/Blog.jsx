import React from "react";
const Blog = ({blog}) => {
    const {id, title, body} = blog;
  return (
    <div className='border'>
        <p>{id}</p>
        <h1 className='text-xl '>{title}</h1>
        <p>{body}</p>
    </div>
  );
};

export default Blog;