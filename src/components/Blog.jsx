import React from 'react'
import blogData from './data/blogs'
import { BlogTemp } from './BlogTemp';
export default function Blog() {
    return(
        <div className='blogBox'>
            <h6 className='blogTitle'>My Blog</h6>
            <div className="blogList">
            {blogData.map((item, i)=>{
              return <BlogTemp link={item.date} title={item.title} desc={item.desc}/>
            } )}
            </div>
        </div>
    );
}