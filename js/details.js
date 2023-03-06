console.log("llego");

const queryString = location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const idEvent = params.get("id");


const detailsCard = document.getElementById('details-card');
generateDetailsCard(data.events,idEvent);

function generateDetailsCard(events,id){
    let card="";
    for (let i=0; i<events.length; i++) {
        if (events[i]._id == id) {
            let date = events[i].date;
            card+=
                `<div class="imagen d-flex align-self-center border">
                    <img src="${events[i].image}" alt="">
                </div>
                <div class="detail d-flex flex-column justify-content-center border">
                    <h3 class="align-self-start">${events[i].name}</h3>
                    <p class="align-self-start">${events[i].description}</p> 
                    <p class="event-info">Category: ${events[i].category}</p>
                    <p class="event-info">Date: ${date.slice(8, 10)}-${mounths[date.slice(5, 7) - 1]}-${date.slice(0, 4)}</p>
                    <p class="event-info">Place: ${events[i].place}</p>
                    <p class="event-info">Price: $${events[i].price}</p>
                </div>`
        }
    }
    console.log(card)
    detailsCard.innerHTML = card;
}