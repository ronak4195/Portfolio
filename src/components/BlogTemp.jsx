import React from 'react'
import './css/Blog.css'
export const BlogTemp = (props) => {
  return (
    <div className="blog-card">
        <h6 className="blog-date">{props.date}</h6>
        <h1 className="blog-title">{props.title}</h1>
        <p className="blog-description">{props.desc}</p>
    </div>
  )
}
