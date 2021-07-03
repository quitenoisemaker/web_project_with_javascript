//querySelector for a single class 
const container =document.querySelector('.container');
//using querySelectorAll becos we have many class with the name seat
//And grabbing all the seat in a row that are not occupied 
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');

populateUi();

let ticketPrice=+movieSelect.value;// changing d datatype to number



//function for saving movieIdex and price

function setMovieData(movieIndex, moviePrice){
	localStorage.setItem('selectedMovieIndex', movieIndex);
	localStorage.setItem('selectedMoviePrice', moviePrice);

}

//update total and count
function updateSelectedCount(){
	//getting all seat with class name selected
	const selectedSeats=document.querySelectorAll('.row .seat.selected');
	

	//Copy selected seats into array
	//Map through array
	//return a new array indexes
	const seatsIndex=[...selectedSeats].map((seat)=> [...seats].indexOf(seat) 
	);
	
	localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))//JSON.stringify was use to turn the array into a string

	//get the lenght of a node
	const selectedSeatsCount=selectedSeats.length;

	count.innerText=selectedSeatsCount;//assigning the selectedSeatsCount to the innerText on count element
	total.innerText= selectedSeatsCount * ticketPrice;
}

//data from localStorage and populate UI

function populateUi(){
	const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'))//converting it back to array with JSON.parse

	if (selectedSeats !==null && selectedSeats.length >0) {

		seats.forEach((seat, index)=> {
			if (selectedSeats.indexOf(index)> -1) {

				seat.classList.add('selected');
			}
		});
	}

	const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');

	if (selectedMovieIndex !==null) {

		movieSelect.selectedIndex=selectedMovieIndex;
	}
}


//movie select event 
movieSelect.addEventListener('change', e=>{
	ticketPrice=+e.target.value;
	setMovieData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
})
//end

//using arrow function and e stand for the listener parameter
container.addEventListener('click', e=>{
	//e.target brings on the element that was clicked on
	//classList.contains is a method to check for a class
	//classList.toggle is a method to Toggles between a class name for an element.(it add and remove when clicked)
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

		//adding the class "Selected"
		e.target.classList.toggle('selected')

		//calling the updateSelectedCount function 
		updateSelectedCount();
	}
})

updateSelectedCount();