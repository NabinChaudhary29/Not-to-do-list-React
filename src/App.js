import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { Form } from './components/form';
import { Table } from './components/table';
function App() {

  const [taskList, setTaskList] = useState ([]);
  const [badHour, setBadListHour] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  
  const calculateTotalHour = (list)=>{
    let hr = list.reduce((acc,item)=>acc + parseInt(item.hour) , 0);
    return hr;
  }
  const calculateBadHour = (list)=>{
    let hr = list.reduce((acc,item)=>
    {
      if(item.type=='bad'){
       return  acc + parseInt(item.hour) 

      }
      else{

        return acc + 0;
      }  
    },0);
    return hr;
  }

  const addtaskList = (taskObj) => {
    const newObj = {
      ...taskObj,
      id:getRandomUniqueID(),
      type :"good",

    };
    setTaskList([
      ...taskList,newObj
    ]);

    //update totalHour

    let tHour = calculateTotalHour(
      [
        ...taskList,newObj
      ]
    );
    setTotalHour(tHour);
  };

  const switchTask = (id)=>{
    let tempTask  = [...taskList];
    tempTask = tempTask.map(item=>{
      if(item.id == id){
        item.type = item.type == 'good' ? 'bad' : 'good';
      }
      return item;
    })
    setTaskList(tempTask);

    let bHour = calculateBadHour(
      tempTask
    );
    setBadListHour(bHour);
};

const deleteTask = (id) =>{
  let tempList = [...taskList]
  tempList = tempList.filter((task) =>{
      return task.id != id;
  });
 setTaskList(tempList); 

 let tHour = calculateTotalHour(
  tempList
);
let bHour = calculateBadHour(
  tempList
);
setTotalHour(tHour);
setBadListHour(bHour);
};

const RANDOM_STRING_LENGTH = 6;
  const getRandomUniqueID = () => {
    let stringGenerator = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let randomString = "";
    for (let i = 0; i<RANDOM_STRING_LENGTH; i++){
        let randomIndex = Math.floor(Math.random() * stringGenerator.length);
        randomString = randomString +stringGenerator[randomIndex];
    }
    return randomString;
};
  return (
  <div className="wrapper">
		<div className="container text-center p-5">
			<h1>Not to do List</h1>
		</div>
		<div className="container  bg-transparent border border-dark-subtle shadow  border border-3 rounded-pill">

		<Form addtaskList ={addtaskList}/>

      
		</div>
		<div className="container p-5 mt-5 bg-transparent border border-dark-subtle shadow rounded-top border border-3">
      <Table taskList = {taskList} switchTask={switchTask} deleteTask={deleteTask} badHour={badHour} />
			<div className="container mt-5">
				<div className="row">
					<div className="col">
						<div className="alert alert-light" role="alert">
							The total hour = <span id="totalHour">{totalHour}</span> hours
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
