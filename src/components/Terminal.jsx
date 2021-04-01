import React from 'react';

function Terminal() {
    return (<div id = 'terminal'>

        <div id = 'bar'>
        
            <div id = 'exit'>
                <span id = 'red'></span>
                <span id = 'yellow'></span>
                <span id = 'green'></span>
            </div>

            <h4 id = 'title'>guest@chungs-terminal.vercel.app:</h4>
        </div>

        <div id = 'commandLine'>
            <span>Inspired by Samuel Sandoval's terminal portfolio - Type <span>help</span> for a list of supported commands.</span>
        </div>

    </div>);
}

export default Terminal;