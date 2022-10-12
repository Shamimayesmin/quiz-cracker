import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Option = () => {

    const option = useLoaderData()
    console.log (option)
    return (
        <div>
            <div className="m-10">
            {/* <div class="preference bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[0]}</label>
						
			</div>
            <div class="preference bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[0]}</label>
						
			</div>
            <div class="preference bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[0]}</label>
						
			</div>
            <div class="preference bg-slate-400 w-64  py-8 rounded-lg ">
                        <input type="checkbox" name="checkbox-1" id="id" />
						<label onClick={(e)=> handleClickBtn (e)} for="cheese">{options[0]}</label>
						
			</div> */}
			{/* <button ><span>button2</span></button>
			<button ><span>button2</span></button>
			<button ><span>button2</span></button> */}
            
            
            </div>
            
        </div>
    );
};

export default Option;