import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import AllQuiz from '../AllQuiz/AllQuiz';
import Topic from '../Topic/Topic';

const TopicList = () => {
    // const loadData = useLoaderData()
    // const getTopics = loadData.data
    // console.log(getTopics)
    const [topic , setTopic] = useState([])

    useEffect(() => {
		fetch("https://openapi.programming-hero.com/api/quiz")
			.then((res) => res.json())
			.then((data) => setTopic(data.data));
	}, []);
    return (
        <div>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 mx-auto p-10'>
            
            {
                topic.map(item =><Topic key={item.id} item={item}></Topic>)
            }
            </div>
            
        </div>
    );
};

export default TopicList;