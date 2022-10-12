
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    const loadQuiz = useLoaderData().data
    const loadQuestion = loadQuiz.questions
    // console.log(loadQuestion)


    

    

    

    

    return (
        <div className='lg:w-1/2 sm:w-full mx-auto '>
            
            {
                loadQuestion.map((ques,index) => <Quiz  key={index+1} ques={ques}></Quiz>)
            }
            
        </div>
    );
};

export default AllQuiz;