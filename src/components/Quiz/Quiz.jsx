
import { toast } from "react-toastify";
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ ques }) => {
	// console.log(ques.options)
	const { question, options, index, correctAnswer, id } = ques;



    const handleIcon = () =>{
        if(correctAnswer){
            return toast.success(correctAnswer,{autoClose:500})  
        }  
    }

    const handleClickBtn = (value) => {
        console.log(value)
        const ans = correctAnswer
        
        if(value === ans){
            // console.log("ckidddddddddd")
             toast.success('correct answer',{autoClose : 500})
        }
        else{
           toast.warning('wrong option', {autoClose : 500})
        }
    }

	
	return (
		<div className=" border mt-10 bg-slate-300 rounded-md">
			
				 

				<p className="mt-8">{question.slice(3,-4)}</p>
				<button onClick={handleIcon}><EyeIcon  className="h-6 w-6 mx-3 mt-5"/></button>
				 <div className="m-6 p-10 bg-slate-200 grid lg:grid-cols-2 gap-8 sm:grid-cols-1">
				 {
					options.map((option) =><label key={option.id}  className="preference  mx-auto p-8   w-64 bg-teal-500  py-8 rounded-lg " onClick={() =>handleClickBtn(option)}><input type="radio" value="correctAnswer"  />{option}</label>)
				 }
				 </div>
		</div>
	);
};

export default Quiz;
