import React from 'react';
import Profile from './Profile/Profile';
import './Home.css';
import Navbar from './Navbar/Navbar';

export default function Home() {
    return (
        <div className='home-container'>
           <Navbar/>
           <Profile/>

        </div>
    );
}
