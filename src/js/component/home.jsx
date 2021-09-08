import React from "react";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="circle red" color="red"></div>
			<div className="circle yellow" color="yellow"></div>
			<div className="circle green" color="green"></div>
			<div className="botones">
				<button>red</button>
				<button>yellow</button>
				<button>green</button>
			</div>
		</div>
	);
};

export default Home;

const circles = document.querySelectorAll(".circles");
let activelight = 0;

setInterval(changelight, 1000);

function changelight() {
	circles[activelight].className = "circle";
	activelight++;

	if (activelight > 2) {
		activelight = 0;
	}
	const currentlight = circles[activelight];
	currentlight.classList.add(currentlight.getAttribute("color"));
}
