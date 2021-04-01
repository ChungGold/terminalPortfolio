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
            <span> by <a className = 'original' href= 'https://samuelsandoval.me/'>samuelsandoval.me</a> - Type 
                <span className = 'command'> help </span> 
                for a list of supported commands.
            </span>
            <br></br>
            <span className = 'prompt'><i class="fas fa-arrow-right"></i>  ~  </span>
        </div>

    </div>);
}

export default Terminal;