import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <div className='sidebar__hash'>#</div>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://wallpapers.com/images/hd/abstract-pastel-linkedin-banner-d4uikckcdgob8bo1.jpg' alt='' />
            <Avatar className='sidebar__avatar' />
            <h2>Simeon Yanev</h2>
            <h4>simeon.yanev1@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>

            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>
                    2,543 
                </p>
            </div>

            <div className='sidebar__stat'>
            <p>View on post</p>
                <p className='sidebar__statNumber'>
                    2,488 
                </p>
            </div>

        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("javascript")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>

    </div>
  )
}

export default Sidebar;