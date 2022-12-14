import React from "react";
import { Link } from "react-router-dom";

import images from "../images/hero.png";
import TopicList from "../Topics/TopicList";

const Home = () => {
	return (
		<div>
			<section>
				<div className="bg-gray-100">
					<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
							It matters how you ask
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
						Assessment, instruction, and practice that motivate every student to mastery
						</p>
						<div className="flex flex-wrap justify-center">
							<Link to="/topics">
								<button
									type="button"
									className="px-8 py-3 m-2 text-lg font-semibold rounded-xl  text-gray-900 hover:bg-red-400 bg-cyan-200"
								>
									Start Now
								</button>
							</Link>
							<Link to="/about">
								<button
									type="button"
									className="px-8 py-3 m-2 text-lg border rounded-full bg-amber-200 hover:bg-orange-400 text-gray-900"
								>
									Learn more
								</button>
							</Link>
						</div>
					</div>
				</div>
				<img
					src={images}
					alt=""
					className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
				/>
			</section>

			<TopicList></TopicList>
		</div>
	);
};

export default Home;
