import React from 'react';
import me from './me.png';


function Profile() {
    return (<div id = 'profile'>

        <div id = 'me'>
            <img src = {me} alt ='Chung Au'></img>
        </div>

        <h3 id = 'name'>Chung Au</h3>

        <p className = 'desc'>Front-End Developer | Vanilla Enthusist </p>

        <div id = 'socials'>
            <a className = 'icon' target="_blank" href="https://github.com/ChungGold"><i class="fab fa-github-square"></i></a>
            <a className = 'icon' target="_blank" href="https://www.linkedin.com/in/chung-au/"><i class="fab fa-linkedin"></i></a>
            <a className = 'icon' target="_blank" href="https://chung-au.vercel.app/"><i class="fas fa-envelope-square"></i></a>
        </div>

    </div>);
}

export default Profile;