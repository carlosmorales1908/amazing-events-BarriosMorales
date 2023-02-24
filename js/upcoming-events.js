
// const year = parseInt(data.currentDate.slice(0,4));
// const mounth = parseInt(data.currentDate.slice(5,7));
// const day = parseInt(data.currentDate.slice(8,10));

const cardContainer = document.getElementById('cards-container');
console.log(data.currentDate);
const today = data.currentDate;

function getUpcomingEvents(events){
    let cards = "";
    for (let i=0; i<events.length; i++){
        if(events[i].date>today){
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

cardContainer.innerHTML = getUpcomingEvents(data.events);

// for (let i=0; i<data.events.length; i++){
//     let cond = false;
//     let yearEvent = parseInt(data.events[i].date.slice(0,4));
//     let mounthEvent = parseInt(data.events[i].date.slice(5,7));
//     let dayEvent = parseInt(data.events[i].date.slice(8,10));
//     if(yearEvent<year && !cond){
//         console.log(yearEvent<year)
//         cond=true;
//     }
//     if(yearEvent=year && !cond){
//         if(mounthEvent<mounth){
        
//             console.log(yearEvent<year)
//             cond=true;
//         }
//     }
//     if (yearEvent=year && !cond){
//         if(mounthEvent=mounth){
//             if(dayEvent<day){
//                 cond=true;
//             }
//         }
//     }
    
// }


