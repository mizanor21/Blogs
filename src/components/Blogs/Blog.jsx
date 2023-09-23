import React from "react";
const Blog = ({ blog }) => {
  const { title, author, description } = blog;
  return (
    <div className="border">
      <h1 className="text-xl font-bold">{title}</h1>
      <small>{author}</small>
      <p>{description}</p>
    </div>
  );
};

export default Blog;
