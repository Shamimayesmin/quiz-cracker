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
							<summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400">
								What is context API and how it works?
							</summary>
							<p className="px-4 text-justify py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                            <p><strong>How it works?</strong></p>
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400">
								What is useRef hook?
							</summary>
							<p className="px-4 text-justify py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
