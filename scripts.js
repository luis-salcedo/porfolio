const switchElement = document.querySelector('.moon-switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})