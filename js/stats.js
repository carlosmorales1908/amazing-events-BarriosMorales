var today;
var orderedByPercentage;
var pastEventsFiltred;
var pastEvents;
var upcomingEvents;


const eventsStatisticsContainer = document.getElementById('eventStatistics');
const upcomingEventsStatisticsByCategory = document.getElementById('upcoming-events-statistics-by-category');
const pastEventsStatisticsByCategory = document.getElementById('past-events-statistics-by-category');



getDataFromApi().then(() => {
    today = data.currentDate; 
    console.log(today)
    loadPastEventsFiltred();
    orderedByPercentage = pastEventsFiltred.sort((a,b) => b.percentage - a.percentage);
    renderEventstatistics(orderedByPercentage);
    loadUpcomingEvents();
    renderStatisticsByCategory(statisticsByCategory(upcomingEvents),categories,upcomingEventsStatisticsByCategory);
    loadPastEvents();
    renderStatisticsByCategory(statisticsByCategory(pastEvents),categories,pastEventsStatisticsByCategory);
});


function loadPastEventsFiltred(){
    pastEventsFiltred = data.events.filter(even => even.assistance != undefined).map(even => {return {
        name: even.name,
        assistance: even.assistance,
        capacity: even.capacity,
        percentage: Number.parseFloat((even.assistance*100)/even.capacity).toFixed(2)
       }} )
}

function loadUpcomingEvents(){
    upcomingEvents = data.events.filter(even => even.date > today ).map(even => even);
}

function loadPastEvents(){
    pastEvents = data.events.filter(even => even.date < today ).map(even => even);
}


function renderEventstatistics(listEvents){
    row='';
    orderedByCapacity = listEvents.map(event => event);
    orderedByCapacity = orderedByCapacity.sort((a,b) => b.capacity - a.capacity);
    console.log(orderedByCapacity)
    indx=1;
    while(indx<4){
        row+=
            `<tr>
                <td>${listEvents[indx-1].name}: ${listEvents[indx-1].percentage}%</td>
                <td>${listEvents.slice(indx*-1)[0].name}: ${listEvents.slice(indx*-1)[0].percentage}%</td>
                <td>${orderedByCapacity[indx-1].name}: ${orderedByCapacity[indx-1].capacity}</td>
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
            percentageAttendance = Number.parseFloat((assistance*100)/capacity).toFixed(2);
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
                <td>${statistics[i].percentageAttendance}%</td>
            </tr>`
    }
    container.innerHTML = row;
}