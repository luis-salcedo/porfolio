
/* Credits To css-tricks.com */

const body = document.querySelector('body');

if (document.body.animate) {
    body.addEventListener('mousemove', pop);
  }
  
  function pop (e) {
    for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
    }
    
    
  }
  function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    
    // Calculate a random size from 5px to 25px
    // const size = Math.floor(Math.random() * 20 + 5);
    const size = Math.floor(Math.random() * 30 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random color in a blue/purple palette
    // particle.style.background = 'url(/assets/fireflies.png)';
    // particle.style.background = `hsl(
    //     ${Math.random() * 219 +57 +54}, 100%, 50%)`;
    

    // Set image
    const randomNumber = (1 + Math.floor(Math.random() * 7));
    particle.style.backgroundImage = 'url(/assets/stars/star' + randomNumber + '.png';
    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  
    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 3000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200
    });

    // for(let i = 0; i < localStack.length; i++){
    //   localStack[i].style.transform = 'rotate(1turn)';
    // }
    // stackControl();
    const localStack = document.querySelectorAll('.stack');
    const localProjects = document.querySelectorAll('.square');

    //Pause animation when hover over programming stack
    for(let i = 0; i < localStack.length; i++){
      localStack[i].addEventListener('mouseenter', ()=>{
            animation.pause();
            body.removeEventListener('mousemove', pop);
            
        })
        localStack[i].addEventListener('mouseleave', ()=>{
            body.addEventListener('mousemove', pop);
            animation.play();
        })
    }
    //Pause animation when hover over projects
    for(let i = 0; i < localProjects.length; i++){
      localProjects[i].addEventListener('mouseenter', ()=>{
            animation.pause();
            body.removeEventListener('mousemove', pop);
            
        })
        localProjects[i].addEventListener('mouseleave', ()=>{
            body.addEventListener('mousemove', pop);
            animation.play();
        })
    }
    // projectsControl();
    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
      particle.remove();
    };
  }
