// import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

// export const TopictListContext = createContext([]);

const Root = () => {
	// const loadOption = useLoaderData();
	// const option = loadOption.data;

	return (
		<div>
			{/* <TopictListContext.Provider value ={option}>
            
            </TopictListContext.Provider> */}

			<Header></Header>

			<Outlet></Outlet>
		</div>
	);
};

export default Root;
