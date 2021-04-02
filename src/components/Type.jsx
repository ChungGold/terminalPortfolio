import {Help, Education, Stack, Clear} from './Commands';

function Type() {
    let counter = 0;

    window.addEventListener('keydown', (event)=> {
        
        let prompt = document.getElementsByClassName('prompt');

        let line = prompt[counter];

        let word = line.textContent;

        function Nope() {
            const commandLine = document.getElementById('commandLine');
            
            commandLine.innerHTML +=
            `<br><span><span class = 'invalid'>${word}</span>: command not found</span>
            <br><span class = 'prompt'><i class="fas fa-angle-double-right"></i> </span>`
        }

        if (event.key === 'Backspace') {
            let arr = word.split('');
            arr.pop();
            line.innerHTML = `<i class="fas fa-angle-double-right"></i> `;
            line.innerHTML +=
            `${arr.join('')}`
    
        } else if (event.key === 'Enter'){
            counter++;
            if (word.toUpperCase() === ' HELP') {
                Help();
            } else if (word.toUpperCase() === ' EDUCATION') {
                Education();
            } else if (word.toUpperCase() === ' STACK') {
                Stack();
            } else if (word.toUpperCase() === ' CLEAR') {
                Clear();
                counter = 0;
            } else {
                Nope();
            }

        } else if (event.key === 'CapsLock' || event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt'|| event.key === 'Tab' || event.key === 'Delete' || event.key === 'End' || event.key === 'PageDown' || event.key === 'Insert' || event.key === 'Home' || event.key === 'PageUp' || event.key === 'Meta' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ContextMenu' || event.key === 'Escape'|| event.key === 'ScrollLock'|| event.key === 'Pause'|| event.key === 'F1'|| event.key === 'F2'|| event.key === 'F3'|| event.key === 'F4'|| event.key === 'F5'|| event.key === 'F6'|| event.key === 'F7'|| event.key === 'F8'|| event.key === 'F9'|| event.key === 'F10'|| event.key === 'F11'|| event.key === 'F12'){

        } else {
            line.innerHTML +=
            `${event.key}`
        }
    });
}

export default Type;