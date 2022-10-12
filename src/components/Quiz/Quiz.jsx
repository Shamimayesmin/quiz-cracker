import React from "react";
import { toast } from "react-toastify";
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ ques }) => {
	console.log(ques.options)
	const { question, options, index, correctAnswer, id } = ques;



    const handleIcon = () =>{
        // console.log('ckickedd')
        if(correctAnswer){
            return toast.success(correctAnswer,{autoClose:500})
            
        }
        
    }

    const handleClickBtn = (id) => {
        // console.log(id)
        const value = id.target.innerText
        console.log(value)
        const ans = correctAnswer
        console.log(ans)
        if(value === correctAnswer){
            // console.log("ckidddd")
            return toast.success('correct answer',{autoClose : 500})
        }
        else{
          return toast.warning('wrong option', {autoClose : 500})
        }
    }

	// const loadOption = useLoaderData().data
	// const getOption = loadOption.questions
	// // const getQues = getOption.
	// const option = getOption.options
	// console.log(getOption)
	return (
		<div className=" border">
			<div className="bg-cyan-100 rounded-md">
				<div className="">
					<h1 className="text-2xl mt-4">
						Quiz{index}:{question}
					</h1>
				</div>
                <button onClick={handleIcon}><EyeIcon  className="h-6 w-6 mx-3"/></button>
				<div className="m-6 p-14 grid lg:grid-cols-2 gap-8 sm:grid-cols-1">
                   

					<div className="preference hover:bg-cyan-600 bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(id)=> handleClickBtn (id)} for="cheese">{options[0]}</label>
						
					</div>

					<div className="preference hover:bg-cyan-600 bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn(e)} for="cheese">{options[1]}</label>
						
					</div>
					<div className="preference hover:bg-cyan-600 bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[2]}</label>
						
					</div>
					<div className="preference hover:bg-cyan-600 bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[3]}</label>
						
					</div>
				</div>
{/* 
				<div className="grid grid-cols-2">
                <div className="preference bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[2]}</label>
						
					</div>

					<div className="preference bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[3]}</label>
						
					</div>
				</div> */}
			</div>
                
                {/* {
                    ques.options.map((item)=> <label item={item} ></label>)
                }
			 */}
		</div>
	);
};

export default Quiz;
