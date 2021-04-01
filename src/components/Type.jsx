function Type() {
    window.addEventListener('keydown', (event)=>{

        const prompt = document.getElementById('prompt');



        if (event.key === 'Backspace') {
            
        } else if (event.key === 'CapsLock' 
        || event.key === 'Enter'
        || event.key === 'Shift' 
        || event.key === 'Control' 
        || event.key === 'Alt'
        || event.key === 'Tab' 
        || event.key === 'Delete' 
        || event.key === 'End' 
        || event.key === 'PageDown' 
        || event.key === 'Insert' 
        || event.key === 'Home' 
        || event.key === 'PageUp' 
        || event.key === 'Meta' 
        || event.key === 'ArrowUp' 
        || event.key === 'ArrowDown' 
        || event.key === 'ArrowLeft' 
        || event.key === 'ArrowRight' 
        || event.key === 'ContextMenu' 
        || event.key === 'Escape'
        || event.key === 'ScrollLock'
        || event.key === 'Pause'
        || event.key === 'F1'
        || event.key === 'F2'
        || event.key === 'F3'
        || event.key === 'F4'
        || event.key === 'F5'
        || event.key === 'F6'
        || event.key === 'F7'
        || event.key === 'F8'
        || event.key === 'F9'
        || event.key === 'F10'
        || event.key === 'F11'
        || event.key === 'F12'){
        } else {
            prompt.innerHTML +=
            `${event.key}`
        }
    });
}

export default Type;