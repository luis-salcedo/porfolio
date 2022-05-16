// document.body.onload = addElement;
const projectsSection = document.querySelector('.projects-section');
const test = document.getElementById('profile-name');


const projectList= [];

function ProjectManagement(project){
    this.project_title = project.title;
    this.project_description = project.description;
    this.project_link = project.link;
    this.project_type = project.type;
    this.project_status = project.status;
}

ProjectManagement.prototype.addNew = function(){
        // Create New Project Square
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        const square = projectsSection.appendChild(newSquare);

        // Add Project Type(cpp, python) and imgClass to Created Square
        const projectType = document.createElement('div');
        projectType.classList.add(testProject.type) //Needs to add id as project name
        projectType.setAttribute('id', 'Instagram-Analytics');
        

        //Add Project title
        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('project-title');
        
        //Add Project Description
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');

        //Add Project github link
        const projectLink = document.createElement('a');
        projectLink.classList.add('project-link');

        //add project completion tag
        const projectComplition = document.createElement('div');
        projectComplition.classList.add('project-completion');
        //Completion Status
        const isCompleted = document.createElement('p');
        isCompleted.classList.add('project-status');
        //Add Title
        // const title = document.querySelector('.project-title');
        // title.textContent = 'Instagram Analytics';
        square.appendChild(projectType);
        square.appendChild(projectComplition);

        projectType.appendChild(projectTitle);
        projectType.appendChild(projectDescription);
        projectType.appendChild(projectLink);

        projectComplition.appendChild(isCompleted);
        // projectList.push(newSquare);

        

        
}
ProjectManagement.prototype.populateProject = function(){
    //Setting fields
    const title = document.querySelector('.project-title');
    title.innerHTML = testProject.title;

    const description = document.querySelector('.project-description');
    description.innerHTML = testProject.description;

    // const type = document.querySelector('.project-type');
    // type.innerHTML = testProject.type;

    const link = document.querySelector('.project-link');
    link.innerHTML = testProject.link;

    const status = document.querySelector('.project-completion .project-status');
    status.innerHTML = testProject.status;
}

ProjectManagement.prototype.modifyItmes = function(){
    const projects = document.querySelectorAll('.square');
    for(let i = 0; i < projects.length; i++){
        // Change tag color if project is completed
        if(projects[i].querySelector('.project-completion .project-status').innerHTML === "Completed"){
            projects[i].querySelector('.project-completion').style.backgroundColor = 'green';
        }

    }
}

const testProject = {
    type: "Flutter",
    title: "Luis Salcedo",
    description: 'The only king to live is here! and foreever will be',
    link: "wwww.google.com",
    status: "In Development"
}
var projectManager = new ProjectManagement(testProject);

test.addEventListener('click', () =>{
    projectManager.addNew();
    projectManager.populateProject();
    projectManager.modifyItmes();
})
