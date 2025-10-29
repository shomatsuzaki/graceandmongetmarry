// get viewport width and height
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const pw = 'roses';

var input = document.getElementById('pw');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('password-btn').click();
    }
});

function checkPw() {
	const entered = document.getElementById('pw').value;
	if (entered === pw) {
		// document.getElementById('login').style.display = 'none';
		document.getElementById('login').style.opacity = '0';
		document.getElementById('login').style.pointerEvents = 'none';
        document.getElementById('content').style.display = 'block';
	} else {
		document.getElementById('msg').textContent = "sorry, try again!";
	}
}

window.onresize = function() {
	// update viewport width and height
	vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
};

window.addEventListener('scroll', function() {
	const scheduleSection = document.getElementById('schedule');
	const hiddenDiv = document.getElementById('top-nav');

	// Get the position of the target section relative to the viewport
	const schedulePos = scheduleSection.getBoundingClientRect().top;

	// Get the height of the viewport
	const viewportHeight = window.innerHeight;

	if (schedulePos < 0) {
		hiddenDiv.style.pointerEvents = 'auto';
		hiddenDiv.style.opacity = '1';
	} else {
		hiddenDiv.style.opacity = '0';
		hiddenDiv.style.pointerEvents = 'none';
	}

	const photoSchedule1 = document.getElementById('photo-schedule1');
	if (schedulePos < viewportHeight / 1.8) {
		if (vw > 600) { // for desktop and tablet
			photoSchedule1.style.transform = 'translate(0vw, 0vw) rotate(6deg)';
		} else { // for mobile
			photoSchedule1.style.transform = 'translate(-40px, -20px) rotate(6deg)';
		}
	}

	const photoTravel1 = document.getElementById('photo-travel1');
	const photoTravel2 = document.getElementById('photo-travel2');
	const travelPos = document.getElementById('travel').getBoundingClientRect().top;
	if (travelPos < viewportHeight / 1.8) {
		if (vw > 900) { // for desktop
			photoTravel1.style.transform = 'translate(0vw, -4vw) rotate(6deg)';
			photoTravel2.style.transform = 'translate(0vw, 0vw) rotate(-6deg)';
		} else if (vw > 600) { // for tablet
			photoTravel1.style.transform = 'translate(-3vw, -4vw) rotate(6deg)';
			photoTravel2.style.transform = 'translate(3vw, 0vw) rotate(-6deg)';
		} else { // for mobile
			photoTravel1.style.transform = 'translate(-120px, 70px) rotate(6deg)';
			photoTravel2.style.transform = 'translate(120px, 0px) rotate(-6deg)';
		}
	}

	const photoHotel1 = document.getElementById('photo-hotel1');
	const hotelPos = document.getElementById('hotel').getBoundingClientRect().top;
	if (hotelPos < viewportHeight / 1.8) {
		if (vw > 600) { // for desktop and tablet
			photoHotel1.style.transform = 'translate(0vw, 0vw) rotate(-6deg)';
		} else { // for mobile
			photoHotel1.style.transform = 'translate(-10px, 0px) rotate(-6deg)';
		}
	}

	const photoTodo1 = document.getElementById('photo-todo1');
	const photoTodo2 = document.getElementById('photo-todo2');
	const todoPos = document.getElementById('to-do').getBoundingClientRect().top;
	if (todoPos < viewportHeight / 1.8) {
		if (vw > 900) { // for desktop
			photoTodo1.style.transform = 'translate(0vw, 0vw) rotate(-6deg)';
			photoTodo2.style.transform = 'translate(0vw, -4vw) rotate(6deg)';
		} else if (vw > 600) { // for tablet
			photoTodo1.style.transform = 'translate(-3vw, 0vw) rotate(-6deg)';
			photoTodo2.style.transform = 'translate(3vw, -4vw) rotate(6deg)';
		} else { // for mobile
			photoTodo1.style.transform = 'translate(-120px, 0px) rotate(-6deg)';
			photoTodo2.style.transform = 'translate(120px, 70px) rotate(6deg)';
		}
	}

	const photoFAQ1 = document.getElementById('photo-faq1');
	const photoFAQ2 = document.getElementById('photo-faq2');
	const faqPos = document.getElementById('faq').getBoundingClientRect().top;
	if (faqPos < 0) {
		if (vw > 600) { // for desktop and tablet
			photoFAQ1.style.transform = 'translate(25vw, 0vw) rotate(-6deg)';
			photoFAQ2.style.transform = 'translate(-25vw, -2vw) rotate(6deg)';
		} else { // for mobile
			photoFAQ1.style.transform = 'translate(32vw, 3vw) rotate(-6deg)';
			photoFAQ2.style.transform = 'translate(-32vw, 1vw) rotate(6deg)';
		}
	}

	const photoRSVP1 = document.getElementById('photo-rsvp1');
	const rsvpPos = document.getElementById('rsvp').getBoundingClientRect().top;
	if (rsvpPos < viewportHeight / 1.8) {
		if (vw > 600) { // for desktop and tablet
			photoRSVP1.style.transform = 'translate(0vw, 0vw) rotate(-6deg)';
		} else { // for mobile
			photoRSVP1.style.transform = 'translate(0px, 0px) rotate(-6deg)';
		}
	}
});