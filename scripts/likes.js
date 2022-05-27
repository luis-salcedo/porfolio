const mmm = document.querySelector('#tree-section-title');
if (document.body.animate) {
    mmm.addEventListener('click', pop);
    
        // mmm[i].addEventListener('click', pop);
    //   mmm[i].addEventListener('click', ()=>{
    //     const randomGen = (1 + Math.floor(Math.random() * 2));
    //     stack[i].style.backgroundImage = 'url(/assets/burning-flame/burn' + randomGen + '.gif)';
    //     stack[i].style.transform = 'rotate(0.08turn)';
    //     // stack[i].style.transform = 'translate(10px, 10%)';
    //     setTimeout(() =>{
    //       stack[i].style.backgroundImage = ''
    //       stack[i].style.transform = '';
    //     }, 5000)
    //   });
    
}
  
  function pop (e) {
    console.log('clickesd')
    for (let i = 0; i < 30; i++) {
        // We call the function createParticle 30 times
        // As we need the coordinates of the mouse, we pass them as arguments
        createParticle(e.clientX, e.clientY);
      }

  }
  
  function createParticle (x, y) {
    const stackParticle = document.createElement('stack-particle');
    document.body.appendChild(stackParticle);
    
    // Calculate a random size from 5px to 25px
    const size = Math.floor(Math.random() * 70 + 40);
    stackParticle.style.width = `${size}px`;
    stackParticle.style.height = `${size}px`;
    
    //initiate fire 
    const randomNumber = (1 + Math.floor(Math.random() * 4));
    stackParticle.style.backgroundImage = 'url(/assets/likes.gif';
    
    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  
    // Store the animation in a variable as we will need it later
    const animation = stackParticle.animate([
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
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200
    });

    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
      stackParticle.remove();
    };
  }