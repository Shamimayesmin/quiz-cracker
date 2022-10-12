import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Topic = ({item}) => {
    const {id,logo,total,name} = item
	return (
		<div>
			<div className="max-w-xs bg-gray-100 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
				<img
					src={logo}
					alt=""
					className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
				/>
				<div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
						<h2 className="text-2xl font-semibold tracking-wide">
							{name}
						</h2>
						
					</div>
					<Link to='/topics'>
                        <button
						type="button"
						className="flex hover:bg-green-400 bg-cyan-300 rounded-full items-center justify-center w-full p-3 font-semibold tracking-wide  dark:bg-violet-400 dark:text-gray-900"
					>
						Start Practice  <ArrowRightIcon className="h-6 w-6 mx-3"/>
					</button>
                    </Link>
				</div>
			</div>
		</div>
	);
};

export default Topic;
