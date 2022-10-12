import React from "react";

const Blog = () => {
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 mb-8 dark:text-gray-400">
						Question and answer about JavaScript react router ...
					</p>
					<div className="space-y-4">
						<details className="w-full border rounded-lg">
							<summary className="px-4 text-2xl wrap py-6 focus:outline-none focus-visible:ring-violet-400">
								What is the purpose of react router?
							</summary>
							<p className="px-4 text-justify py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								React Router is a standard library for routing in React. It
								enables the navigation among views of various components in a
								React Application, allows changing the browser URL, and keeps
								the UI in sync with the URL.
                                 <p><strong>Why use React Router? React Router</strong></p>
                                 React Router,and dynamic, client-side routing, allows us to build a
								single-page web application with navigation without the page
								refreshing as the user navigates. React Router uses component
								structure to call components, which display the appropriate
								information.
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								Lorem at arcu rutrum viverra metus sapien venenatis lobortis
								odio?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
								porttitor egestas tincidunt neque vehicula potenti.{" "}
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								Eleifend feugiat sollicitudin laoreet adipiscing bibendum
								suscipit erat?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								Justo libero tellus integer tincidunt justo semper consequat
								venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
								pretium sodales vel magna et massa euismod vulputate sed.{" "}
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
