//querySelector for a single class 
const container =document.querySelector('.container');
//using querySelectorAll becos we have many class with the name seat
//And grabbing all the seat in a row that are not occupied 
const seats = document.querySelectorAll('.row.seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');

let ticketPrice=+movieSelect.value;// changing d datatype to number

//update total and count
function updateSelectedCount(){
	//getting all seat with class name selected
	const selectedSeats=document.querySelectorAll('.row .seat.selected');
	//get the lenght of a node
	const selectedSeatsCount=selectedSeats.length;

	count.innerText=selectedSeatsCount;//assigning the selectedSeatsCount to the innerText on count element
	total.innerText= selectedSeatsCount * ticketPrice;
}

//movie select event 
movieSelect.addEventListener('change', e=>{
	ticketPrice=+e.target.value;
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