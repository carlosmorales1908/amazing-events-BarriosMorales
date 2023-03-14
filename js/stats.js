var today;
var orderedByPercentage;
var pastEventsFiltred;
var pastEvents;
var upcomingEvents;


const eventsStatisticsContainer = document.getElementById('eventStatistics');
const upcomingEventsStatisticsByCategory = document.getElementById('upcoming-events-statistics-by-category');
const pastEventsStatisticsByCategory = document.getElementById('past-events-statistics-by-category');



//SOLO EVENTOS PASADOS
getDataFromApi().then(() => {
    today = data.currentDate; 
    console.log(today)
    loadPastEventsFiltred();
    orderedByPercentage = highestPercentageAttendance();
    renderEventstatistics(orderedByPercentage);
    loadUpcomingEvents();
    renderStatisticsByCategory(statisticsByCategory(upcomingEvents),categories,upcomingEventsStatisticsByCategory);
    loadPastEvents();
    console.log(pastEvents)
    renderStatisticsByCategory(statisticsByCategory(pastEvents),categories,pastEventsStatisticsByCategory);

});


function loadPastEventsFiltred(){
    pastEventsFiltred = data.events.filter(even => even.assistance != undefined).map(even => {return {
        name: even.name,
        assistance: even.assistance,
        capacity: even.capacity,
        percentage: Math.round(even.assistance/even.capacity*100)
       }} )
}

function loadUpcomingEvents(){
    upcomingEvents = data.events.filter(even => even.date > today ).map(even => even);
}

function loadPastEvents(){
    pastEvents = data.events.filter(even => even.date < today ).map(even => even);
}
function highestPercentageAttendance(){
   return pastEventsInOrder=pastEventsFiltred.sort((a,b) => b.percentage - a.percentage);
//    console.log(pastEventsInOrder.lenght)
//    console.log(typeof(pastEventsInOrder))
//    console.log(pastEventsInOrder[0])
//    console.log(pastEventsInOrder[pastEventsInOrder.lenght-3])
}

function renderEventstatistics(listEvents){
    row='';
    orderedByCapacity = listEvents;
    orderedByCapacity.sort((a,b) => b.capacity - a.capacity);
    indx=1;
    while(indx<4){
        row+=
            `<tr>
                <td>${listEvents[indx-1].name}: ${listEvents[indx-1].percentage}%</td>
                <td>${listEvents.slice(indx*-1)[0].name}: ${listEvents.slice(indx*-1)[0].percentage}%</td>
                <td>${orderedByCapacity[indx-1].name}: ${orderedByPercentage[indx-1].capacity}</td>
            </tr>`
        indx++;
    }
    eventsStatisticsContainer.innerHTML=row;
}

function statisticsByCategory(eventList){
    let listEventsObj = [];
    categories.forEach(category => {
        let revenues=0;
        let assistance=0;
        let capacity=0;
        let percentageAttendance=0;
        for(let i=0; i<eventList.length; i++){
            if(eventList[i].category==category){
                if(eventList[i].assistance == undefined){
                    revenues += eventList[i].price * eventList[i].estimate;
                    assistance += eventList[i].estimate;
                }
                else{
                    revenues += eventList[i].price * eventList[i].assistance;
                    assistance += eventList[i].assistance;
                }
                capacity += eventList[i].capacity;
            }
        }
        if(revenues!=0){
            percentageAttendance = Math.round(assistance/capacity*100);
        }
        listEventsObj.push({revenues,percentageAttendance})
    })
    return listEventsObj;
}

function renderStatisticsByCategory(statistics,categories,container){
    let row="";
    const listCategories = Array.from(categories);
    for(let i=0; i<statistics.length; i++){
        row+=
            `<tr>
                <td>${listCategories[i]}</td>
                <td>$${statistics[i].revenues}</td>
                <td>${statistics[i].percentageAttendance}</td>
            </tr>`
    }
    container.innerHTML = row;
}