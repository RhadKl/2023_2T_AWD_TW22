document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let box = document.createElement('div');
        box.classList.add('box');
        document.body.appendChild(box);
        
        switch(button.id) {
            case 'monday':
                animateBox(box, 'violet');
                break;
            case 'tuesday':
                animateBox(box, 'pink');
                break;
            case 'wednesday':
                animateBox(box, 'blue');
                break;
            case 'thursday':
                animateBox(box, 'green');
                break;
            case 'friday':
                animateBox(box, 'yellow');
                break;
            case 'saturday':
                animateBox(box, 'orange');
                break;
            case 'sunday':
                animateBox(box, 'red');
                break;
        }
    });
});

function animateBox(box, color) {
    let position = 0;
    let interval = setInterval(() => {
        if (position >= 100) {
            clearInterval(interval);
            box.style.backgroundColor = color; 
            setTimeout(() => {
                box.style.border = `5px solid ${color}`; 
                box.style.backgroundColor = 'transparent';
            }, 500); 
        } else {
            position += 10;
            let borderOpacity = position / 100; 
            box.style.transform = `translateY(${position}px)`;
            box.style.backgroundColor = color; 
            box.style.border = `5px solid rgba(${color}, ${borderOpacity})`; 
        }
    }, 50);
}
