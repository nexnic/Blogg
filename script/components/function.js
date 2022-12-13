// use strict On
    'use strict';

// Typing speed

function typeSpeed(){
    if(t < introtxt.length) {
        
        introh3txt.innerHTML += introtxt.charAt(t);
        t++;
        setTimeout(typeSpeed, speed);
        setTimeout(closeIntro, 9000)
    }

}typeSpeed()

function closeIntro() {
    introsec.classList.add('introsec__deactive')
    introsec.classList.remove('introSec');

}