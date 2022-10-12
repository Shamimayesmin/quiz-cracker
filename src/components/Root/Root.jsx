// import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
	

	return (
		<div>
			{/* <TopictListContext.Provider value ={option}>
            
            </TopictListContext.Provider> */}

			<Header></Header>

			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Root;
