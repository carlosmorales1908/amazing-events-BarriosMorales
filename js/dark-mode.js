const btnDarkMode = document.getElementById('mode');
const bodyContainer = document.getElementById('body');
const footer = document.getElementById('footer');
const navControl = document.getElementById('nav-bar');
var cardsBody;

getDataFromApi().then(() => {
    cardsBody = document.querySelectorAll('.card');
});
loadMode();

btnDarkMode.addEventListener('click', function(){
    bodyContainer.classList.toggle('dark-mode');
    categoriesContainer.classList.toggle('text-white');
    cardsBody.forEach(card => card.classList.toggle("dark-card"));
    footer.classList.toggle('dark-footer');
    navControl.classList.toggle('dark-nav');
    setStoreDarkMode(bodyContainer.classList.contains('dark-mode'));
    changeIcon(bodyContainer.classList.contains('dark-mode'));
})

function loadMode(){
    let darkmode = localStorage.getItem('darkmode');
    if(!darkmode){
        setStoreDarkMode("false");
    }
    else if(darkmode == "true"){
        bodyContainer.classList.add('dark-mode');
        categoriesContainer.classList.add('text-white');
        // getDataFromApi().then(() => {
        //     cardsBody.forEach(card => card.classList.add("dark-card"));
        // });
        footer.classList.add('dark-footer');
        navControl.classList.add('dark-nav');
    }
    changeIcon(localStorage.getItem('darkmode')!="false");
    // if(darkmode){
    //     bodyContainer.classList.add('dark-mode');
    // }
    // else{
    //     setStoreDarkMode(!darkmode);
    //     console.log(!darkmode)
    // }
}

function loadModeCards(){
    let darkmode = localStorage.getItem('darkmode');
    if(!darkmode){
        setStoreDarkMode("false");
    }
    else if(darkmode == "true"){
        cardsBody.forEach(card => card.classList.add("dark-card"));
    }
}

function setStoreDarkMode(value){
    localStorage.setItem('darkmode',value);
}

function changeIcon(darkmode){
    if(darkmode){
        btnDarkMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" 
        style="
        color: white;
        margin-left: 1em;
        margin-top: .5em;" 
        fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
      </svg>`
    }
    else{
        btnDarkMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" 
        style="
        color: black;
        margin-left: 1em;
        margin-top: .5em;" 
        fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>`
    }
}


/* PRUEBA PARA USAR EL MISMO EN LAS OTRAS PAGES */

// try{
//     getDataFromApi().then(() => {
//         cardsBody = document.querySelectorAll('.card');
//         loadMode(true);
//     });
//   }
//   catch(error){
//     console.log(error);

//     loadMode(false);
//   }


// btnDarkMode.addEventListener('click', function(){
//     bodyContainer.classList.toggle('dark-mode');
//     if(cardsBody!=undefined){
//         categoriesContainer.classList.toggle('text-white');
//         cardsBody.forEach(card => card.classList.toggle("dark-card"));
//     }
//     footer.classList.toggle('dark-footer');
//     navControl.classList.toggle('dark-nav');
//     setStoreDarkMode(bodyContainer.classList.contains('dark-mode'));
//     changeIcon(bodyContainer.classList.contains('dark-mode'));
    
// })



// function loadMode(value){
//     let darkmode = localStorage.getItem('darkmode');
//     if(!darkmode){
//         setStoreDarkMode("false");
//     }
//     else if(darkmode == "true"){
//         bodyContainer.classList.add('dark-mode');
//         if(value){
//             categoriesContainer.classList.add('text-white');
//             cardsBody.forEach(card => card.classList.add("dark-card"));
//         }
//         else{

//         }
//         footer.classList.add('dark-footer');
//         navControl.classList.add('dark-nav');
//     }
//     changeIcon(localStorage.getItem('darkmode')!="false");
//     // if(darkmode){
//     //     bodyContainer.classList.add('dark-mode');
//     // }
//     // else{
//     //     setStoreDarkMode(!darkmode);
//     //     console.log(!darkmode)
//     // }
// }