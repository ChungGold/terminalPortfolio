function Help() {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>Commands:<span class ="commands"> help</span></span>`
}

function Nope() {
    // const prompt = document.getElementById('prompt');
    // let word = prompt.textContent;

    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>Not a valid command.</span>`
}

export {Help, Nope};