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
            <p>Total capacity: ${i.capacity} </p>
            <p>Available ticket: ${availableTicket}</p>
            <p>Tickets Sold: ${i.tickets_sold} </p>
            <a id="ticketButton" href=#myForm><button>Buy Ticket</button>
        </card>
        `;
   
        movies.appendChild(newMovies);
        
})

}

