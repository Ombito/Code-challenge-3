const movies = document.getElementById("movies-container");
const myForm = document.getElementsByClassName("myForm")[0];
const moviesList = document.querySelector('#movieList')
let btn = document.querySelector("#ticketButton")

//fetch movies title
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(data => newmovieList(data))

function newmovieList (data) {
    data.map(i => {
        let movieReleases = document.createElement('div')
        movieReleases.innerHTML = `
        <ul>
            <li>${i.title}</li>
        </ul>
        `
        moviesList.appendChild(movieReleases);
        console.log('movieReleases')
    })
}
//fetch movie details from json server
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data => showMovies(data))

    //fetch function to display images
function showMovies (data) {

    data.map(i => {
        let newMovies = document.createElement('div')
        let availableTicket = parseInt(i.capacity - i.tickets_sold)
        newMovies.classname = "myCards"
        newMovies.innerHTML = `
        <card id="mycard">
            <img src="${i.poster}">
            <h4>${i.title}</h4>
            <p>Runtime: ${i.runtime} minutes</p>
            <p>Total capacity: ${i.capacity} minutes</p>
            <p>Available ticket: ${availableTicket}</p>
            <p>Tickets Sold: ${i.tickets_sold} </p>
            <a id="ticketButton" href=#myForm><button>Buy Ticket</button>
        </card>
        `;

    // function addButtons (btn){
    // data.map(i => {
    // if(availableTickets > 0) {
    //     availableTickets--;
    //     tickets_sold++;
    //     }
//  
//     })
//    } 
// addButtons()
// btn.addEventListener('click', console.log('I was clicked'))
        movies.appendChild(newMovies);
        
    //add a click event listener to the buy button
    // button = document.getElementById("ticketButton")
    // button.addEventListener('click', addTickets)
         
    // //add ticket function
    // function addTickets(){
    //     if(availableTickets > 0) {
    //         availableTickets--;
    //         tickets_sold++;
    //     }
    // }

    //fetch to update the tickets details
    // fetch("http://localhost:3000/films"), {
    //     method: 'PUT',
    //     headers: {
    //         'content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({availableTickets, tickets_sold}),
    // }
    // .then((res) => Response.json())
    // .then((data) => {
    //     console.log(data)
    // })

 
})

}

