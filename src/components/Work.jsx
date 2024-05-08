import React from 'react'
import { Projects } from './Projects';
import projectData from './data/projectData'
import './css/Work.css'

export default function Work() {
    return(
        <div className='workBox'>
            <h1 className='workTitle'>My Work</h1>
            <div className="project-list">
            {projectData.map((item, i)=>{
              return <Projects link={item.link} title={item.title} desc={item.desc} date={item.date} tech={item.tech}/>
            } )}
          </div>  
        </div>
    );
}