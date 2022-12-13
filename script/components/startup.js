// use strict On
'use strict';

// Selecting elements


// Starting conditions
    // Check page your are on 
        let checkpage =  window.location.pathname;
    // Text speed 
        let t = 0 
        const speedoftexting = 125;
    // API 
        // URL 
            const url =  'https://mamsen.frontendkenterik.no/wp-json/wp/v2/';
        // optional end point 
            // Media 
                const endPointMedia = 'Media';
            // Post 
                const endPointPosts = 'Posts';
        // API Call value 
            let objectPost = false;
            let objectMedia = false;
// Value of object 

    const msObject = {
        
        // Categories from DB
        categorie: {
            uncategorizedID: 1,
            equiqmentID: 2,
            tripsID: 3,
            foodID: 4,
            BloggID: 5,
            welcomepageID: 7, 
            aboutMeID: 8,
            socialMediaID: 9,
            aboutinfo: 10,
            aboutMePage: 11,
            aboutmeinfo: 12,
        },

        // image eg logo and more. 
        img: {
            // background image
            headerIMG: 'HeaderIMG',
            // Nav image 
            logoIMG: 'Mamsen-logo',
            // Profile Image 
            profileIMG: 'Profile__image',
            // Section one background image 
            sectionOneIMG: 'SectionOne',
            // Section Two background image 
            sectionTwoIMG: 'SectionTwo',
            // header About page Background image 
            Aboutimg: 'AboutPage',

        }, 

    }

// Startup function 
    function startup (){
        // Let´s check if api has been called
        console.log('-- Stage 1 --');
        console.log('-- Check api call --'); 

        if(objectPost === true && objectMedia === true){
            // if both api called was made 
            console.log('-- Stage 1.1 --');
            console.log('-- API Called complett')
        } if(objectPost === false && objectMedia === false) {
            console.log('-- Stage 1.2 --');
            console.log('-- API Called Has not start booting');
            // calling API Blog; 
            msAPI('test' , endPointPosts);
            // Calling api Media
            msAPI('test' , endPointMedia);
        } if(objectPost === false) {
            msAPI('test' , endPointPosts);
        } if(objectMedia === false){
            msAPI('test' , endPointMedia);
        }
        else{
            // Error 
            console.log('error')
        }
    }

    
async function msAPI(value1 , value2) {
    try {
        const response = await fetch(url + value2);
        const result =  await response.json();
        
    } catch(error) {
        console.log(error);
    }
}


// Check api done
function addIMG(value1, value2, value3) {
    // value1 is the array value 
    value1.forEach(ms => {
            // value2 is the 
        if(ms.title.rendered === value2) {
            value3.innerHTML += `
                    <img src="${ms.guid.rendered}"  alt="${ms.alt_text}" style="width:200px;" id="${ms.id}"></img>
            `
        }
    })
}

// add img to page 
function addIMG(value1, value2, value3) {
    value1.forEach(ms => {
        if(ms.title.rendered === value2) {
            value3.innerHTML += `
                    <img src="${ms.guid.rendered}"  alt="${ms.alt_text}" style="width:200px;" id="${ms.id}"></img>
            `
        }
    })
}

// Add background img 

function addBackgroundIMG(value1, value2, value3) {
    value1.forEach(ms => {
        if(ms.title.rendered === value2) {
            let imgURL = ms.guid.rendered;
            value3.style.backgroundImage=`url(${imgURL})`
        }
    })
}




    

// clearinterval 

function clearinterval(){
    clearInterval(startInterval);
}

// function findIndex 
    function findIndex(value1, value2) {
        
    }