const today = data.currentDate;
console.log(today);


const categoriesContainer = document.getElementById('categories');
function generateCategories(categories) {
    let categoriesItems = "";
    categories.forEach(category => {
        categoriesItems += `
            <input type="checkbox" id=${category} name="category" value=${category}>
            <label for=${category} class="label-distance">${category}</label>`

    })
    return categoriesItems;
}

categoriesContainer.innerHTML = generateCategories(categories)



const cardContainer = document.getElementById('cards-container');
const mounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// <h6>${date.slice(8,10)}-${date.slice(5,7)}-${date.slice(0,4)}</h6> 
function getAllEvents(events) {
    let cards = "";
    for (let i = 0; i < events.length; i++) {
        let date = events[i].date;
        cards +=
            `<div class="card" style="max-width: 18rem;">
          <img class="card-img-top" src="${events[i].image}" alt="...">
          <div class="card-body">
              <h5 class="card-title">${events[i].name}</h5>
              <h6>${date.slice(8, 10)}-${mounths[date.slice(5, 7) - 1]}-${date.slice(0, 4)}</h6>
              <p class="card-text">${events[i].description}</p>
              <h6>Place: ${events[i].place}</h6>
              <div class="price d-flex justify-content-between align-items-center">
                  <p class="price">Price: $${events[i].price}</p>
                  <a href="./details.html" class="btn">See more</a>
              </div>
          </div>
      </div>`
    }
    return cards;
}

cardContainer.innerHTML = getAllEvents(data.events);

function filterCardsByName(events, name) {
    let cards = "";
    for (let i = 0; i < events.length; i++) {
        if (events[i].name.toLowerCase().includes(name)) {
            let date = events[i].date;
            cards +=
                `<div class="card" style="max-width: 18rem;">
                    <img class="card-img-top" src="${events[i].image}" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${events[i].name}</h5>
                        <h6>${date.slice(8, 10)}-${mounths[date.slice(5, 7) - 1]}-${date.slice(0, 4)}</h6>
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

let btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener('click', function () {
    let textInput = document.getElementById('textSearch').value;
    textInput = textInput.toLowerCase();
    cardContainer.innerHTML = filterCardsByName(data.events,textInput)
});


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
