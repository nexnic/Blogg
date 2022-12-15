// use strict On
'use strict';


// Selecting elements
    // Dom Tree
        // Loading
                // Loading top div 
                    const introbox = document.querySelector('.loading');
                // Loading Heading 
                    const headingMSG =  document.querySelector('#loading__heading');
        // header 
            // header 
            const header = document.querySelector('header')
            // header Home
                const welcomeHead = document.querySelector('#HomeWelcome') 
                const beinspired = document.querySelector('#Intro__Home')
                const profileimg = document.querySelector('#profile__image');
                const aboutme = document.querySelector('#aboutmeHome');
            // Home 
                const sectionimgone = document.querySelector('#home__image--1');
                const sectionimgtwo = document.querySelector('#home__image--2')
        // navigation 
            // navigation Top div 
                const navtop = document.querySelector('.nav'); 
            // navigation logo 
                const navlogo = document.querySelector('.nav__desktop--logo');
        

// Starting conditions
    // Check page your are on 
        let onPage =  window.location.pathname;
    // Text speed 
        let t = 0 
        const speedoftexting = 140;
    // Default message 
        // Loading Message 
            const msgLoading = "Loading API...";
        // Loading secondary Message 
            const msgLoadingSec= "Pleas wait";
    // check 
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
        // API Object 
            let msPosts;
            let msMedia;
            const startInterval = setInterval(checkapicalled, 4000);
// Value of object 

    const msObject = {

        // Page 
        page: {
            fp: '/'
        }, 
        
        // Categories from DB
        categories: {
            uncategorizedID: 1,
            equiqmentID: 2,
            tripsID: 3,
            foodID: 4,
            BloggID: 5,
            aboutMeID: 8,
            socialMediaID: 9,
            aboutinfo: 10,
            aboutMePage: 11,
            aboutmeinfo: 12,
            nameandslogen: 14,
            beinspired: 15,
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
    console.log('-- Stage 1 --')
    msAPI(endPointPosts, 'objectPost');
    msAPI(endPointMedia, 'objectMedia');
    typeSpeed(),speedoftexting;
    
    
}




// Typeing speed 
function typeSpeed() {

    if(t < msgLoading.length) {
        headingMSG.innerHTML += msgLoading.charAt(t);
        t++
        setTimeout(typeSpeed, speedoftexting);
    }
}



async function msAPI(value1 , value2, ) {
    try {
        const response = await fetch(url + value1);
        const result =  await response.json();

        objectCopy(result, value2); 
        
        

    } catch(error) {
        console.log(error);
    }
}

// Check api done
function objectCopy(value1, value2) {
    if(value2 === 'objectPost') {
        objectPost = true;
        msPosts = value1
    }if(value2 === 'objectMedia'){
        objectMedia = true
        msMedia = value1
    }
}

// check the API called

function checkapicalled() {
    console.log('-- logger vi noe mer ');
    if(objectPost === true && objectMedia === true){
        introbox.classList.add('deactive')
        navtop.classList.remove('deactive');
        checkPage()
        clearinterval();
    }
}

// Check page 
function checkPage() {
    if(onPage === msObject.page.fp) {
        Creatbeinspired(msPosts, beinspired , msObject.categories.beinspired); 
        creatHeading(msPosts, welcomeHead, msObject.categories.nameandslogen); 
        addBackgroundIMG(msMedia, msObject.img.headerIMG, header );
        addIMG(msMedia, msObject.img.logoIMG, navlogo, 'logo');
        addIMG(msMedia, msObject.img.profileIMG, profile__image, 'img__profile');
        addBackgroundIMG(msMedia, msObject.img.sectionOneIMG, sectionimgone);
        addBackgroundIMG(msMedia, msObject.img.sectionTwoIMG, sectionimgtwo)
    }
}



function creatHeading(value1, value2, value3) {
    // value1 is the object 
    // value 2 is the dom 
    // value3 is the categorie 
    value1.forEach(ms => { 
        if(ms.categories[0] === value3){
            value2.innerHTML +=`
                <div>
                    <h1>
                        <span class="heading__largeTitle">
                            Welcome to ${ms.title.rendered}
                        </span></br>
                        <span class="heading__title1">
                        ${ms.content.rendered}
                        </span>
                    </h1>
                </div>
        `
        }
    });
}

function Creatbeinspired(value1, value2, value3){
    // value1 is the object 
    // value 2 is the dom 
    // value3 is the categorie 
    console.log(value3)
    
    value1.forEach(ms =>{
        console.log(ms.categories[0] === value3)
        if(ms.categories[0] === value3){
            value2.innerHTML += `
            <div>
                <h2 class="heading__title2">
                    ${ms.title.rendered}
                </h2>
                <p class="paragraf">
                    ${ms.content.rendered}
                </p>
            </div>
        ` 

        }
    })
    
}



// add background img 
function addBackgroundIMG(value1, value2, value3) {
    // value1 object    
    // value2 Name of IMG
    // Value3 Class or ID 
    value1.forEach(ms => {
        if(ms.title.rendered === value2) {
            let imgURL = ms.guid.rendered;
            value3.style.backgroundImage=`url(${imgURL})`
        }
    })
}

function addIMG(value1, value2, value3, value4) {
    // value1 Object 
    // Value2 Name of IMG 
    // Value3 class or ID 

    value1.forEach(ms => {
        if(ms.title.rendered === value2) {
            value3.innerHTML += `
                    <img src="${ms.guid.rendered}"  alt="${ms.alt_text}" style="width:200px;" class="${value4}"id="${ms.id}"></img>
            `
        }
    })
}


// This function is for add class and Remove class
function closediv(value1, value2, value3) {
    let newClass = value2;
    let removeclass = value3
    value1.classList.add(newClass);
    value1.classList.remove(removeclass);
}

function clearinterval(){
    clearInterval(startInterval);
}


startup ()