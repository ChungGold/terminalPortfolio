const Help = () => {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>List of commands:<span className ="commands"> help</span>
    ,<span className ="commands"> education</span>
    ,<span className ="commands"> stack</span>
    ,<span className ="commands"> clear</span></span>
    <br><span className = 'prompt'><i className="fas fa-angle-double-right"></i> </span>`
}

const Education = () =>  {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span>California State University of Fullerton</span>
    <br><span>B.A. Business Administration: Accounting</span>
    <br><span className = 'prompt'><i className="fas fa-angle-double-right"></i> </span>`
}

const Stack = () =>  {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML +=
    `<br><span><span className ='keyword'>Languages:</span> JavaScript, CSS, HTML</span>
    <br><span className ='keyword'>Learning:</span> React, Node.js, Express, TypeScript</span>
    <br><span className = 'prompt'><i className="fas fa-angle-double-right"></i> </span>`
}

const Clear = () => {
    const commandLine = document.getElementById('commandLine');

    commandLine.innerHTML =
    `<span> Inspired by <a id = 'original' href= 'https://samuelsandoval.me/'>samuelsandoval.me</a> - Type 
    <span className = 'commands'> help </span>for a list of supported commands.</span>
    <br><span className = 'prompt'><i className="fas fa-angle-double-right"></i> </span>`
}

export {Help, Education, Stack, Clear};