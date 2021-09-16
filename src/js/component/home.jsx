import React from "react";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="circle red" color="red"></div>
			<div className="circle yellow" color="yellow"></div>
			<div className="circle green" color="green"></div>
			<div className="letters">
				<button className="stoplight">red</button>
				<button className="slowlight">yellow</button>
				<button className="golight">green</button>
				<div className="reset">
					<button>RESET</button>
				</div>
			</div>
		</div>
	);
};

export default Home;



