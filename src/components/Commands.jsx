function Help() {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>Commands:<span class ="commands"> help</span></span>
    <br>
    <span class = 'prompt'><i class="fas fa-arrow-right"></i> </span>`
}

function Nope() {
const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>Not a valid command.</span>
    <br>
    <span class = 'prompt'><i class="fas fa-arrow-right"></i> </span>`
}

export {Help, Nope};