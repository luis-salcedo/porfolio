
// Dark Mode Enable
const switchElement = document.querySelector('.moon-switch')
let isDarked = false;
switchElement.addEventListener('click', lightsOut)
function lightsOut(){
    // isDarked = true;
    isDarked = true;
    document.body.classList.toggle('dark')
}

        /* C++ Projects */
const cppStack = document.querySelector('#cpp-stack')
const cppProjects = document.querySelectorAll('.cpp-project');

//Open all C++ Projects on a seperate page
cppStack.addEventListener('click', ()=>{
    window.open('/projects/cpp-projects.html', '_blank')
})

//Highligh All C++ Projects in Main Page
cppStack.addEventListener('mouseover', ()=>{scaleOnHover(cppProjects);});

        /* Front End Projects */

//Open all front-end Projects on a seperate page
const frontEndStack = [ document.querySelector('#html-stack'),
                        document.querySelector('#css-stack'),
                        document.querySelector('#javascript-stack')];
for(let i = 0; i < frontEndStack.length; i++){
    frontEndStack[i].addEventListener('click', ()=>{
        // Open Front End Projects Page
        window.open('/projects/frontend-projects.html', '_blank')
    })
}

//Highligh All Front end projects Projects in Main Page
const frontEndProjects = document.querySelectorAll('.frontend-project')
for(let i = 0; i < frontEndStack.length; i++){
    frontEndStack[i].addEventListener('mouseover', ()=>{scaleOnHover(frontEndProjects)})
}

        /* Python Projects */
const pythonStack = document.querySelector('#python-stack')
const pythonProjects = document.querySelectorAll('.python-project')
//Open all Python Projects on a seperate page
pythonStack.addEventListener('click', ()=>{
    window.open('/projects/python-projects.html', '_blank')
})
//Highligh All Front end projects Projects in Main Page
pythonStack.addEventListener('mouseover', ()=> {scaleOnHover(pythonProjects)})

        /* Flutter Projects */
const flutterStack = document.querySelector('#flutter-stack')
const flutterProjects = document.querySelectorAll('.flutter-project')
//Open all Flutter Projects on a seperate page
flutterStack.addEventListener('click', ()=>{
    window.open('/projects/flutter-projects.html', '_blank')
})

//Highligh All Front end projects Projects in Main Page
flutterStack.addEventListener('mouseover', ()=>{scaleOnHover(flutterProjects)})
/*  */
function scaleOnHover(projects){
    // let projects = document.querySelectorAll('.cpp-project');
    if(projects != null){
        for(let i = 0; i < projects.length; i++){
            
            projects[i].parentNode.style.transform = 'scale(1.07)';
            projects[i].parentNode.style.boxShadow = '-10px 10px 10px rgba(0,0,0,0.6)';

            //Set up animation on dark mode
            // projects[i].parentNode.style.borderRadius = '50px'
            setTimeout(() => {
                projects[i].parentNode.style.transform = '';
                projects[i].parentNode.style.boxShadow = ''
                // projects[i].parentNode.style.borderRadius = ''
            }, 10000);
        } //end for loop
    } //end null check
} //scaleOnHover()

// Open To Project Link on Card Click
const projects = document.querySelectorAll('.square'); //All Project Squares
for(let i = 0; projects.length; i++){
    projects[i].addEventListener('click', ()=>{
        window.open(projects[i].querySelector('.project-link'))
    })
}