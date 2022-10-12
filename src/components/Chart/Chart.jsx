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

    let loadTopic = useLoaderData().data
    
    console.log(loadTopic)

    const data = [
        {
            name: "React",
            total: 8,
            
        },
        {
            name: "JavaScript",
            total: 9,
           
        },
        {
            name: "CSS",
            total:8,
           
        },
        {
            name: "Git",
            total: 11,
            
        }
        
    ];
	return (
		<div>
			{/* <ResponsiveContainer width={300} height= {50%} > */}
				<LineChart 
					width={500}
					height={500}
					data={data}
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
						dataKey="pv"
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
