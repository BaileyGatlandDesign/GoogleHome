// FULLPAGE JS JAVASCIPT

// register fullpage JS
new fullpage('#fullpage', {
    // Smooth scroll, section to section
    autoscrolling: true,
    // navigation bubbles off
    navigation: false,
    // setting the anchor tags per the section
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
    // if the nav bubbles are on, tooltips will show what each section is
    navigationTooltips: ['Home', 'Broadcasting', 'Reminders', 'Entertainment', 'Education', 'Purchase', 'Reviews'],
    
    
    // Custom navigation buttons, when a page is left
    onLeave: function(origin, destination, direction){
        
        // get all other slide dots
        allDotBtns = document.querySelectorAll('.topbtn')
        // target each button individually 
        allDotBtns.forEach(btn => {
            // All pages, unless active have this class removed.
            btn.classList.remove('is-active')
        })


        // console.log("going to slide "+ destination.index)	
        const slideNum = destination.index + 1
        // Apply a certain colour per the section number
        const sectionDotBtn = document.querySelector('.tb'+slideNum) 	
        // if on tb# add # an activator to that button to change its styling.
        if(sectionDotBtn){
            sectionDotBtn.classList.add('is-active')
        }
	}
})

// Fade in animation for the google home device
const tlOne = gsap.timeline({
    scrollTrigger:{
        trigger: '.s1',
        start: 'center bottom'
    }
})

 // Get a reference to the library element
 const library = document.querySelector('sl-icon-library[name="my-icons"]');

 // Add a resolver function to translate icon names to URLs
 library.resolver = name => `/assets/icons/${name}.svg`;

 // Apply an optional mutator function to modify the SVG before it renders
 library.mutator = svg => svg.setAttribute('fill', 'currentColor');


// Section one

//animations/transitions SECTION ONE
const tl = gsap.timeline({delay: 1})

tlOne.from('.googleHomeImg',{opacity: 0, y: 200, ease:"power2.out", duration: 3} )


// Section two

//section three additional dialog

//get dialog box and change it to the section one information 
    const sec2btn = document.querySelector('.sec2btn')
    const infoDialog = document.querySelector('.info-dialog')
    // const dialogSpacer = document.createElement('div') 
    // dialogSpacer.class = "dialog-spacer"
   

    sec2btn.addEventListener('click',() => infoDialog.show() )
    
    sec2btn.addEventListener('click', () => {
    
    //change dialog label
    //console.log(infoDialog.label)
    infoDialog.label = "Personalize your reminders"
    infoDialog.innerHTML = "Have reminders play at set times, dates and more over the Google Home, to instantly know! You can also create custom phrases and greetings to initalise set processes and actions on the Google Home to make your day more efficient."
    // infoDialog.appendChild(dialogSpacer)
    // infoDialog.innerHTML += "<button class='dialog-close dialogbtn'>Close</button>"
    // const dialogClose = document.querySelector('.dialog-close')
    dialogClose.addEventListener('click', () => infoDialog.hide() )
    })



// Section Three

//get dialog box and change it to the section one information 
const sec3btn = document.querySelector('.sec3btn')

sec3btn.addEventListener('click',() => infoDialog.show() )
// dialogClose.addEventListener('click', () => infoDialog.hide() )
sec3btn.addEventListener('click', () => {

//change dialog label
//console.log(infoDialog.label)
infoDialog.label = "Have some fun and relax"
infoDialog.textContent = "Put on your favourite songs, playlists and artists on as you enjoy yor day! Maybe have an audio book read out to you to make the most out of your day! PLay games with Google also to keep yourdelf entertained..."
})

// Section Four

//get dialog box and change it to the section one information 
const sec4btn = document.querySelector('.sec4btn')

sec4btn.addEventListener('click',() => infoDialog.show() )
// dialogClose.addEventListener('click', () => infoDialog.hide() )
sec4btn.addEventListener('click', () => {

//change dialog label
// console.log(infoDialog.label)
infoDialog.label = "Simultaneously broadcast"
infoDialog.textContent = "Connect multiple smart home products together and have a fully interactive Google Home system, throughout your whole house! Play music, reminders and more through one speaker, or any range of speakers throughout your house, allowing a more intimate experience."
})

// Section Five

//get dialog box and change it to the section one information 
const sec5btn = document.querySelector('.sec5btn')

sec5btn.addEventListener('click',() => infoDialog.show() )
// dialogClose.addEventListener('click', () => infoDialog.hide() )
sec5btn.addEventListener('click', () => {

//change dialog label
// console.log(infoDialog.label)
infoDialog.label = "Learn, create and enjoy"
infoDialog.textContent = "Let the Google Home tell you stories, teach you recipes and make at home living more enjoyable! Ask google anything you want to know, to learn more about or to hear again, without touching any buttons! Voice interaction has never been this easy, until now."
})

//get all the images
const images = document.querySelectorAll('.gallery img')

// loop through each image and listen for a click 
images.forEach(image=>{
image.addEventListener('click', () => {
     //create overlay div
     const lightboxDiv = document.createElement('div') 
     lightboxDiv.id = "lightbox"
     // insert into the <body> 
     document.body.appendChild(lightboxDiv)

     //create new img element 
     const largeImg = document.createElement('img')
     largeImg.src = image.src
     // insert largeImg into lightboxDiv
     lightboxDiv.appendChild(largeImg)

     // click on lightboxdiv and close
     lightboxDiv.addEventListener('click', () =>{
         lightboxDiv.remove()
     })

      //create lightbox close button
      const lightboxClose = document.querySelector('.expand-arrow')
      lightboxDiv.appendChild(lightboxClose)
      
      // click on expand arrow also to close
      lightboxClose.addEventListener('click', () =>{
        lightboxDiv.remove()
    })
     
    })
})