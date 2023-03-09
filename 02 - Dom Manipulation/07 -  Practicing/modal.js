const buttonOpenModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

buttonOpenModal.addEventListener('click', () =>{
    modalWrapper.classList.remove('invisible');

})

document.addEventListener('keydown', (event) =>{
    if(event.key === 'Escape'){
        modalWrapper.classList.add('invisible');
    }
})
