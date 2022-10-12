import { createBrowserRouter } from "react-router-dom"
import AllQuiz from "./AllQuiz/AllQuiz"
import Blog from "./Blog/Blog"
import Chart from "./Chart/Chart"
import ErrorPage from "./ErrorPage/ErrorPage"
import Home from "./Home/Home"

import Quiz from "./Quiz/Quiz"
import Root from "./Root/Root"
import TopicList from "./Topics/TopicList"
// import Topics from "./Topic/Topics"

const router = createBrowserRouter([
    
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
                
            },
            {
                path : '/topics',
                element : <AllQuiz></AllQuiz>,
                loader : () => fetch(`https://openapi.programming-hero.com/api/quiz/1`)
            
            },
            {
                path : '/topics/:id',
                element : <Quiz></Quiz>,
                loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            
            },
            {
                path : '/statistics',
                 element : <Chart></Chart>,
                 loader : () => fetch('https://openapi.programming-hero.com/api/quiz')
                

            }

        ]
        
    },
    
    // {   path : '/home',
    //     element : <TopicList></TopicList>,
    //     loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
        
    // }
  ])

  export default router