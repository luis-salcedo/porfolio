const allProjects = document.querySelectorAll('.square');

for(let i = 0; i < allProjects.length; i++){
    allProjects[i].addEventListener('click', () =>{
        console.log(allProjects[i] + "Clicked!");
    });
}