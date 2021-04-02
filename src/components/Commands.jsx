function Help() {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>List of commands:<span class ="commands"> help</span>
    ,<span class ="commands"> education</span>
    ,<span class ="commands"> stack</span></span>
    <br><span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>`
}

// function Nope() {
// const commandLine = document.getElementById('commandLine');

//     commandLine.innerHTML +=
//     `<br><span>command not found</span>
//     <br><span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>`
// }

function Education() {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>California State University of Fullerton</span>
    <br><span>B.A. Business Administration: Accounting</span>
    <br><span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>`
}

function Stack() {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span><span class ='keyword'>Languages:</span> JavaScript, CSS, HTML</span>
    <br><span class ='keyword'>Learning:</span> React, Node.js, Express, TypeScript</span>
    <br><span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>`
}

function Clear() {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML =
    `<span> Inspired by <a id = 'original' href= 'https://samuelsandoval.me/'>samuelsandoval.me</a> - Type 
    <span class = 'commands'> help </span>for a list of supported commands.</span>
    <br><span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>`
}

export {Help, Education, Stack, Clear};