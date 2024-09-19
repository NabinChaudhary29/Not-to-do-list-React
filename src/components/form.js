import React, { useState } from 'react'

export const Form = ({addtaskList}) => {
    const [form, setform] = useState({});

    const handleOnChange = (e)=>{
        const {name,value} = e.target
        // console.log(name,value);
        setform({
            ...form,[name]: value,
        });
    };

    const handleOnSubmit = e =>{
        e.preventDefault();
        addtaskList(form);
    }
    
  return (
    <form action="javascript:void(0)" onSubmit={handleOnSubmit}>
				<div className="row p-5 g-2">
					<div className="col-md-6">
						<input type="text" 
                        className="form-control" 
                        placeholder="Task" 
                        name= "task" 
                        id="task" 
                        aria-label="First name" 
                        onChange={handleOnChange}
                        />
					</div>
					<div className="col-md-3">
						<input type="number" 
                        className="form-control" 
                        placeholder="Hour" 
                        aria-label="Last name" 
                        name="hour" 
                        id="hour" 
                        onChange={handleOnChange}
                        />
					</div>
					<button type="submit" 
                    className="col-3 btn btn-primary">
                        Add Task
                    </button>
				</div>
			</form>
  );
};
