import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	console.log("color", color);
	return (
		<div className="container">
			<div
				className={`circle red ${color == "red" ? "glow" : ""} `}
				color="red"></div>
			<div
				className={`circle yellow ${color == "yellow" ? "glow" : ""} `}
				color="yellow"></div>
			<div
				className={`circle green ${color == "green" ? "glow" : ""} `}
				color="green"></div>
			<div className="letters">
				<button className="stoplight" onClick={() => setColor("red")}>
					red
				</button>
				<button
					className="slowlight"
					onClick={() => setColor("yellow")}>
					yellow
				</button>
				<button className="golight" onClick={() => setColor("green")}>
					green
				</button>
				<div className="reset" onClick={() => setColor("")}>
					<button className="lastbutt">RESET</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
