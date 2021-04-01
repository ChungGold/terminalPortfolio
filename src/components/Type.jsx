function Type() {
    window.addEventListener('click', ()=>{
        const terminal = document.getElementById('commandLine');
        terminal.innerHTML += 
            `<span>hello</span>`
        console.log('click');
    });
}

export default Type;