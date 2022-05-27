
const backbtn = document.querySelector('.back');

backbtn.addEventListener('click', () => {
    window.open('index.html', '_self');
})
backbtn.addEventListener('mouseenter', () =>{
    const leftArrow = document.querySelector('#left');
    const rightArrow = document.querySelector('#right');
    const btn = document.querySelector('.backbtn');

    leftArrow.style.transform = 'rotate(0.9turn)';
    rightArrow.style.transform = 'rotate(-0.9turn)';
    btn.style.transform = ' translate(0px, -30%)';
    btn.style.transition = '.8s';
    backbtn.addEventListener('mouseleave', ()=>{
        leftArrow.style.transform = '';
        rightArrow.style.transform = '';
        btn.style.transform = '';
    })
});



/* Hiding Projects */

var s = '❌';

const hideAllProjects = document.querySelectorAll('#tree-section-title');
for(let i = 0; i < hideAllProjects.length; i++){
    hideAllProjects[i].addEventListener('click', ()=>{
        hideAllProjects[i].parentElement.querySelector('ul').classList.toggle('hidden');
    })
}