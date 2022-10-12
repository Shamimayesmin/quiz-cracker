
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    const loadQuiz = useLoaderData().data
    const loadQuestion = loadQuiz.questions
    // console.log(loadQuestion)


    return (
        <div className='lg:w-1/2 sm:w-full mx-auto '>
            <h1 className='mt-10 font-bold text-3xl text-cyan-600'>JavaScript Quiz Test</h1>
            
            {
                loadQuestion.map((ques,index) => <Quiz index={index} key={ques.id}  ques={ques}></Quiz>)
            }
            
        </div>
    );
};

export default AllQuiz;