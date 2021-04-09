import me from './assets/me.png';


function Profile() {
    return (<div id = 'profile'>

        <div id = 'me'>
            <img src = {me} alt ='Chung Au'></img>
        </div>

        <h3 id = 'name'>Chung Au</h3>

        <p className = 'desc'>Front-End Developer</p>

        <div id = 'socials'>
            <a className = 'icon' target="_blank" rel="noreferrer" href="https://github.com/ChungGold"><i class="fab fa-github-square"></i></a>
            <a className = 'icon' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chung-au/"><i class="fab fa-linkedin"></i></a>
            <a className = 'icon' target="_blank" rel="noreferrer" href="https://chung-au.vercel.app/"><i class="fas fa-envelope-square"></i></a>
        </div>

    </div>);
}

export default Profile;