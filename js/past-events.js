

console.log(data.currentDate);
const today = data.currentDate;



const categoriesContainer = document.getElementById('categories');
function generateCategories(categories){
    let categoriesItems = "";
    categories.forEach(category => {
        categoriesItems += `
            <input type="checkbox" id=${category} name="category" value=${category}>
            <label for=${category} class="label-distance">${category}</label>`
        
    })
    return categoriesItems;
}

categoriesContainer.innerHTML=generateCategories(categories)


const cardContainer = document.getElementById('cards-container');
const mounths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
function getPastEvents(events){
    let cards = "";
    for (let i=0; i<events.length; i++){
        if(events[i].date<today){
            let date = events[i].date;
            cards += 
            `<div class="card" style="max-width: 18rem;">
                <img class="card-img-top" src="${events[i].image}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${events[i].name}</h5>
                    <h6>${date.slice(8,10)}-${mounths[date.slice(5,7)-1]}-${date.slice(0,4)}</h6>
                    <p class="card-text">${events[i].description}</p>
                    <h6>Place: ${events[i].place}</h6>
                    <div class="price d-flex justify-content-between align-items-center">
                        <p class="price">Price: $${events[i].price}</p>
                        <a href="./details.html" class="btn">See more</a>
                    </div>
                </div>
            </div>`
        }
    }
    return cards;
}

cardContainer.innerHTML = getPastEvents(data.events);