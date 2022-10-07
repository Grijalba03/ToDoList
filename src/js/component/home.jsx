import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg"; 
import {Todos} from "./todos.jsx"; 

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5 fw-light ">ToDos</h1>
			< Todos/> 
			
				
		</div> 
		
	);
};

export default Home;
