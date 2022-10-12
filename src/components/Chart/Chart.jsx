import React from "react";
import { useLoaderData } from "react-router-dom";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";




const Chart = () => {

    let loadData = useLoaderData()
    const newData = loadData.data
    // console.log(newData)
	
	return (
		<div className="mt-8 grid sm:grid-cols-1 mx-auto w-96 sm:w-full">
			{/* <ResponsiveContainer width={300} height= "80%" > */}
				<LineChart 
					width={500}
					height={500}
					data={newData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="uv"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="total" stroke="#82ca9d" />
				</LineChart>
			{/* </ResponsiveContainer> */}

            
		</div>
	);
};

export default Chart;
