import React from "react";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="circle red" color="red"></div>
			<div className="circle yellow" color="yellow"></div>
			<div className="circle green" color="green"></div>
			<div className="letters">
				<button className="boton">red</button>
				<button className="boton">yellow</button>
				<button className="boton">green</button>
				<div className="reset">
					<button>RESET</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
