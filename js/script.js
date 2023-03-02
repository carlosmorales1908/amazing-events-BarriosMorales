
/*                                                                         Variable declaration                 */
const today = data.currentDate;
console.log(today);
const categoriesContainer = document.getElementById('categories');
const cardContainer = document.getElementById('cards-container');
const LisCategoriesSelected = []
const inputData = document.getElementById('textSearch');
var inputedText = "";


generateCategories(categories);
generateAllEvents(data.events);



/*                                                                          Functions                            */


function generateCategories(categories) {
    let categoriesItems = "";
    categories.forEach(category => {
        categoriesItems += `
            <input type="checkbox" id=${category} name="category" value=${category}>
            <label for=${category} class="label-distance">${category}</label>`

    })
    categoriesContainer.innerHTML = categoriesItems;
}

function generateAllEvents(events) {
    let listData = [];
    for (let i = 0; i < events.length; i++) {
        listData.push(events[i])
    }
    renderCards(listData);
}

function renderCards(listData){
    let cards = "";
    if(listData.length!=0){
        for (let i = 0; i < listData.length; i++) {
            let date = listData[i].date;
            cards +=
                `<div class="card" style="max-width: 18rem;">
                    <img class="card-img-top" src="${listData[i].image}" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listData[i].name}</h5>
                        <h6>${date.slice(8, 10)}-${mounths[date.slice(5, 7) - 1]}-${date.slice(0, 4)}</h6>
                        <p class="card-text">${listData[i].description}</p>
                        <h6>Place: ${listData[i].place}</h6>
                        <div class="price d-flex justify-content-between align-items-center">
                            <p class="price">Price: $${listData[i].price}</p>
                            <a href="./details.html" class="btn">See more</a>
                        </div>
                    </div>
                </div>`;
        }
        
    }
    else{
        cards += `<img class="img-no-found" src="./assets/no-found.png" alt="No found image">`;
    }
    cardContainer.innerHTML = cards;
}

function seeMore(id){
    console.log(id)
}




/*                                                                       Events listeners                                         */


categoriesContainer.addEventListener('click', (e) =>{
    if(e.target.checked!=undefined){
        categories.forEach(category => {
            if(e.target.value == category){
                if(e.target.checked){
                    LisCategoriesSelected.push(category);
                }
                else{
                    let pos = LisCategoriesSelected.indexOf(category);
                    if(pos!=-1){
                        LisCategoriesSelected.splice(pos, 1);
                    }
                }
            }
        })
    }
    if(inputedText==""){
        if(LisCategoriesSelected.length!=0){
            renderCards(filterCardsByCategory(data.events,LisCategoriesSelected));
        }
        else{
            generateAllEvents(data.events);
        }
    }
    else{
        if(LisCategoriesSelected.length!=0){
            renderCards(filterCardsByCategory(filterCardsByName(data.events,inputedText),LisCategoriesSelected));
        }
        else{
            renderCards(filterCardsByName(data.events,inputedText));
        }
    }    
});



inputData.addEventListener('keyup', function () { 
    inputedText = document.getElementById('textSearch').value;
    inputedText = inputedText.toLowerCase();
    if(LisCategoriesSelected.length==0){
        renderCards(filterCardsByName(data.events,inputedText));
    }
    else{
        renderCards(filterCardsByName(filterCardsByCategory(data.events,LisCategoriesSelected),inputedText));
    }
});


// inputData.addEventListener('click', function () {
//     let inputedText = document.getElementById('textSearch').value;
//     console.log(inputData)
//     if(inputedText==""){
//         console.log("Entro al if");
//         generateAllEvents(data.events);
//     }
//     console.log(inputedText);
// })

// let btnSeeMore=document.getElementsByClassName('btn');
// console.log(btnSeeMore)
// btnSeeMore.addEventListener('click', (e) =>{
//     console.log(e);
// })



// let btnSearch = document.getElementById("btn-search");
// btnSearch.addEventListener('click', function () {
//     let textInput = document.getElementById('textSearch').value;
//     textInput = textInput.toLowerCase();
//     cardContainer.innerHTML = filterCardsByName(data.events,textInput)
// });






// for (let i = 0; i < 3; i++) {
//     console.log(data[i]);
// }

// for (let props in data[0]) {
//     console.log(`${props}: ${data[0][props]}`);
// }

// let ind = 0;
// while (ind < 3) {
//     console.log(data[ind].id);
//     console.log(data[ind].name);
//     ind++;
// }

// Nombre y apellido del usuario ('name' y 'username')
// - Email ('email')
// - Celular ('phone')
// - Ciudad, latitud y longitud (dentro de 'addres' -> 'street' y 'geo')

// for (let i = 0; i < data.length; i++) {
//     console.log(`Nombre y apellido del usuario: ${data[i].name}`);
//     console.log(`Email: ${data[0].email}`);
//     console.log(`Celular: ${data[0].phone}`);
//     console.log(`Ciudad: ${data[i].address.city},
//     latitud: ${data[i].address.geo.lat}
//     longitud: ${data[i].address.geo.lng}` );
// }

// const sumar = (a,b) => a+b;
// console.log(sumar(5,5));
// console.log(sumar(3,4));

// let textSearch = document.getElementById("textSearch");
// // btnSearch.onclick = function(){
// //     textSearch.innerHTML = 'hola';
// //     console.log(textSearch);
// // }

// btnSearch.addEventListener('click',function(){
//     textSearch.innerHTML = "hola";
// })
