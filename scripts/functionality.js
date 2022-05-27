
class ProjectManager{
    ProjectManager(title, descript, link, placement, background){
        this.projectTitle = title;
        this.projectDescription = descript;
        this.projectLink = link;
        this.projectPlacement = placement;
        this.projectBackground = background;
    }

    createCard(event){
        event.preventDefault();
        
        const cards = document.createElement('div');
        cards.classList.add('cards');
    
        const projectLink = document.createElement('a');
        projectLink.classList.add('card');
        projectLink.setAttribute('href', this.projectLink);
        projectLink.setAttribute('target', '_blank');


        const projectImage = document.createElement('img');
        projectImage.classList.add('card__image');
        projectImage.setAttribute('alt', 'Project Background');
        projectImage.setAttribute('src', this.projectBackground);
        
        const cardOverlay = document.createElement('div');
        cardOverlay.classList.add('card__overlay');
    
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card__header');
    
        const svgPath = document.createElement('svg');
        svgPath.classList.add('card__arc');
        // svgPath.setAttribute('path', '')
    
        const cardHeaderText = document.createElement('div');
        cardHeaderText.classList.add('card__header-text');
    
        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__title');
        cardTitle.innerHTML = this.projectTitle;
    
        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card__description');
        cardDescription.innerHTML = this.projectDescription;
        
        var projectLocation = document.querySelector('.' + this.projectPlacement);
        projectLocation.appendChild(cards);

        cards.appendChild(projectLink);
        projectLink.appendChild(projectImage);
        projectLink.appendChild(cardOverlay);
        cardOverlay.appendChild(cardHeader);
        // cardHeader.appendChild(svgPath);
        cardHeader.appendChild(cardHeaderText);
        cardHeaderText.appendChild(cardTitle);
        cardOverlay.appendChild(cardDescription);
    
    }   
}
            /* Display Projects */
const newProject = new ProjectManager();
window.addEventListener('load', ()=>{
    
    for(let i =0; i < allProjects.length; i++){
        newProject.ProjectManager(
            allProjects[i].project_name,
            allProjects[i].project_description,
            allProjects[i].project_projectLink,
            allProjects[i].project_location,
            allProjects[i].project_background,
        )
        newProject.createCard(event);
    }
})



const allProjects = []
// allProjects.push({
//     project_name:'Flash Chat',
//     project_description:'A cross-platform chat based app with native support for both IOS and Android.',
//     project_projectLink:'https://github.com/luis-salcedo/flash-chat',
//     project_background: '/assets/project-background/flutter/flash-chat/flash_chat.PNG',
//     // project_background: '/assets/bank_app.PNG',
//     project_type:'flutter',
//     project_location:'flutter-projects',
// })
const projectNames = [
    'Bank Manager',
    'Dataset Reader',
    'School Manager',
    'Taxi Manager',
    'File Manager',
    'Flash Chat',
    'Instagram Analysis',
]
const projectTypes = [
    'flutter',
    'cpp',
    'python',
    'front-end',
]
const locations = [
    'python-projects',
    'flutter-projects',
    'front-end-projects',
    'cpp-projects',
]
// Auto Generated Projects for testing
for(let i = 0; i < 5; i++){
    allProjects.push({
        project_name:projectNames[0 + Math.floor(Math.random() * projectNames.length)],
        project_description:projectNames[0 + Math.floor(Math.random() * projectNames.length)],
        project_projectLink:'https://github.com/luis-salcedo/BankApp',
        project_background: '/assets/project-background/flutter/flash-chat/flash_chat.PNG',
        // project_background: '/assets/bank_app.PNG',
        project_type:projectTypes[0 + Math.floor(Math.random() * projectTypes.length)],
        project_location:locations[0 + Math.floor(Math.random() * locations.length)],
    })
    
}
// allProjects.push({
//     project_name:'Bank Manager',
//     project_description:'A Banking Client Management System.',
//     project_projectLink:'https://github.com/luis-salcedo/BankApp',
//     project_background: '/assets/project-background/cpp/bank-app/bank_app.PNG',
//     // project_background: '/assets/bank_app.PNG',
//     project_type:'flutter',
//     project_location:'flutter-projects',
// })