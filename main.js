// ====== DEFAULT DECLARE ====== //
const buttonsBox = document.querySelectorAll('.button__box');
const pointer = document.querySelector('.pointer');


// ======BUTTON EVENT====== //
buttonsBox.forEach(buttonBox =>{
    buttonBox.addEventListener('mousemove', (e)=>{
        const position = buttonBox.getBoundingClientRect();
        //Get the correct position of cursor when hover to the button
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        //Set the button position
        buttonBox.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        //Same thing with the span element
        buttonBox.children[0].style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        pointer.classList.add('buttonHover');
    })

    //It change postion but not go back to the original positon, so what we should do
    buttonBox.addEventListener('mouseout', ()=>{
        buttonBox.style.transform = `translate(0px, 0px)`;
        //Same thing with the span element
        buttonBox.children[0].style.transform = `translate(0px, 0px)`;
        // Remove buttonHover
        pointer.classList = 'pointer';
    })
})


// ======POINTER EVENT====== //
//When cursor is moving the pointer will be at cursor position
window.addEventListener('mousemove', (e)=>{
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
})

