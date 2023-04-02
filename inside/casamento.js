
const historiaLink = document.getElementById("historiaLink")
const contagemLink = document.getElementById("contagemLink")
const previaLink = document.getElementById("previaLink")
const voltarLink = document.getElementById("voltarLink")
const lista = document.getElementById("lista")
const historia = document.getElementById("historia")
const contagem = document.getElementById("contagem")
const voltar = document.getElementById("voltar")

function mudarTela( num ){
    lista.style.display = 'none'
    switch(num){
        case 1:
            historia.style.display = 'flex'
            break;
        case 2:
            contagem.style.display = 'flex'
            break;
			break;
		case 3:
			previa.style.display = 'flex'
			break;
    }
    voltar.style.display = 'flex'
}

function voltarLista(){
    voltar.style.display = 'none';
    historia.style.display = 'none'
    contagem.style.display = 'none'
	previa.style.display = 'none'
    lista.style.display = 'flex'
}

//contagem---------------------------------------

let countdown;// setInterval function for countdown clock
let serviceInSession;// seTimeout function for when event is Live
const clock = document.getElementById('clock');// div that controls the clock container 
const daysUnit = document.querySelector('.days');// span element that displays the amount of days
const hoursUnit = document.querySelector('.hours');// span element that displays the amount of hours
const minutesUnit = document.querySelector('.minutes');// span element that displays the amount of minutes
const secondsUnit = document.querySelector('.seconds');// span element that displays the amount of seconds

const startDate = new Date(2023, 3, 29, 16, 00, 00).getTime();// initial date and time the countdown clock started from (Year, Month, Day, Hours, Minutes, Seconds,)
startDate > Date.now() ? timer(startDate) : calculateFutureDate(startDate);// conditional statement that decides if the timer function should start with the start date or calculate another date
// timer function takes in a date parameter in milliseconds
function timer(date){
	// countdown holds the entire timer functionality 
	countdown = setInterval(()=>{
		const now = Date.now();// current date and time
		const differenceInTime = date - now;// distance between current time and future time of event
		// checks timer to see if the distance is zero and if zero
		if(differenceInTime < 0){
			clearInterval(countdown);// clear timer
			clock.classList.add("hide");// hide the clock div element
			livestreamButton.classList.remove("hide");// show the live stream button div element
			// keeps the live stream button div element on the screen for 2 hours or 7200000 milliseconds and then
			serviceInSession = setTimeout(()=>{
				livestreamButton.classList.add("hide");// hide live stream button div element
				calculateFutureDate(date);// pass the date that countdown was counting down to, to the calculateFutureDate function
				clock.classList.remove("hide");// show the clock again
			},7200000); // after 2 hours do what's inside the setTimeout function
			return;
		}	
		timeLeft(differenceInTime);// each iteration of setInterval send updated distance to timeLeft function
	}, 1000);// every 1 second
}
// timeLeft function takes a time as a parameter in milliseconds and displays it in Days, Hours, Minutes, and Seconds
function timeLeft(time){
		const days = Math.floor(time /(1000 * 60 * 60 * 24));// milliseconds into days
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// milliseconds into hours
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// milliseconds into minutes
		const seconds = Math.floor((time % (1000 * 60)) / 1000);// milliseconds into seconds
		// conditional added to each portion of the time that will be displayed adds a zero to the front of numbers < 10
		const displayDays = `${days < 10 ? '0' : '' }${days}`;// days string that will be displayed 
		const displayHours = `${hours < 10 ? '0' : ''}${hours}`;// hours string that will be displayed
		const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;// minutes string that will be displayed
		const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;// seconds string that will be displayed
		//displays the time strings on the page individually
		daysUnit.textContent = displayDays;
		hoursUnit.textContent = displayHours;
		minutesUnit.textContent = displayMinutes;
		secondsUnit.textContent = displaySeconds;
		// next line is for testing purposes
		// console.log(displayDays+" : " +displayHours+" : "+displayMinutes+" : "+displaySeconds);
}
// calculateFutureDate takes a number in milliseconds as a parameter 
function calculateFutureDate (dateTochange){	
		const newDate = new Date(dateTochange);// converts it to date format
		const weeklyDate  = newDate.setDate(newDate.getDate() +07);// adds 7 days to that date
		timer(weeklyDate);// pass it to the timer function
		//console.log("new: "+dateTochange);		
}

//contagem---------------------------------------

function escutadores(){

    historiaLink.addEventListener( 'click' , function(){mudarTela(1)} )
    contagemLink.addEventListener( 'click' , function(){mudarTela(2)} )
	previaLink.addEventListener( 'click' , function(){mudarTela(3)} )
    voltarLink.addEventListener( 'click' , voltarLista )

}

//-------------------------------------------------------------------------------------------------------
//inicialização
window.addEventListener("load", escutadores)
