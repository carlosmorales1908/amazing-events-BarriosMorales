// const categoriesContainer = document.getElementById('categories');
// const cardContainer = document.getElementById('cards-container');
const btnDarkMode = document.getElementById('dark-mode');
const bodyContainer = document.getElementById('body');
const footer = document.getElementById('footer');
const navControl = document.getElementById('nav-bar')
var cardsBody;


getDataFromApi().then(() => {
    cardsBody = document.querySelectorAll('.card');
    loadMode();
});



btnDarkMode.addEventListener('click', function(){
    console.log(cardsBody)
    bodyContainer.classList.toggle('dark-mode');
    categoriesContainer.classList.toggle('text-white');
    cardsBody.forEach(card => card.classList.toggle("dark-card"));
    footer.classList.toggle('dark-footer');
    navControl.classList.toggle('dark-nav');
    setStoreDarkMode(bodyContainer.classList.contains('dark-mode'));
    
})

function loadMode(){
    console.log("entra a loadMode")
    let darkmode = localStorage.getItem('darkmode');
    console.log(darkmode)
    if(!darkmode){
        setStoreDarkMode("false");
    }
    else if(darkmode == "true"){
        bodyContainer.classList.add('dark-mode');
        categoriesContainer.classList.add('text-white');
        cardsBody.forEach(card => card.classList.add("dark-card"));
        footer.classList.add('dark-footer');
        navControl.classList.add('dark-nav');
    }
    // if(darkmode){
    //     bodyContainer.classList.add('dark-mode');
    // }
    // else{
    //     setStoreDarkMode(!darkmode);
    //     console.log(!darkmode)
    // }
}

function setStoreDarkMode(value){
    localStorage.setItem('darkmode',value);
}