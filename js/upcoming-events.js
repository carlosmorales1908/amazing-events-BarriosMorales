
/*                                                                         Variable declaration                 */

const today = data.currentDate;
console.log(today);
const categoriesContainer = document.getElementById('categories');
const cardContainer = document.getElementById('cards-container');
const LisCategoriesSelected = []
const inputData = document.getElementById('textSearch');
var inputedText = "";


generateCategories(categories);
renderCards(getUpcomingEvents(data.events));




/*                                                                          Functions                            */

function generateCategories(categories){
    let categoriesItems = "";
    categories.forEach(category => {
        categoriesItems += `
            <input type="checkbox" id=${category} name="category" value=${category}>
            <label for=${category} class="label-distance">${category}</label>`
        
    })
    categoriesContainer.innerHTML = categoriesItems;
}

function getUpcomingEvents(events){
    let listData = [];
    for (let i=0; i<events.length; i++){
        if(events[i].date>today){
            listData.push(events[i]);
        }
    }
    return listData;
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
                            <a href="./details.html?id=${listData[i]._id}" class="btn">See more</a>
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
            renderCards(filterEventsByCategory(getUpcomingEvents(data.events),LisCategoriesSelected));
        }
        else{
            renderCards(getUpcomingEvents(data.events));
        }
    }
    else{
        if(LisCategoriesSelected.length!=0){
            renderCards(filterEventsByCategory(filterEventsByName(getUpcomingEvents(data.events),inputedText),LisCategoriesSelected));
        }
        else{
            renderCards(filterEventsByName(getUpcomingEvents(data.events),inputedText));
        }
    }    
});



inputData.addEventListener('keyup', function () { 
    inputedText = document.getElementById('textSearch').value;
    inputedText = inputedText.toLowerCase();
    if(LisCategoriesSelected.length==0){
        renderCards(filterEventsByName(getUpcomingEvents(data.events),inputedText));
    }
    else{
        renderCards(filterEventsByName(filterEventsByCategory(getUpcomingEvents(data.events),LisCategoriesSelected),inputedText));
    }
});