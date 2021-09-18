let slideIndex = 0;
showSlides();

/*this is the function for mobile phone click on hamburger*/
function myFunction() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/*this is a function for slide photo in index , partner and review  HTML*/
function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 5000); // Change image every 10 seconds
}

/*this is a function for contact details in contact HTML*/
function alertClick() {
	const text = 'sent'
	document.getElementById("submit").innerHTML = text;
	alert(' Notice: Details alert! \n Your contact details has been sent')

}

/*this is a function for appointment contact HTML*/
function apptClick() {
	let green;
	let red;
	if (confirm('Your appointment will be scheduled and we will contact you one day in advance\n\nWill you be okay with that?')) {
		green = "Appointment Confirmed";
		document.getElementById("green").innerHTML = green;
		alert('Your appointment is set')
	} else {
		red = "Appointment Cancelled";
		document.getElementById("red").innerHTML = red;
	}


}