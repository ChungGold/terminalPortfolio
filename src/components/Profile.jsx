import React from 'react';
import me from './me.png';


function Profile() {
    return (<div id = 'profile'>
        <div id = 'me'>
            <img src = {me} alt ='Chung Au'></img>
        </div>
        <h3 id = 'name'>Chung Au</h3>
        <p className = 'desc'>Front-End Developer | Vanilla Enthusist </p>
        {/* <p className = 'desc'>React | JavaScript | CSS | HTML</p>
        <p className = 'desc'>Loading MERN stack</p> */}
        <div id = 'socials'>
            <i class="icon fab fa-github-square"></i>
            <i class="icon fab fa-linkedin"></i>
            <i class="icon fas fa-envelope-square"></i>
        </div>
    </div>);
}

export default Profile;