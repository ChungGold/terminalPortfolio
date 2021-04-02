import React from 'react';

function Terminal() {
    return (<div id = 'terminal'>

        <div id = 'bar'>
        
            <div id = 'exit'>
                <span id = 'red'></span>
                <span id = 'yellow'></span>
                <span id = 'green'></span>
            </div>

            <h4 id = 'title'>guest@chungs-terminal.vercel.app :</h4>
        </div>

        <div id = 'commandLine'>
            <span> Inspired by <a id = 'original' href= 'https://samuelsandoval.me/'>samuelsandoval.me</a> - Type 
                <span class = 'commands'> help </span> 
                for a list of supported commands.
            </span>
            <br></br>
            <span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>
        </div>

    </div>);
}

export default Terminal;