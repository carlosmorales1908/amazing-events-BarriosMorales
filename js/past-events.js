
const cardContainer = document.getElementById('cards-container');
console.log(data.currentDate);
const today = data.currentDate;

function getPastEvents(events){
    let cards = "";
    for (let i=0; i<events.length; i++){
        if(events[i].date<today){
            cards += 
            `<div class="card" style="max-width: 18rem;">
                <img class="card-img-top" src="${events[i].image}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${events[i].name}</h5>
                    <h6>${events[i].date}</h6>
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